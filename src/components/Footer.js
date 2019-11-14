import React from 'react'
class Footer extends React.Component {
    render (){
        return (
            <div id='contact'>
				{/* <div id="footer">
				<div className="container">
					<ul className="icons">
						<li><a href="#"><span className="label">Twitter</span></a></li>
						<li><a href="#"><span className="label">Facebook</span></a></li>
					</ul>
				</div>
									<div className="copyright">
										<ul className="menu">
											<li>&copy;All rights reserved.</li><li>By: <a href="">christian outreach ministries world wide mombasa</a></li>
										</ul>
									</div>

                     
					</div> */}
<footer>
    <div className="container">
        <div className="row vcenter">
            <div className="pull-left col-lg-4 col-xs-12">
                <p>Copyright &copy;2019 by christian outreach ministries world wide mombasa</p>
            </div>
            <div className="col-lg-4 col-lg-offset-4 col-xs-12">
                <div className="pull-right">
                    <a href='https://www.facebook.com/joseph.k.ndiritu?epa=SEARCH_BOX'>Facebook</a>
                    <a href="https://twitter.com/Joseph66503">Twitter</a>
                    <a href="https://www.linkedin.com/in/rev-joseph-kamau-ndiritu-7b81a3b6/">LinkedIn</a>
                </div>
            </div>
        </div>
    </div>
</footer>
				</div>

        )
    }

}
export default Footer