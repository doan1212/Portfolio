import { Link } from 'react-router-dom'
const NavigationButton = ({ name, route }) => {
    return (
        <div className="navButton basicTransition">
            <Link to={route}>{name}</Link>
        </div>
    )
}

export default NavigationButton
