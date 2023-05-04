import './CartShipping.scss'
import useAdvancedState from '../../utils/CustomHooks/useAdvencedState'
import { CircularProgress, Slider } from '@material-ui/core'
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function CartShipping() {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(false);

    const [info, setInfo] = useAdvancedState({
        balance: ''
    })

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = new Web3(window.ethereum);

        const accounts = await window.web3.eth.getAccounts();
        const address = accounts[0];
        const balanceInWei = await window.web3.eth.getBalance(address);
        const balanceInEth = window.web3.utils.fromWei(balanceInWei, 'ether');
        setInfo({
            eth: balanceInEth
        })
        setLoading(true)
    }

    function valuetext(value) {
        setValue(value)
        return `${value} LNA`;
    }

    function getMax(value) {
        console.log(value)
        let maxLNA = (parseFloat(value) / 0.2) * 1000
        let maxLNAarround = Math.floor(maxLNA / 500) * 500
        if (maxLNAarround > 10000) {
            return 10000
        }
        else {
            return Math.floor(maxLNA / 500) * 500;
        }
    }

    return (
        loading ? (
            <div className='cartShipping'>
                <div className='card'>
                    <label className='title'>Acheter Jeton</label>
                    <Slider
                        aria-label="Money"
                        defaultValue={1000}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={500}
                        marks
                        min={0}
                        max={getMax(info.eth)}
                    />
                    <div className='info'>

                        {value}
                    </div>
                    <button>
                        <label>Acheter</label>
                    </button>
                </div>
            </div>
        ) : (<CircularProgress />)
    )
}

export default CartShipping