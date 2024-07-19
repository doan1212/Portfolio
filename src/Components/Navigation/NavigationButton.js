import { Link } from 'react-router-dom'
const NavigationButton = ({name, route}) => {
    return (
        <div className='font-eloquialight font-semibold'>
            <Link to={route}>{name}</Link>
        </div>
    )
}

export default NavigationButton
