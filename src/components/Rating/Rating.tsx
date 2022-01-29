import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2
}

function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    if (props.value === 1) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    } else {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }

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