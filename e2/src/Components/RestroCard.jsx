import { CON_URL } from "../utilis/constants";

const RestroCard=(props)=>{
    const {resData}=props;//object is passed
    const {name,cuisines,avgRating,cloudinaryImageId}=resData;// destructering the data 

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            {/*  <h3>{resData.resName}</h3> */}
            <h4>{cuisines}</h4>
            <h4>{avgRating}+ stars</h4>
            <h4>38 minuts</h4>
            

        </div>
    )
}

export default RestroCard;