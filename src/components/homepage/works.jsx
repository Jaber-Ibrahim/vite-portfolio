import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";



import faceBookPhoto from "./../../assets/facebook.png" 
import twitterPhoto from "./../../assets/twitter.png" 
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={faceBookPhoto}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src={twitterPhoto}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">2012 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
