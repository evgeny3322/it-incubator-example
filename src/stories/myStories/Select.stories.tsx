import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "../../components/Select/Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Select stories',
    component: Select,
} as ComponentMeta<typeof Select>;

const callback = action("Select onChange")
const SelectCallback = action("Select OnClick")

const Template: Story<SelectPropsType> = (args) => <Select{...args}/>
export const SelectStory = Template.bind({})


SelectStory.args = {
    value: 1,
    onChange: callback,
    OnClick: SelectCallback,
    items: [{title: "item1", value: 1}, {title: "item2", value: 2}, {title: "item3", value: 3}],
}