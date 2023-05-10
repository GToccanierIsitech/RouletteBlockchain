import { useEffect, useState } from 'react';
import Metamask_icon from '../../Assets/Icon/MetaMask_Fox.png'
import './login.scss'
import Web3 from 'web3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import useAdvancedState from '../../utils/CustomHooks/useAdvencedState';

import TokenABI from "../../utils/TokenABI.json";

const tokenAddress = "0x12aa00da1B8c2f1Aed531BDb8aBA4464953707A8"; // Adresse du contrat du token ERC-20
const tokenAbi = TokenABI; // Interface de contrat du token ERC-20



function Login() {
    const [loading, setLoading] = useState(false);
    const [currentAccountName, setCurrentAccountName] = useState("");
    const [currentAccount, setCurrentAccount] = useState(null);

    const [info, setInfo] = useAdvancedState({
        balance: ''
    })

    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = new Web3(window.ethereum);
        const accounts = await window.web3.eth.getAccounts();
        const address = accounts[0];
        const tokenContract = new window.web3.eth.Contract(tokenAbi, tokenAddress);
        const tokenBalance = await tokenContract.methods.balanceOf(address).call();
        const balanceInWei = await window.web3.eth.getBalance(address);
        setCurrentAccount(address);

        console.log(window.web3)
        setCurrentAccountName(accounts)
        setInfo({
            address: address,
            eth: window.web3.utils.fromWei(balanceInWei, 'ether'),
            balance: window.web3.utils.fromWei(tokenBalance, 'ether')
        })
        setCurrentAccount(window.web3)
        setLoading(true)
    }

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            // Metamask est installé
            const web3 = new Web3(window.ethereum);
            try {
                // Demande à l'utilisateur l'autorisation de se connecter à Metamask
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                window.web3 = new Web3(window.ethereum);
                console.log(window.web3)
                setCurrentAccount(window.web3);
            } catch (error) {
                // L'utilisateur a refusé l'autorisation
                console.error("L'utilisateur a refusé l'autorisation de se connecter à Metamask");
            }
        } else {
            // Metamask n'est pas installé
            console.error("Metamask n'est pas installé");
        }




        if (window.ethereum) {

        }
        return false;
    };

    function GoToGame() {
        navigate("/home");
    }

    return (
        !loading ? (
            <div className='loading'>
                <img alt='MetaMask_Fox' src={Metamask_icon} />
            </div>
        ) : (
            <div className='login'>
                <div className='card'>
                    {currentAccount ? (
                        <>
                            <div className='title1'>
                                <label className='title'>Bienvenue</label>
                                <label className='subtitle'>Connecté a l'address : {currentAccountName}</label>
                            </div>

                            <div className='value'>
                                <span>{info.address}</span>
                                <span>{info.eth} ETH</span>
                                <span>{info.balance} LNA</span>
                            </div>

                            <button onClick={GoToGame}>
                                <label>Aller au jeu</label>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </>
                    ) : (
                        <>
                            <label className='title'>Se connecter</label>
                            <button onClick={connectMetamask}>
                                <label>Se connecter avec Metamask</label>
                                <img alt='MetaMask_Fox' src={Metamask_icon} />
                            </button>
                        </>
                    )}

                </div >
            </div >
        )
    )
}

export default Login