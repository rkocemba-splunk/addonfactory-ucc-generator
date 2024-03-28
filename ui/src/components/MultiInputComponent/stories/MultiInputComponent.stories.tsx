import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { fn } from '@storybook/test';
import MultiInputComponent from '../MultiInputComponent';

const meta = {
    component: MultiInputComponent,
    title: 'MultiInputComponent',
    render: (props) => {
        // due to stories incompatibility, eslint rule is off
        // React Hook "useState" is called in function "render" that is neither a React function component
        // TODO: introduce a stateless stories component to reflect thaat component logic itself
        const [state, setState] = useState(props?.value || ''); // eslint-disable-line react-hooks/rules-of-hooks
        return (
            <MultiInputComponent
                {...props}
                value={state}
                handleChange={(field: string, data: string) => {
                    setState(data);
                    props.handleChange(field, data);
                }}
            />
        );
    },
} satisfies Meta<typeof MultiInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        handleChange: fn(),
        field: 'field',
        controlOptions: {
            items: [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' },
                { label: 'label3', value: 'value3' },
            ],
        },
    },
};

export const AllProps: Story = {
    args: {
        handleChange: fn(),
        field: 'field',
        controlOptions: {
            delimiter: ',',
            createSearchChoice: true,
            referenceName: 'referenceName',
            dependencies: undefined,
            endpointUrl: undefined,
            denyList: 'value1',
            allowList: 'string',
            labelField: 'labelField',
            items: [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' },
                { label: 'label3', value: 'value3' },
            ],
        },
        disabled: false,
        value: undefined,
        error: false,
        dependencyValues: {},
    },
};
