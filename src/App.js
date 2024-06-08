import React, { Component } from "react"
// import Home from "./components/Home"
import './App.css'
import ParticlesComponent from "./components/Particles"
import TypedComponent from "./components/TypedComponent"
import Header from "./components/Header"
// import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ParticlesComponent id="particles"/>
        {/* <Nav/> */}
        {/* <Home/> */}
        <TypedComponent/>
      </div>
    )
  }
}

export default App