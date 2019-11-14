import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Church from './components/Church'
import Services from './components/Services'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Navbar/>
        <Church/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}

export default App