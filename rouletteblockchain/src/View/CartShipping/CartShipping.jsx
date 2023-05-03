import SimpleInput from '../../Components/input/SimpleInput'
import './CartShipping.scss'
import useAdvancedState from '../../utils/CustomHooks/useAdvencedState'

function CartShipping() {

    const [value, setValue] = useAdvancedState({
        cardNumber: '',
        cardName: '',
        expirationDate: '',
        cryptogram: '',
    })

    // Se déclanche lorsque l'on change le contenu d'une textbox
    function handleChangeTextbox(name, value) {
        setValue({
            [name]: value
        })
    }

    return (
        <div className='cartShipping'>
            <div className='card'>
                <label className='title'>Acheter Jeton</label>
                <SimpleInput
                    label="Nombre de jeton"
                    placeholder="1000"
                    type="text"
                    onChange={handleChangeTextbox}
                />
                {/* Card */}
                <div className="cardInfo">
                    <SimpleInput
                        label="Numéro de la carte"
                        placeholder="**** **** **** ****"
                        type="text"
                        onChange={handleChangeTextbox}
                    />
                    <SimpleInput
                        label="Titulaire de la carte"
                        placeholder="J. Smith"
                        type="text"
                        onChange={handleChangeTextbox}
                    />
                    <div className="cardInfo2">
                        <SimpleInput
                            label="Date d'expiration"
                            placeholder="MM / YY"
                            type="text"
                            onChange={handleChangeTextbox}
                        />
                        <SimpleInput
                            label="Cryptogramme"
                            placeholder="CVC"
                            type="text"
                            onChange={handleChangeTextbox}
                        />
                    </div>
                    <button>
                        <label>Acheter</label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartShipping