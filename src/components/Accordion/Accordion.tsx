import React from "react";


type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}


function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    )
}

export default Accordion;