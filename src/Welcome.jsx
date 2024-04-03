import React from "react";

export default function Welcome (props) {
    return <h1>Hello, {props.name}</h1>;
}


// function Welcome(props) {
//     return <h1>안녕, {props.name}</h1>;
// }

// const element = <Welcome name="인제"/>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
