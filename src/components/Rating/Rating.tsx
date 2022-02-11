import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
        </div>
    )

}


type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return (
            <span>
            <b>Star </b>
            </span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }

}

export default Rating;