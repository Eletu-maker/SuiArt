import Footer from "./Footer"
import Navbar from "./Navbar"
import { useNFTs } from './NFTContext';

function Creation(){
    const { getAllNFTs } = useNFTs();
    const allNFTs = getAllNFTs();

    return(
        <div className="Mint-background">
            <Navbar/>
            <div className="Mint">
                <h2>Your creations. Your collection. Your legacy.</h2>
                <p>This is where all your minted art lives. Every place is secured on the blockchain, proof of your creativity and ownership. Track your earnings, view art details, and manage resales all in one place.</p>
                <h2 className="myNft">My NFTs</h2>
            
                <div className="Art-display">
                    {allNFTs.length > 0 ? (
                        allNFTs.map((nft) => (
                            <div className="Art-container" key={nft.id}>
                                <img src={nft.image} alt={nft.name} />
                                <p className="Art-name">{nft.name}
                                    <span className="Sui-price">{nft.price}</span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No NFTs in your collection yet. <a href="/marketplace" style={{color: '#4da2ff'}}>Buy or mint your first NFT</a></p>
                    )}
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Creation