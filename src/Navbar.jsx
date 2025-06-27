import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate(); 
    const goToHomePage = () => {
        navigate("/"); 
    };

    return (
        <div className="navbar">
            <span className="logo" onClick={goToHomePage}>SuiArt</span>
            <ul>
               
                <li onClick={() => navigate("/creation")}>My NFT</li>
                <li onClick={() => navigate("/marketPlace")}> Market Place</li>
                <li onClick={() => navigate("/mint")}>Mint NFT</li>

            </ul>
            <span className="connect">Connect Wallet <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0f68d7" d="M3 20v-6l8-2l-8-2V4l19 8z"/></svg></span>
        </div>
    );
}

export default Navbar;
