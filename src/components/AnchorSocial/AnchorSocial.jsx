/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AnchorSocial = (props) => {
  return (
    <div className={props.class}>
				<a href={props.link} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={props.icon}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{props.title}</div>
				</a>
			</div>
  )
}

export default AnchorSocial