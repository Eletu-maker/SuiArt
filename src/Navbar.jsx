import { useNavigate } from "react-router-dom";
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import { ConnectButton } from '@suiet/wallet-kit';
import logo from './assets/images/suimark.png'

function Navbar() {
    const navigate = useNavigate(); 
    const goToHomePage = () => {
        navigate("/"); 
    };

    return (
        <div className="navbar">
            <span className="logo" onClick={goToHomePage}><img src={logo} width={100} height={25}/> </span>
            <ul>
               
                <li onClick={() => navigate("/creation")}>My NFT</li>
                <li onClick={() => navigate("/marketPlace")}> Market Place</li>
                <li onClick={() => navigate("/mint")}>Mint NFT</li>

            </ul>
             <ConnectButton />
        </div>
    );
}

export default Navbar;
