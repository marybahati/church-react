import React from 'react'
import one from "../images/pic01.jpg"
import two from "../images/pic02.jpg"

class Home extends React.Component {
    render () {
        return (
<div id="header">
    <div className="inner">
        <header>
            <h1><a href="index.html" id="logo">Welcome To</a></h1>
            <hr />
            <h1>Christian Outreach Ministries world wide Mombasa</h1>
        </header>
        <footer>
            <a href="#banner" className="button circled scrolly">Start</a>
        </footer>
    </div>
    <nav id="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#leaders">Leaders</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#school">Bible school</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</div>
        )
    }
}

export default Home