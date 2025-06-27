import Footer from "./Footer"
import Navbar from "./Navbar"

function Creation(){
    return(
        <div className="Mint-background">
            <Navbar/>
            <div className="Mint">
                <h2>Your creations. Your collection. Your legacy.</h2>
                <p>This is where all your minted art lives. Every place is secured on the blockchain, proof of your creativity and ownership. Track your earnings, view art details, and manage resales all in one place.</p>
                <h2 className="myNft">My NFTs</h2>
            <hr/>
            <div></div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Creation