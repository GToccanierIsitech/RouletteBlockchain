import Metamask_icon from '../../Assets/Icon/MetaMask_Fox.png'
import './login.scss'
import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';

function Login() {
    const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL);
    const web3 = new Web3(provider);

    return (
        <div className='login'>
            <div className='card'>
                <label className='title'>Se connecter</label>
                <button>
                    <label>Se connecter avec Metamask</label>
                    <img alt='MetaMask_Fox' src={Metamask_icon} />
                </button>
            </div>
        </div>
    )
}

export default Login