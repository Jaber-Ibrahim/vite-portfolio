import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import { useState } from "react";

const NavBar = (props) => {
	const { active } = props;
	const [open,setOpen] = useState (false);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						
						<ul className={open ? "nav-list active" : "nav-list" }>
							<li className="nav-item"  onClick={() => {setOpen(false)}}>
							<i className="fa-solid fa-close MY-close"></i>
							</li>
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							
						</ul>


						<div className="open-list"  onClick={() => {setOpen(true)}}>
						<i className="fa-solid fa-bars MY-Bars"></i>
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
