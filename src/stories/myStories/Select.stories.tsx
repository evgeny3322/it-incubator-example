import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "../../components/Select/Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Select stories',
    component: Select,
} as ComponentMeta<typeof Select>;

const callback = action("Value change")
const SelectCallback = action("Select OnClick")

const ExampleSelectOne: Story<SelectPropsType> = (args) => {
    return <Select {...args}/>
}
export const SelectStory = ExampleSelectOne.bind({})

SelectStory.args = {
    value: 1,
    onChange: callback,
    onClick: SelectCallback,
    items: [{title: "item1", value: 1}, {title: "item2", value: 2}, {title: "item3", value: 3}],
}

const ExampleSelectTwo: Story<SelectPropsType> = (args) => {

     return <Select{...args}/>
}
export const SelectStoryTwo = ExampleSelectTwo.bind({})

SelectStoryTwo.args = {
    onChange: callback,
    onClick: SelectCallback,
    items: [{title: "item1", value: 1}, {title: "item2", value: 2}, {title: "item3", value: 3}],
}

// const callback = action("Value change")
// const SelectCallback = action("Select OnClick")
//
// export const ExampleSelectOne = () => {
//     const [value,setValue] = useState('2')
//
//     return <>
//         <Select
//             onChange={callback}
//             value={value}
//             items={[{title: "item1", value: 1},
//                 {title: "item2", value: 2},
//                 {title: "item3", value: 3}]}/>
//     </>
// }
//
// export const ExampleSelectTwo = () => {
//
//     return <>
//         <Select
//             onChange={callback}
//             items={[{title: "item1", value: 1},
//                 {title: "item2", value: 2},
//                 {title: "item3", value: 3}]}/>
//     </>
// }