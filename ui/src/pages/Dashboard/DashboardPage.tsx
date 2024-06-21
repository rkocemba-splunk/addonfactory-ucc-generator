import React, { useEffect, useRef, useState } from 'react';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import TabLayout from '@splunk/react-ui/TabLayout';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { OverviewDashboard } from './Overview';
import { DataIngestionDashboard } from './DataIngestion';
import { ErrorDashboard } from './Error';
import { ResourceDashboard } from './Resource';
import { CustomDashboard } from './Custom';
import './dashboardStyle.css';
import { getBuildDirPath } from '../../util/script';
import { getUnifiedConfigs } from '../../util/util';

/**
 *
 * @param {string} fileName name of json file in custom dir
 * @param {boolean} isComponentMounted used to remove component data leakage, determines if component is still mounted and dataHandler referes to setState
 * @param {string} setData callback, called with data as params
 */
function loadJson(
    fileName: string,
    isComponentMounted: boolean,
    dataHandler: (data: Record<string, unknown>) => void
) {
    fetch(/* webpackIgnore: true */ `${getBuildDirPath()}/custom/${fileName}`)
        .then((res) => res.json())
        .then((external) => {
            if (isComponentMounted) {
                dataHandler(external);
            }
        })
        .catch((e) => {
            // eslint-disable-next-line no-console
            console.error('Loading file failed: ', e);
        });
}

function DashboardPage() {
    const [overviewDef, setOverviewDef] = useState<Record<string, unknown> | null>(null);
    const [dataIngestionDef, setDataIngestionDef] = useState<Record<string, unknown> | null>(null);
    const [errorDef, setErrorDef] = useState<Record<string, unknown> | null>(null);
    const [resourceDef, setResourceDef] = useState<Record<string, unknown> | null>(null);
    const [customDef, setCustomDef] = useState<Record<string, unknown> | null>(null);
    const isComponentMounted = useRef<boolean>(true);

    useEffect(() => {
        loadJson(
            'panels_to_display.json',
            isComponentMounted.current,
            (data: { default?: boolean; custom?: boolean }) => {
                if (data?.default) {
                    loadJson(
                        'overview_definition.json',
                        isComponentMounted.current,
                        setOverviewDef
                    );
                    loadJson(
                        'data_ingestion_tab_definition.json',
                        isComponentMounted.current,
                        setDataIngestionDef
                    );
                    loadJson('errors_tab_definition.json', isComponentMounted.current, setErrorDef);
                    loadJson(
                        'resources_tab_definition.json',
                        isComponentMounted.current,
                        setResourceDef
                    );
                }
                if (data?.custom) {
                    loadJson('custom.json', isComponentMounted.current, setCustomDef);
                }
            }
        );

        document.body.classList.add('grey_background');
        return () => {
            isComponentMounted.current = false;
            document.body.classList.remove('grey_background');
        };
    }, []);

    const globalConfig = getUnifiedConfigs();

    return (
        <ErrorBoundary>
            <div>
                <OverviewDashboard dashboardDefinition={overviewDef} />
                {overviewDef ? ( // if overview is loaded then all default tabs should be present so table is injected
                    <TabLayout
                        autoActivate
                        defaultActivePanelId="dataIngestionTabPanel"
                        id="dashboardTable"
                        style={{ minHeight: '98vh' }}
                    >
                        {errorDef && (
                            <TabLayout.Panel label="Errors" panelId="errorsTabPanel">
                                <ErrorDashboard dashboardDefinition={errorDef} />
                            </TabLayout.Panel>
                        )}
                        {resourceDef && (
                            <TabLayout.Panel
                                label="Resource consumption"
                                panelId="resourceTabPanel"
                            >
                                <ResourceDashboard dashboardDefinition={resourceDef} />
                            </TabLayout.Panel>
                        )}
                        {customDef && (
                            <TabLayout.Panel
                                label={
                                    globalConfig.pages.dashboard?.settings?.custom_tab_name ||
                                    'Custom'
                                }
                                panelId="customTabPanel"
                            >
                                <CustomDashboard dashboardDefinition={customDef} />
                            </TabLayout.Panel>
                        )}

                        {dataIngestionDef && (
                            <TabLayout.Panel label="Data ingestion" panelId="dataIngestionTabPanel">
                                <DataIngestionDashboard dashboardDefinition={dataIngestionDef} />
                            </TabLayout.Panel>
                        )}

                        {errorDef && (
                            <TabLayout.Panel label="Errors" panelId="errorsTabPanel">
                                <ErrorDashboard dashboardDefinition={errorDef} />
                            </TabLayout.Panel>
                        )}
                        {customDef && (
                            <TabLayout.Panel label="Custom" panelId="customTabPanel">
                                <CustomDashboard dashboardDefinition={customDef} />
                            </TabLayout.Panel>
                        )}
                    </TabLayout>
                ) : (
                    // if overview is null then custom tab is the only displayed component
                    // so no need to show table
                    <CustomDashboard dashboardDefinition={customDef} />
                )}
                {!overviewDef && !customDef ? (
                    <WaitSpinner size="medium" data-testid="wait-spinner" />
                ) : null}
            </div>
        </ErrorBoundary>
    );
}

export default DashboardPage;
