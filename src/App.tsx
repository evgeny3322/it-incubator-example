import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
import UnRating from "./components/UnRating/UnRating";
import UncontrolledRaiting from "./components/UnRating/UnRating";

function App(props:any) {

    return (
        <div>
            {/*<SelfControlledAccordion title={"Accordion One"}  />*/}
            {/*<SelfControlledAccordion title={"Accordion Two"}  />*/}
            {/*<Accordion title={"Accordion One"} collapsed={false} />*/}
            {/*<Accordion title={"Accordion Two"} collapsed={true} />*/}
            {/*<OnOff  />*/}
            <UncontrolledRaiting />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props:PageTitlePropsType){
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
