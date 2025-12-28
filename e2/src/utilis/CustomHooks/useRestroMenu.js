import {useState} from "react";

const useRestroMenu=(resId)=>{
    const [resInf0, setResInfo]=useState(null);
    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata= async()=>{
        // const data=await fetch("API__URL");
        const data={name:"manoj"};
        const json=await data.json();
        setResInfo(json);
    };

    return resInfo;
}

export default useRestroMenu;