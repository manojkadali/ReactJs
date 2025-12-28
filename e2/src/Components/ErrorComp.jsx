import {useRouteError} from "react-router-dom";


const ErrorComp=()=>{
    const err=useRouteError();

    return(
        <div>
            {console.log(err)}
            <h1>Oops Somthing wrong..........</h1>
            <h3>
                {err.status}:{err.statusText}       
            </h3>
        </div>
    )
};

export default ErrorComp; 