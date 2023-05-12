import './CartShipping.scss'
import useAdvancedState from '../../utils/CustomHooks/useAdvencedState'
import Metamask_icon from '../../Assets/Icon/MetaMask_Fox.png'
import { CircularProgress, Slider } from '@material-ui/core'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ContratABI from "../../utils/ContratABI.json";

const contractAddress = '0xfde77f0De25D6254657b01672e348CDFB7b3d83D';
const contractAbi = ContratABI;
function CartShipping() {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(false);

    const [info, setInfo] = useAdvancedState({
        balance: ''
    })

    const navigate = useNavigate()

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
        const contract = new window.web3.eth.Contract(contractAbi, contractAddress);
        setInfo({
            address: address,
            eth: balanceInEth,
            contract: contract
        })
        setLoading(true)
    }

    function valuetext(value) {
        setValue(value)
        return `${value} LNA`;
    }

    function getMax(value) {
        console.log(value)
        let maxLNA = (parseFloat(value) / 0.2) * 100000
        let maxLNAarround = Math.floor(maxLNA / 500) * 500
        if (maxLNAarround > 10000) {
            return 10000
        }
        else {
            return Math.floor(maxLNA / 500) * 500;
        }
    }

    function GoToGame() {
        navigate("/home");
    }

    function BuyToken() {
        // Envoyer une transaction au contrat avec un montant spécifique
        const amountToSend = window.web3.utils.toWei("1", 'finney');
        const transactionParameters = {
            from: info.address,
            to: contractAddress,
            value: amountToSend,
        };

        info.contract.methods.buyTokens().send(transactionParameters)
            .on('transactionHash', (hash) => {
                // La transaction a été envoyée avec succès
                console.log('1')
                console.log(hash)
            })
            .on('confirmation', (confirmationNumber, receipt) => {
                // La transaction a été confirmée
                console.log('2')
                console.log(confirmationNumber)
                console.log(receipt)
            })
            .on('error', (error) => {
                // Une erreur s'est produite lors de l'envoi de la transaction
                console.log('3')
                console.log(error)
            });
    }

    return (
        !loading ? (
            <div className='loading'>
                <img alt='MetaMask_Fox' src={Metamask_icon} />
            </div>
        ) : (
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
                        <span>Achat : {value} LNA</span>
                        <span>Prix : {value / 100000} ETH</span>
                    </div>
                    <div className='buttons'>
                        <button onClick={GoToGame} style={{ backgroundColor: "#FF2D2D" }} >
                            <span >Annuler</span>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <button onClick={BuyToken} style={{ backgroundColor: "orange" }}>
                            <span>Acheter</span>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default CartShipping