import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
import UnRating from "./components/UnRating/UnRating";
import UncontrolledRaiting from "./components/UnRating/UnRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App(props: any) {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const style = {
        width: "300px",
        margin: "auto"
    }
    return (
        <div style={style}>
            {/*<SelfControlledAccordion title={"Accordion One"}  />*/}
            {/*<SelfControlledAccordion title={"Accordion Two"}  />*/}
            {/*<Accordion
            title={"Accordion One"}
            collapsed={accordionCollapsed}
            onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<Accordion title={"Accordion Two"} collapsed={true}/>*/}
            {/*<OnOff  />*/}
            <UnControlledOnOff
                on={switchOn}
                onChange={(on) => {
                    setSwitchOn(on)
                }}
            />{switchOn.toString()}
            {/*<UncontrolledRaiting />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
