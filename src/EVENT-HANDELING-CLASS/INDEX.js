
import React, { Component } from 'react'


export default class EVENT_HANDLING_CLASS extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sarchValue:''
      }
    }

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    //   this.handelDecrement = this.handelDecrement.bind(this)
    // }

    handelDecrement= (e)=>{
        this.setState({
             sarchValue: e.target.value
        }
            
        )}


    // handelDecrement2(){
    //     this.setState({
    //         conut : this.state.conut + 1
    //     })
    // }





  render() {
   const {sarchValue}= this.state
    return (
      <div>
       {/* <h1> {this.state.count}</h1>   
       <button onClick={this.handelDecrement2}>+</button> */}

        <input type='Text'onChange={this.handelDecrement} value={sarchValue} ></input>
        <p>{sarchValue}</p>
      </div>
    )
  }
}
