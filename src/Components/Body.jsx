import RestroCard,{PromoRestroCard} from "./RestroCard";
import { resObj } from "../utilis/mockdata";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utilis/CustomHooks/useOnlineStatus";

const Body=()=>{
    const [listOfRestaurents,SetListOfRestaurents]=useState([]);
    const [searchText,SetSearchTest]=useState("");
    const [filteredRes,SetFilteredRes]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9749803&lng=77.58348749999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");//fetch will return a promise
        //fetch gives promise, here it is succcess to it given the raw response object not a ready to use json object . data contains some metadata 
        const json=await data.json();
        
        const jsonRes = json.data.cards.filter(
            (item) =>
                item.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"//in json restaurents starts form here
        );
        //jsonRes contains the list of restaurents from the fetched json API filtering all the headers
        console.log("Extracted Restaurants:", jsonRes);
        SetListOfRestaurents(jsonRes);
        SetFilteredRes(jsonRes);
    };

    //conditional rendering
    // if(listOfRestaurents.length===0) return <h1>Laoding.............</h1>
    // showing loading is a very old practice
    // if(listOfRestaurents.length===0) return <Shimmer/>
    
    //CHECKING ONLINE STATUS
    const Status=useOnlineStatus();
    if(Status===false) return <h1>Looks like You re offline!!!</h1>;

    const PromoRestro=PromoRestroCard(RestroCard);

    return (listOfRestaurents.length===0) ? (<Shimmer/>):( 
    <div className="Body">
       
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{SetSearchTest(e.target.value);}}/>
        <button onClick={()=>{
            //srarch box logic
                console.log(searchText);
                const filterSearch=listOfRestaurents.filter((res)=>{return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase());
                    
                })
                console.log(searchText,filterSearch);
               SetFilteredRes(filterSearch); 
            }}>Search</button>
           
        <div className="filter" >
           
            <button className="filter-btn"
                onClick={()=>{
                    // here presents the filtering logic
                    const filteredList=listOfRestaurents.filter((i)=>{return i.card.card.info.avgRating>4.6;});
                SetListOfRestaurents(filteredList);
                }}
            >
                
                {/* filtering button for top rated restaurents */}
                Top rated 

                </button>
        </div>
        
        <div className="restro-container">
            {/* <RestroCard resName="Manoj Foods" cusine="biryani,North"/>
            <RestroCard resName="KFC" cusine="grilled,fired chiken"/> */}
           
           {/* <RestroCard resData={resOb j[0]}/> 
            <RestroCard resData={resObj[1]}/>  
           <RestroCard resData={resObj[2]}/>  
            */}
            {/* we can loop through the elements presen in the resObj , using map or for loop  */}
            
            {filteredRes.map((restaurent)=> (restaurent.card.card.info.promoted ? 
                                    <PromoRestro key={restaurent.card.card.info.id} resData={restaurent?.card?.card?.info}/> : <RestroCard key={restaurent.card.card.info.id} resData={restaurent?.card?.card?.info}/>)
                    )} {/*optional chaining */}
                    {/* key={restaurent.card.card.info.id} */}

        </div>
    </div>
    )
}



export default Body;
