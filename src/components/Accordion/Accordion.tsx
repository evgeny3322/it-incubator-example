import React from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    OnClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.title} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} OnClick={props.OnClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    OnClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                {
                    props.items.map((i, index) => <li onClick={() => {
                        props.OnClick(i.value)
                    }} key={index}>
                        {i.title}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Accordion;