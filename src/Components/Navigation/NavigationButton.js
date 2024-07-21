import { Link } from 'react-router-dom'
const NavigationButton = ({ name, route }) => {
    return (
        <li className="navButton basicTransition">
            <Link to={route}>{name}</Link>
        </li>
    )
}

export default NavigationButton
