import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
	super(props);
	this.profile = require("./profile.json");
	console.log(this.profile)
  }
  render() {
    return (
	<div>
			<header id="header">
				<div className="inner">
					<a href="#" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					<h1><strong>I am Strata</strong>, a super simple<br />
					responsive site template freebie<br />
					crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
				</div>
			</header>
			<div id="main">
					<section id="one">
						<header className="major">
							<h2>About me</h2>
						</header>
						<p>Yo</p>
					</section>
					<section id="two">
						<header className="major">
							<h2>Experiences and projects</h2>
						</header>
						<p>Yo</p>
					</section>
					<section id="three">
						<header className="major">
							<h2>Education</h2>
						</header>
						<p>Yo</p>
					</section>
					<section id="three">
						<h2>Get In Touch</h2>
						<p>Jsui al contactez moi quand vous voulez</p>
						<div className="row">
							<div className="8u 12u$(small)">
								<form method="post" action="#">
									<div className="row uniform 50%">
										<div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
										<div className="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
										<div className="12u$"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
									</div>
								</form>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</div>
							<div className="4u$ 12u$(small)">
								<ul className="labeled-icons">
									<li>
										<h3 className="icon fa-home"><span className="label">Address</span></h3>
										1234 Somewhere Rd.<br />
										Nashville, TN 00000<br />
										United States
									</li>
									<li>
										<h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
										000-000-0000
									</li>
									<li>
										<h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
										<a href="#">hello@untitled.tld</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
			</div>
			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						{this.profile.links.map((elem)=>{
							return <li key={elem.class}><a href={elem.link} className={"icon "+elem.class}><span className="label">Email</span></a></li>
							})
						}
					</ul>
					<ul className="copyright">
						<li>&copy; Untitled</li><li>Made with React. Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
	</div>
    );
  }
}



export default App;
