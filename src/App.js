import React, { Component } from 'react'
import './App.css'
import 'reset-css'


export default class App extends Component {
  constructor(){
    super()
    this.state= {
      menu:false
    }
  }
  
  menuSlider = () => {
    this.setState({
      menu: !this.state.menu
    })
  }


  render() {
    return (
      <div>
        <div className='app-container'>
          <nav className='nav'>
            <h1 className='app-name'>Start Bootstrap</h1>
            <div className='menu-btn'>
              <h1 className='drop-down' onClick={this.menuSlider}>MENU &#9776;</h1>
            </div>
            <div className='navbar-menu'>
                <a>SERVICES</a>
                <a>PORTFOLIO</a>
                <a>ABOUT</a>
                <a>TEAM</a>
                <a>CONTACT</a>  
            </div>
          </nav>
          <div className={
            this.state.menu ?
            'menu slide'
            :
            'menu'
          }>
            <a>SERVICES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
          </div>
          <div className='main-section'>
            <h3 className='welcome'>Welcome To Our Studio!</h3>
            <h1 className='meet-you'>IT'S NICE TO MEET YOU</h1>
            <button className='more'>TELL ME MORE</button>
          </div>
        </div>
        <div className='services'>
          <h1>SERVICES</h1>
        </div>
      </div>
    )
  }
}
