import React, { Component } from 'react'
import './style.css'


class STATE_IN_CLASS extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
      count:0
     }
   }

   handleDecrement =() => {
    this.setState({
        count: this.state.count + 1
    });
   }


  handleIncrement =() =>{
    this.setState({
        count: this.state.count - 1
    });
  }
   

    render() {

       const {count} = this.state
        
        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={this.handleDecrement} disabled={count===10 ? true : false}>+</button>
                <button onClick={this.handleIncrement} disabled={count===0 ? true : false}>-</button>

                

            </div>
        )
    }
}

export default STATE_IN_CLASS