import React, { Component } from "react";
import AuthServiceContext from "./AuthServiceContext";
import  { baseUrl, KEY } from "../../utils/constants"

class AuthServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      KEY: KEY,
      baseUrl: baseUrl,
      isAuthenticate: !!localStorage.getItem(KEY)
    };
  }
  authenticate = async body => {

    const response = await fetch(`${this.state.baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(body)
    }).catch(err => {
      throw new Error(err.message)
    });

    const json = await response.json();

    if (json.message) {
      throw  new Error(json.message);
    }
    localStorage.setItem(this.state.KEY, true);
    this.setState({
      isAuthenticate: true
    });
  };
  signout = () => {
    localStorage.removeItem(this.state.KEY);
    this.setState({
      isAuthenticate: false
    });
    
  };
  render= ()=>{
    return (
      <AuthServiceContext.Provider
        value={{
          isAuthenticate: this.state.isAuthenticate,
          signout:this.signout,
          authenticate:this.authenticate
        }}
      >
        {this.props.children}
      </AuthServiceContext.Provider>
    );
  };
}

export default AuthServiceProvider;
