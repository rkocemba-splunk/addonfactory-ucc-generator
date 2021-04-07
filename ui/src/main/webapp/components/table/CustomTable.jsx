import React, { useCallback, useEffect, memo, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Table from '@splunk/react-ui/Table';

import useQuery from '../../hooks/useQuery';
import { MODE_CLONE, MODE_EDIT } from '../../constants/modes';
import { PAGE_INPUT } from '../../constants/pages';
import { getUnifiedConfigs } from '../../util/util';
import { getExpansionRow } from './TableExpansionRow';
import { STYLE_MODAL, STYLE_PAGE } from '../../constants/dialogStyles';
import CustomTableRow from './CustomTableRow';
import EntityModal from '../EntityModal';
import DeleteModal from '../DeleteModal';
import TableContext from '../../context/TableContext';

function CustomTable({
    page,
    serviceName,
    data,
    handleToggleActionClick,
    handleOpenPageStyleDialog,
    handleSort,
    sortDir,
    sortKey,
}) {
    const unifiedConfigs = getUnifiedConfigs();
    const [entityModal, setEntityModal] = useState({ open: false });
    const [deleteModal, setDeleteModal] = useState({ open: false });

    const { rowData } = useContext(TableContext);

    const tableConfig =
        page === PAGE_INPUT
            ? unifiedConfigs.pages.inputs.table
            : unifiedConfigs.pages.configuration.tabs.filter((x) => x.name === serviceName)[0]
                  .table;
    const { moreInfo } = tableConfig;
    const headers = tableConfig.header;

    // TODO: add multi field mapping support
    const statusMapping = moreInfo?.filter((a) => a.mapping);

    const serviceToStyleMap = {};
    unifiedConfigs.pages.inputs.services.forEach((x) => {
        serviceToStyleMap[x.name] = x.style === STYLE_PAGE ? STYLE_PAGE : STYLE_MODAL;
    });

    const history = useHistory();
    const query = useQuery();

    // Run only once when component is mounted to load component based on initial query params
    useEffect(() => {
        // Only run when tab matches serviceName or if in input page where serviceName is undefined
        if (query && (query.get('tab') === serviceName || typeof serviceName === 'undefined')) {
            // Open modal when record is available in query params and modal is not open
            if (query.get('record') && !entityModal.open) {
                const serviceKey = Object.keys(rowData).find(
                    (x) => typeof rowData[x][query.get('record')] !== 'undefined'
                );
                if (serviceKey) {
                    const row = rowData[serviceKey][query.get('record')];
                    setEntityModal({
                        ...entityModal,
                        open: true,
                        serviceName: row.serviceName,
                        stanzaName: row.name,
                        mode: MODE_EDIT,
                    });
                }
            } else if (!query.get('record') && entityModal.open) {
                // Close modal if record query param is not available and modal is open
                // NOTE: This should only be executed in case of MODE_EDIT which is handled by
                // useEffect dependency which will only be changed in case of editing entity
                setEntityModal({ ...entityModal, open: false });
            }
        }
    }, [history.location.search]);

    const handleEntityClose = () => {
        setEntityModal({ ...entityModal, open: false });
        // remove query param and push to browser history only when mode is edit
        if (entityModal.mode === MODE_EDIT) {
            query.delete('record');
            history.push({ search: query.toString() });
        }
    };

    const handleEditActionClick = useCallback(
        (selectedRow) => {
            if (serviceToStyleMap[selectedRow.serviceName] === 'page') {
                handleOpenPageStyleDialog(selectedRow, MODE_EDIT);
            } else {
                setEntityModal({
                    ...entityModal,
                    open: true,
                    serviceName: selectedRow.serviceName,
                    stanzaName: selectedRow.name,
                    mode: MODE_EDIT,
                });
                // set query and push to history
                query.set('record', selectedRow.name);
                history.push({ search: query.toString() });
            }
        },
        [entityModal]
    );

    const handleDeleteClose = () => {
        setDeleteModal({ ...deleteModal, open: false });
    };

    const handleCloneActionClick = useCallback(
        (selectedRow) => {
            if (serviceToStyleMap[selectedRow.serviceName] === 'page') {
                handleOpenPageStyleDialog(selectedRow, MODE_CLONE);
            } else {
                setEntityModal({
                    ...entityModal,
                    open: true,
                    serviceName: selectedRow.serviceName,
                    stanzaName: selectedRow.name,
                    mode: MODE_CLONE,
                });
            }
        },
        [entityModal]
    );

    const handleDeleteActionClick = useCallback(
        (selectedRow) => {
            setDeleteModal({
                ...deleteModal,
                open: true,
                stanzaName: selectedRow.name,
                serviceName: selectedRow.serviceName,
            });
        },
        [deleteModal]
    );

    const generateModalDialog = () => {
        if (entityModal.open) {
            let label;
            if (page === 'inputs') {
                const { services } = unifiedConfigs.pages?.inputs;
                label = services.find((x) => x.name === entityModal.serviceName)?.title;
            } else {
                const { tabs } = unifiedConfigs.pages?.configuration;
                label = tabs.find((x) => x.name === entityModal.serviceName)?.title;
            }
            return (
                <EntityModal
                    page={page}
                    open={entityModal.open}
                    handleRequestClose={handleEntityClose}
                    serviceName={entityModal.serviceName}
                    stanzaName={entityModal.stanzaName}
                    mode={entityModal.mode}
                    formLabel={
                        entityModal.mode === MODE_CLONE ? _(`Clone `) + label : _(`Update `) + label
                    }
                />
            );
        }
        return null;
    };

    const generateDeleteDialog = () => {
        return (
            <DeleteModal
                isInput
                open={deleteModal.open}
                handleRequestClose={handleDeleteClose}
                serviceName={deleteModal.serviceName}
                stanzaName={deleteModal.stanzaName}
            />
        );
    };

    const generateColumns = () => {
        const column = [];
        if (headers && headers.length) {
            headers.forEach((header) => {
                column.push({
                    ...header,
                    sortKey: header.field || null,
                });
            });
        }
        column.push({ label: 'Actions', field: 'actions', sortKey: '' });
        return column;
    };

    const columns = generateColumns();

    const getTableHeaderCell = useCallback(() => {
        return (
            <Table.Head>
                {columns &&
                    columns.length &&
                    columns.map((headData) => (
                        <Table.HeadCell
                            key={headData.field}
                            onSort={headData.sortKey ? handleSort : null}
                            sortKey={headData.sortKey ? headData.sortKey : null}
                            sortDir={
                                headData.sortKey && headData.sortKey === sortKey ? sortDir : 'none'
                            }
                        >
                            {headData.label}
                        </Table.HeadCell>
                    ))}
            </Table.Head>
        );
    }, [columns, handleSort, sortDir, sortKey]);

    const getTableBody = () => {
        return (
            <Table.Body>
                {data &&
                    data.length &&
                    data.map((row) => {
                        return (
                            <CustomTableRow
                                key={row.id}
                                row={row}
                                columns={columns}
                                statusMapping={statusMapping}
                                {...{
                                    handleEditActionClick,
                                    handleCloneActionClick,
                                    handleDeleteActionClick,
                                }}
                                handleToggleActionClick={handleToggleActionClick}
                                {...(moreInfo
                                    ? {
                                          expansionRow: getExpansionRow(
                                              columns.length,
                                              row,
                                              moreInfo
                                          ),
                                      }
                                    : {})}
                            />
                        );
                    })}
            </Table.Body>
        );
    };

    return (
        <>
            {columns && columns.length && (
                <Table stripeRows {...(moreInfo ? { rowExpansion: 'single' } : {})}>
                    {getTableHeaderCell()}
                    {getTableBody()}
                </Table>
            )}
            {generateModalDialog()}
            {generateDeleteDialog()}
        </>
    );
}

CustomTable.propTypes = {
    page: PropTypes.string.isRequired,
    serviceName: PropTypes.string,
    data: PropTypes.array.isRequired,
    handleToggleActionClick: PropTypes.func,
    handleOpenPageStyleDialog: PropTypes.func,
    handleSort: PropTypes.func,
    sortDir: PropTypes.string,
    sortKey: PropTypes.string,
};

export default memo(CustomTable);
