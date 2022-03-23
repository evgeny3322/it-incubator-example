import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from "../../components/OnOff/OnOff";

export default {
    title: 'components/OnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

export const OnOffPages: ComponentStory<typeof OnOff> = (args) => <OnOff setOn={true}/>;
