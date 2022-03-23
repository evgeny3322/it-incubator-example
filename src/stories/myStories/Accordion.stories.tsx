import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import Accordion, {AccordionPropsType} from "../../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change event fired")
const onClickCallback = action("click on accordion")

const Template: Story<AccordionPropsType> = (args) => <Accordion{...args}/>
export const CollapsedModeStory = Template.bind({})

CollapsedModeStory.args = {
    title: "Hi",
    collapsed: true,
    onChange: callback
}


export const UnCollapsedMode = () => <Accordion
    collapsed={false}
    title={'UnMenu'}
    items={[]}
    OnClick={onClickCallback}
    onChange={callback}/>;

export const ChangingCollapsed = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        title={"ExampleAccordion"}
        collapsed={value}
        onChange={() => {
            setValue(!value)
        }}
        items={[{title: "item1", value: 1}, {title: "item2", value: 2}, {title: "item3", value: 3}]} 
        OnClick={onClickCallback}/>
}