import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import SelfControlledAccordion from "../../components/SelfControlledAccordion/SelfControlledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/SelfControlledAccordion',
    component: SelfControlledAccordion,
} as ComponentMeta<typeof SelfControlledAccordion>;

const callback = action("accordion mode change event fired")

export const ControlledAccordion = () => <SelfControlledAccordion title={"Menu"}/>;
export const ControlledAccordionSkip = () => <SelfControlledAccordion title={"Menu"}/>;

// export const ChangingCollapsed = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion title={"ExampleAccordion"} collapsed={value} onChange={() => {
//         setValue(!value)
//     }}/>
// }