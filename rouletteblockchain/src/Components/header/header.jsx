import './header.scss'

function Header() {
    return (
        <div className='header'>
            <label>Jeu de roulette</label>
            <div className='user'>
                <div className='avatar'></div>
                <div className='money'>
                    <label className='amount'>3400</label>
                    <label className='devise'>LNA</label>
                </div>

            </div>
        </div>
    )
}

export default Header