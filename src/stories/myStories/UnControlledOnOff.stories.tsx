import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {UnControlledOnOff} from "../../components/UnControlledOnOff/UnControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UnControlledOnOff',
    component: UnControlledOnOff,
} as ComponentMeta<typeof UnControlledOnOff>;

const callback = action("accordion mode change event fired")

export const UnControlledOnOffTrue = () => <UnControlledOnOff on={true} onChange={() => {
}}/>;
export const UnControlledOnOffFalse = () => <UnControlledOnOff on={false} onChange={() => {
}}/>;

