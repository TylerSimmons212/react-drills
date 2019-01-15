import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
    }
    handleChange1(value){
        this.setState({userName:value})
    }
    handleChange2(value){
        this.setState({password:value})
    }
    submit(){
        alert("UserName: " + this.state.userName + " Password: " + this.state.password)
    }
    render(){
        return(
            <div>
            <input onChange = {(e) => this.handleChange1(e.target.value)}></input>
            <input onChange = {(e) => this.handleChange2(e.target.value)}></input>
            <button onClick = {() => {this.submit(this.state.userImput)}}>Login</button>
            </div>
        )
    }
}

export default Login
