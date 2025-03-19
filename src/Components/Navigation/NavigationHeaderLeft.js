
import { useNavigate } from 'react-router-dom';

const NavigationHeaderLeft = () => {
    const navigate = useNavigate();
    return (
        <button 
            className="items-start justify-start font-amsterdam text-[1.5em] text-emperor-700 hover:text-emperor-900 focus:outline-none"
            onClick={() => navigate("/")}
        >
            Doan
        </button>
    )
}

export default NavigationHeaderLeft
