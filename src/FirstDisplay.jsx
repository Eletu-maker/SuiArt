import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";

function FirstDisplay(){
    const navigate = useNavigate(); 
     
    return(
    <div className="firstDisplay">
        <Navbar></Navbar>
        
        <section>
            <h1>Own Your Story.</h1>
            <h1>Empower Yourself as a Creator</h1>
            <p>Restoring value, voice, and ownership to real artisans</p>
            <div><button className="NFT-button" onClick={() => navigate("/mint")}>Mint Your NFTs</button>
             <button className="explore-button" onClick={() => navigate("/creation")}>My NFT</button>
             </div>
             <h2>How it works</h2>
             <h4>Turn Passion into Ownership. And Ownership into Earning in three simple steps</h4>
        </section>
        
    
    </div>
    )
}

export default FirstDisplay