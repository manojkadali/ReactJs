import {Component} from "react";

class UserClass extends Component{
    constructor(){
        super();// this is mandotary, and we will acress props using this keyword
    
        this.state={
            // count:0,
            // sum:0,
            UserInfo:{
            },
        };//this is the place we can create state variables
    }

    // didmount function for API call
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/manojkadali")
        const json=await data.json();
        console.log(json);
        this.setState({UserInfo:json});
    }
    componentDidUpdate(){
        // this is called after the componentDidMount
    }
    componentWillUnmount(){
        // this is called we that component is unmounted,
        // component will unmount when we go to anther page like contact us, then components are updated with contact us components 
    }

    render(){
        // this.setState({count: this.state.count+1 }); //updating the state varibales
        
        return(
        <div className="user-card">
            <h2>Name: {this.state.UserInfo.id} </h2>
            <h3>Repos:{this.state.UserInfo.public_repos} </h3>
 
        </div>
        )
    }
}

export default UserClass;