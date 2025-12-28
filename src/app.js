import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import { About } from "./Components/About";
import Contact from "./Components/Contact";
import ErrorComp from "./Components/ErrorComp";
import RestroMenu from "./Components/RestroMenu";
// import Groceries from "./Components/Groceries";
import {Provider} from "react-redux";

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
// Lazy loading -- importing using lazy function
const Groceries =lazy(()=>import("./Components/Groceries"));

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

// -------------------------------Routing------------------
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>, 
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/meghana",
                element:<RestroMenu/>
            },
            {
                path:"/Groceries",
                element:<Suspense fallback={<h1>Loading....</h1>}><Groceries/></Suspense>,
            }
        ],
        errorElement:<ErrorComp/>,
    },
   
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)





  