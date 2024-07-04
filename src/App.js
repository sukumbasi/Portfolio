import React, { Component } from "react"
import Home from "./components/Home"
import './App.css'
import ParticlesComponent from "./components/Particles"
import TypedComponent from "./components/TypedComponent"
import Header from "./components/Header"

// import RequestCvButton from './components/cv_request';
import ProfilePicture from "./components/profile_pic"
import Nav from "./components/nav"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <ParticlesComponent id="particles"/>
        <Home/>
        <ProfilePicture />
        <TypedComponent/>
        {/* <RequestCvButton /> */}
        <Footer />
      </div>
    )
  }
}

export default App