import React , { Component } from 'react';


class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            login:props.login,
            password:props.password
        }
        this.getUserName = this.getUserName.bind(this);
        this.getUserPass = this.getUserPass.bind(this);
        
    }
    getUserName(e){

    }
    getUserPass(e){

    }
    render(){
        return(
            <div>
                <div>5min admin panel</div>
                <form>
                    <input type="text"/>
                    <label>login</label>
                    <input type="password"/>
                    <label>password</label>
                </form>
            </div>
        )
    }
}

export default Auth;