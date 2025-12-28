import { CON_URL } from "../utilis/constants";
import {useState} from "react";
const Header=()=>{
    const btnName="login";
    const [stateVar,SetStateVar]=useState("Login");
    return(
        <div className="header">
            <div className="logoContainer" >  <img className="logo" src={CON_URL}/></div>
            <div className="navItems">
                <ul>
                    <li>Holme</li>
                    <li>About us</li>
                    
                    <li>Contact US</li>
                    <li>Cart </li>
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