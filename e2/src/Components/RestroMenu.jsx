import {useEffect,useState} from "react";
import menu from "../utilis/menudata";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestroMenu=()=>{
    const [ResInfo,SetResInfo]=useState(null);
    const params=useParams();
    console.log(params);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async()=>{
        // const data = await fetch(
        // "https://corsproxy.io/?" +
        //     encodeURIComponent(
        //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=673664&catalog_qa=undefined&query=Biryani&submitAction=ENTER"            )
        // );      
        //    const json=await data.json();    
        console.log(menu);

        SetResInfo(menu);
    };

    if(ResInfo===null) return <Shimmer/>;

    const {name,avgRating,cuisines}=ResInfo?.data?.cards[2]?.card?.card?.info;
    const menuItems=ResInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(menuItems);
    const chikenItems=menuItems[2].card.card.itemCards;
    console.log(chikenItems);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>Rating: {avgRating}</h3>
            <ul>
                {chikenItems.map((item,i)=><li key={i}>{item.card.info.name}</li>)}
                {/* <li>{chikenItems[0].card.info.name}</li> */}
            </ul>
        </div>
    )
};

export default RestroMenu;
