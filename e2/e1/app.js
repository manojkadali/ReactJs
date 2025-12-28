import React from "react";
import ReactDOM from "react-dom/client";
// nested HTML elements
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}


// const parent=React.createElement(
//     "div",{id:"parent"},
//     React.createElement("div",{id:"child"},React.createElement("h1",{},"i am an h1 tag"))
// );

const parent=React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("p",{className:"para"},"passing more than i child by  using array")
    ]
    )
    
);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 