import React, {useState} from "react";


type OnOffPropsType = {
    // on: boolean

}


export function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false)

    const style = {
        display: "flex",
        alignItems: "center"
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "2px solid black",
        borderRadius: "15px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div style={style}>
            <div style={onStyle} onClick={() => setOn(true)}>on
            </div>
            <div style={offStyle} onClick={() => setOn(false)}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


