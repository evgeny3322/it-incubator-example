import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type SelfControlledAccordionPropsType = {
    title: string,
}

function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {

    // let [collapsed, setOn] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.title} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED})
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
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