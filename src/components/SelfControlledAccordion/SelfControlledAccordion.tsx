import React, {useState} from "react";
import accordion from "../Accordion/Accordion";


type SelfControlledAccordionPropsType = {
    title: string,
    // collapsed: boolean
}

function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {

    let [collapsed,setOn] = useState(false)

    // console.log(collapsed,'Accordion')
    return <div>
        <AccordionTitle title={props.title} />
        <button onClick={() => setOn(!collapsed)}>
            TOGGLE
        </button>
        {!collapsed && <AccordionBody /> }
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}


function AccordionBody() {


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

export default SelfControlledAccordion;