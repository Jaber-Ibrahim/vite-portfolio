/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const LiFooter = (props) => {
  return (
    <li className="footer-nav-link-item">
        <Link to={props.link}>{props.title}</Link>
   </li>
  )
}

export default LiFooter