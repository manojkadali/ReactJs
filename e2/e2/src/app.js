import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

/*

// React.createElement => this generally creates a object, when it is kept in render it changes to dom and kept in html
// const heading=React.createElement("h1",{id:"heading"},"welcome to heading1");

const jsxheading=<h1 id="heading">Hello react using JSX</h1>;

const HeadingComponent=()=>{
    return <h1 className="heading">Ract Functional component</h1>
}
// const heading2=()=> <h2>this is the heading two</h2>;
const Heading2=()=>(
    <div>
        <HeadingComponent/>
    <h2>this is the heading two</h2>
    <p> para 1</p>
    </div>
  );  

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);//rednering react element
// root.render(<HeadingComponent/>);//rendering react component
root.render(<Heading2/>);

*/

//jsx inline style takes a js object as a style so written like this or {{}}
// const stylecard=()=>{
//     backgroundColor:"grey";
// }



// -----------------------------------------body---------

// --------------------------------------applayout-------------
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)





