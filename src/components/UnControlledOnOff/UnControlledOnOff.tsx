import React, {useState} from "react";


type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function UnControlledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false)

    const style = {
        display: "flex",
        alignItems: "center"
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: props.on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "2px solid black",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "2px solid black",
        borderRadius: "15px",
        backgroundColor: props.on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(true)
        props.onChange(true)
    }


    return (
        <div style={style}>
            <div style={onStyle} onClick={onClicked}>on
            </div>
            <div style={offStyle} onClick={offClicked}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


