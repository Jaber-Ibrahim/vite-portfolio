import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";
import LiFooter from "../LiFooter/LiFooter";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<LiFooter title="Home" link = {"/"}/>
						<LiFooter title="About" link = {"/about"}/>
						<LiFooter title="Projects" link = {"/projects"}/>
						<LiFooter title="Articles" link = {"/articles"}/>
						<LiFooter title="Contact" link = {"/contact"}/>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Jaber Ibrahim. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
