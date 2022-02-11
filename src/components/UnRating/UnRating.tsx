import React, {useState} from "react";

type UnRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4
}

export function UnRating(props: UnRatingPropsType) {

    let [value, setOn] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {
                (value !== 1) ? setOn(1) : setOn(0)
            }}>1
            </button>
            <Star selected={value > 1}/>
            <button onClick={() => {
                (value !== 2) ? setOn(2) : setOn(0)
            }}>2
            </button>
            <Star selected={value > 2}/>
            <button onClick={() => {
                (value !== 3) ? setOn(3) : setOn(0)
            }}>3
            </button>

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

export default UnRating;