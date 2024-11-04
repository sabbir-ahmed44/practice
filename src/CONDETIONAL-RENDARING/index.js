import React, { Component } from 'react'
import './style.css'
import HomePage from './HomePage'
import LogInPage from'./LogInPage'

  
 class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false
      }
    }

  render() {
  const {isLoggedIn}= this.state


    return (

      <div>
        {isLoggedIn ? <HomePage /> : <LogInPage />}
      </div>
    )
  }
}

export default index;
