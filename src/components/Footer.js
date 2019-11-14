import React from 'react'
import one from "../images/church.jpg"
import dad from "../images/dad.jpg"
import jane from "../images/jk.jpg"
import mama from "../images/mama3.jpg"
import food from "../images/food.jpg"
class Footer extends React.Component {
    render (){
        return (
            <div id='contact'>
				<div id="footer">
					<div className="container">
						<div className="row">				

								<section className="col-4 col-12-mobile">
									<header>
										<h2><span className="label">Contact</span></h2>
                                        <footer>
                                            <a href="" className="button">Twitter</a>
                                        </footer>
                                        <footer>
                                            <a href="" className="button">Twitter</a>
                                        </footer>
                                        <footer>
                                            <a href="" className="button">Twitter</a>
                                        </footer>
									</header>

									<div className="row gtr-25">
										<div className="col-6">
											<a href="#" className="image fit"><img src={dad} alt="" /></a>
										</div>
										<div className="col-6">
											<a href="#" className="image fit"><img src={jane} alt="" /></a>
										</div>
										<div className="col-6">
											<a href="#" className="image fit"><img src={mama} alt="" /></a>
										</div>
										<div className="col-6">
											<a href="#" className="image fit"><img src={one} alt="" /></a>
										</div>
										<div className="col-6">
											<a href="#" className="image fit"><img src={food} alt="" /></a>
										</div>
										<div className="col-6">
											<a href="#" className="image fit"><img src={dad} alt="" /></a>
										</div>
									</div>
								</section>

						</div>
						<hr />

                       
                        
									<div className="copyright">
										<ul className="menu">
											<li>&copy; c.o.m.w.w. All rights reserved.</li><li>By: <a href="">christian outreach ministries world wide mombasa</a></li>
										</ul>
                                        <footer>
                                            <a href="" className="button">Twitter</a>
                                        </footer>
									</div>

                     
					</div>
				</div>
            </div>
        )
    }

}
export default Footer