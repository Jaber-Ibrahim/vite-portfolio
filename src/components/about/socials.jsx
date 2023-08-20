
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";
import AnchorSocial from './../AnchorSocial/AnchorSocial';

const Socials = () => {
	return (
		<div className="socials">
			<AnchorSocial class = {"social"} href = {INFO.socials.twitter} icon = {faTwitter} title = {"Follow on Twitter"}/>
			<AnchorSocial class = {"social"} href = {INFO.socials.github} icon = {faGithub} title = {"Follow on GitHub"}/>
			<AnchorSocial class = {"social"} href = {INFO.socials.linkedin} icon = {faLinkedin} title = {"Follow on LinkedIn"}/>
			<AnchorSocial class = {"social"} href = {INFO.socials.instagram} icon = {faInstagram} title = {"Follow on Instagram"}/>
			<AnchorSocial class = {"email-wrapper"} href={`mailto:${INFO.main.email}`} icon = {faEnvelope} title = {INFO.main.email}/>
		</div>
	);
};

export default Socials;
