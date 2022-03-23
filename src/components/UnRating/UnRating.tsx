import React, {useState} from "react";

type UnRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4
}
export function UnRating(props: UnRatingPropsType) {

    let [value, setOn] = useState(props.value)

    return (
        <div>
            <Star selected={value > 0} setOn={setOn} value={1}/>
            <Star selected={value > 1} setOn={setOn} value={2}/>
            <Star selected={value > 2} setOn={setOn} value={3}/>

        </div>
    )
}

type StartPropsType = {
    selected: boolean
    setOn: (value: 1 | 2 | 3) => void
    value: 1 | 2 | 3
}

function Star(props: StartPropsType) {
    console.log("Star rendering")

    //Example edit #2 (pro)
    return <span onClick={() => {
        props.setOn(props.value)
    }}>
        {props.selected ? <b> star </b> : " star "}
        </span>

    //Example edit #1 junior
    // return props.selected === true ? <span><b>Star </b></span> : <span>Star </span>

    //Example noob
    // if (props.selected === true) {
    //     return (
    //         <span>
    //         <b>Star </b>
    //         </span>
    //     )
    // } else {
    //     return (
    //         <span>Star </span>
    //     )
    // }

}

export default UnRating;