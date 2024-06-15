import React, { Component } from "react"
import Home from "./components/Home"
import './App.css'
import ParticlesComponent from "./components/Particles"
import TypedComponent from "./components/TypedComponent"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ParticlesComponent id="particles"/>
        <Home/>
        <TypedComponent/>
      </div>
    )
  }
}

export default App