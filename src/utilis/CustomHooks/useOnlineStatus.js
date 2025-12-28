import { useState,useEffect } from "react"
const useOnlineStatus=()=>{
    const[OnlineStatus,setOnlineStatus]=useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[])//this will excuted once when eventlistner changed 


    return OnlineStatus;
}

export default useOnlineStatus;