import { CON_URL } from "../utilis/constants";

const RestroCard=(props)=>{
    const {resData}=props;//object is passed
    const {name,cuisines,avgRating,cloudinaryImageId}=resData;// destructering the data 

    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg"  style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            {/*  <h3>{resData.resName}</h3> */}
            <h4>{cuisines[0]}</h4>
            <h4>{avgRating}+ stars</h4>
            <h4>38 minuts</h4>
            

        </div>
    )
}

export const PromoRestroCard=(RestroCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 ">Promoted</label>
            <RestroCard {...props}/>
            </div> 
        );
    };
};

export default RestroCard;