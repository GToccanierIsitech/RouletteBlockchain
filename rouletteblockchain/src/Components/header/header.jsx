import './header.scss'

function Header(props) {
    return (
        <div className='header'>
            <label>Jeu de roulette</label>
            <div className='user'>
                <div className='money'>
                    <label className='amount'>{props.money}</label>
                    <label className='devise'>LNA</label>
                </div>
                <div className='avatar'></div>

            </div>
        </div>
    )
}

export default Header