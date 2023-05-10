import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'
import { faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();

    function handleClickChangePage(url) {
        navigate("/" + url);
    }

    return (
        <div className='header'>
            <label>Jeu de roulette</label>
            <div className='user'>
                <div className='money'>
                    <label className='amount'>{props.money}</label>
                    <label className='devise'>LNA</label>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon className='icon' onClick={() => handleClickChangePage("cartShipping")} icon={faCartShopping} />
                    <FontAwesomeIcon className='icon' onClick={() => handleClickChangePage("login")} icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    )
}

export default Header