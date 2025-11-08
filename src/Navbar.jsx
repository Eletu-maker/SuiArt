import { useNavigate, useLocation } from "react-router-dom";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { ConnectButton } from "@suiet/wallet-kit";
import logo from "./assets/images/suimark.png";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <span className="logo" onClick={goToHomePage}>
        <img src={logo} width={100} height={25} />{" "}
      </span>
      <div className="menu-icon" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
        </svg>
      </div>
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => {navigate("/creation"); setMenuOpen(false);}}>My NFT</li>
        <li onClick={() => {navigate("/marketPlace"); setMenuOpen(false);}}> Market Place</li>
        <li onClick={() => {navigate("/mint"); setMenuOpen(false);}}>Mint NFT</li>
      </ul>
      <ConnectButton
        style={{
          height: "30px",
          fontSize: "12px",
          padding: "0 2px",
          width: "200px",
        }}
      >
        Connect Wallet
      </ConnectButton>
    </div>
  );
}

export default Navbar;