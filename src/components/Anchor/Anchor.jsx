import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Anchor = (props) => {
  return (
    <a
        // eslint-disable-next-line react/prop-types
        href={props.href}
        target="_blank"
        rel="noreferrer"
    >
    <FontAwesomeIcon
    // eslint-disable-next-line react/prop-types
    icon={props.icon}
    className="homepage-social-icon"
    />
    </a>
  )
}

export default Anchor