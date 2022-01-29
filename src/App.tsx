import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App(props:any) {
    console.log("App rendering")
    return (
        <div>
            {/*<PageTitle title={"Title One"}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={props.rating}/>*/}
            {/*<PageTitle title={"Title Two"}/>*/}
            <Accordion title={"Accordion One"} collapsed={false}/>
            <Accordion title={"Accordion Two"} collapsed={true}/>
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
