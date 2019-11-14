import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from "../images/pa1.jpg"
import two from "../images/pa5.jpg"
import three from "../images/church.jpg"
import four from "../images/pa3.jpg"
import five from "../images/pa2.jpg"
import six from "../images/bsh.jpg"
import kids from "../images/wa2.jpg"
import wamama from "../images/wamama.jpg"
import wazee from "../images/wazee.jpg"
import toto from "../images/toto.jpg"
import jn from "../images/jn.jpg"
import arrow from "../images/arrow.svg"

class Church extends React.Component {
    render () {
        return (
            <div>
				<section id="banner">
					<header>
						<h2>Hi, are you looking for a  <strong>Church ?</strong></h2>
						<p>
							Christian Outreach Ministries World Wide Mombasa is the place to be.we welcome every one to our church
							to come and worship the King of Kings together with us.Our mission is to reach to the unreached with 
							the gospel of Jesus Christ. 
						</p>
					</header>
				</section>


                <Carousel>
                <div>
                    <img src={kids} />
                    <p className="legend">Our sunday school kids</p>
                </div>
                <div>
                    <img src={two} />
                    <p className="legend">Our main church service</p>
                </div>
                <div>
                    <img src={three} />
                    <p className="legend">The bible Training college</p>
                </div>
                <div>
                    <img src={four}/>
                    <p className="legend">Our Church</p>
                </div>
                <div>
                    <img src={five}/>
                    <p className="legend">Youth service</p>
                </div>
                <div>
                    <img src={six} />
                    <p className="legend">Praise and worship team</p>
                </div>
                <div>
                    <img src={wamama} />
                    <p className="legend">This are the able women God of our church</p>
                </div>
                <div>
                    <img src={wazee} />
                    <p className="legend">This are the able men of God of our church</p>
                </div>
                <div>
                    <img src={toto}/>
                    <p className="legend">Sunday school service</p>
                </div>
                <div>
                    <img src={jn}/>
                    <p className="legend">Sunday school kids having their lunch</p>
                </div>												
            </Carousel>
            </div>
        )
    }
}

export default Church