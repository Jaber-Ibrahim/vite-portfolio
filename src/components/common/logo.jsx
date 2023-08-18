/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

// import INFO from "../../data/user";
// import INFO from "./../../data/user";
import logo from "./../../assets/logo.png"

import "./styles/logo.css";

const Logo = (props) => {
	// let { width, link } = props;

	if (props.link === undefined) {
		props.link = true;
	}

	const imageElement = (
		<img src={logo} alt="logo" className="logo" width={props.width} />
	);

	return (
		<React.Fragment>
			{props.link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
