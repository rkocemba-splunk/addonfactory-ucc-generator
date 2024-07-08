import React, { Component } from 'react';
import RadioBar from '@splunk/react-ui/RadioBar';
import styled from 'styled-components';
import { getValueMapTruthyFalse } from '../../util/considerFalseAndTruthy';

const RadioBarWrapper = styled(RadioBar)`
    width: 320px;
`;

const RadioBarOption = styled(RadioBar.Option)`
    margin-left: 0px !important;
`;

interface RadioComponentProps {
    id?: string;
    value: string;
    handleChange: (field: string, value: string) => void;
    field: string;
    controlOptions: {
        items: {
            value: string;
            label: string;
        }[];
    };
    disabled: boolean;
}

class RadioComponent extends Component<RadioComponentProps> {
    handleChange = (e: unknown, { value }: { value: string }) => {
        this.props.handleChange(this.props.field, value);
    };

    render() {
        return (
            <RadioBarWrapper
                id={this.props.id}
                inline
                onChange={this.handleChange}
                value={this.props.value}
                key={this.props.field}
            >
                {this.props.controlOptions.items.map((item) => (
                    <RadioBarOption
                        key={item.value}
                        value={getValueMapTruthyFalse(item.value)}
                        label={item.label}
                        disabled={this.props.disabled}
                    />
                ))}
            </RadioBarWrapper>
        );
    }
}

export default RadioComponent;
