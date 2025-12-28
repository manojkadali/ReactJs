import { CON_URL } from "../utilis/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/CustomHooks/useOnlineStatus";

const Header=()=>{
    const btnName="login";
    const [stateVar,SetStateVar]=useState("Login");
    const Status=useOnlineStatus();

    return(
        <div className="header">
            <div className="logoContainer" >  <img className="logo" src={CON_URL}/></div>
            <div className="navItems">
                <ul>
                    <li>
                        Online Status: {Status?"✅":"🚫"}
                    </li>
                    
                    {/* <li><a href="/about">Holme</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart </li>
                    <li><Link to="/Groceries">Grocery</Link></li>
                    <button className="login" onClick={()=>{
                        stateVar==="Login" ?SetStateVar("logout"):SetStateVar("Login");
                    }}
                    >{stateVar}</button>
                    

                </ul>
            </div>
        </div>
        
    )
}

export default Header;