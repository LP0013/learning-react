import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import Objects from "./tasks/structures/Objects";
import InputsToObjects from "./tasks/structures/InputsToObjects";
import ObjectsArray from "./tasks/structures/ObjectsArray";
import ConditionalTagRendering from "./tasks/editing/ConditionalTagRendering";
import LoopConditionalRendering from "./tasks/editing/LoopConditionalRendering";
import Tags from "./tasks/editing/Tags";

ReactDOM.render(
    <React.StrictMode>
        {/*<App2 />*/}
        <Objects/>
        <InputsToObjects/>
        <ObjectsArray/>
        <ConditionalTagRendering/>
        <LoopConditionalRendering/>
        <Tags/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
