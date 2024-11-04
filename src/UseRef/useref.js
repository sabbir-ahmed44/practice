import React, { Component, createRef } from 'react'

export default class Useref extends Component {
    constructor(props) {
      super(props)
    this.userNameRef=createRef();
      this.state = {};
    }
    handelChange =(event)=>{
        event.preventDefault();
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.color="red";
    }
  render() {
    return (
      <div>
     <form onSubmit={this.handelChange}>
       <div>
       <label>Name:</label>
       <input type='text' id='name' ref={this.userNameRef}></input>
       </div>
       <div>
       <label>Email:</label>
       <input type='text' id='email'></input>


       </div>
       <button type="submit">Register</button>

     </form>
      </div>
    )
  }
}
