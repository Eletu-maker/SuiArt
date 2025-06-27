import Navbar from "./Navbar";
import Footer from "./Footer";
import icon1 from "./assets/images/write.png"
import React, {useState} from "react";
function Mint() {
    const [NFTname, setNFTname] = useState();

    function getNFTname(event) {
        setNFTname(event.target.value);    
    }

    const [NFTdescription, setNFTdescription] = useState();

    function getNFTdescription(event){
        setNFTdescription(event.target.value)
    }

    const [NFTprice, setNFTprice] = useState();

    function getNFTprice(event){
        setNFTprice(event.target.value)
    }


    return (
        <div className="Mint-background">
            <Navbar />

            <div className="Mint">
                <h2>Digitalize your artwork</h2>
                <p>
                    Turn your original artwork into a digital asset secured on the blockchain.
                    Minting gives you full ownership, verifiable proof, and royalty earnings every
                    time it's sold, even in the future.
                </p>

                <div className="Mint-upload">
                    <div className="NFT-image"> <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 9a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M10 7.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/><path fill="currentColor" d="M13.623 3.5h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.957c-.26.51-.377 1.077-.434 1.775C3.5 8.42 3.5 9.276 3.5 10.377v3.246c0 .946 0 1.712.036 2.345q.004.097.012.2l.003.031c.035.466.095.874.204 1.246q.091.314.235.598a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434c.687.056 1.544.056 2.645.056h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.496-.975.493-2.153.49-3.241l-.001-.342l.001-.837v-3.246c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434c-.687-.056-1.544-.056-2.645-.056m-9.07 12.686l-.006-.07c-.041-.628.603-1.25 1.079-1.709q.115-.11.212-.207c.252-.254.423-.369.576-.424a1.5 1.5 0 0 1 1.03 0c.152.055.323.17.575.424c.255.257.556.617.984 1.13a1.33 1.33 0 0 0 1.98.073l3.003-3.111c.087-.09.178-.192.272-.297c.345-.386.738-.826 1.197-.979a1.5 1.5 0 0 1 .947 0c.773.258 1.499 1.129 2.13 1.886c.234.28.454.545.66.757c.251.261.308.411.307.763c-.003.87-.02 1.507-.075 2.005c-.057.505-.153.862-.305 1.162a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328c-.642.053-1.459.053-2.587.053h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.592-1.663c-.138-.321-.22-.713-.266-1.27M19.5 12.54l-.925-.958a18 18 0 0 0-.976-.968c-.283-.248-.558-.439-.881-.546a2.5 2.5 0 0 0-1.579 0c-.323.107-.598.298-.88.546c-.275.24-.588.565-.977.968l-3.019 3.126a.33.33 0 0 1-.492-.018l-.015-.018c-.41-.491-.738-.885-1.027-1.177c-.296-.298-.59-.53-.942-.659a2.5 2.5 0 0 0-1.717 0c-.352.13-.645.36-.942.66a12 12 0 0 0-.628.7V10.4c0-1.128 0-1.945.053-2.586c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53c.346-.176.766-.276 1.403-.328C8.455 4.5 9.272 4.5 10.4 4.5h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.053.641.053 1.458.053 2.586z"/></svg>
                    <br/>
                    <p>upload your photo</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your NFT name" value={NFTname} onChange={getNFTname} /><br/>
                        <input type="text" placeholder="NFT Description" value={NFTdescription} onChange={getNFTdescription}/>
                        <p style={{  marginTop: "0", marginBottom: "10px" }}>More detail:</p>
                        <input type="number" placeholder="Price" value={NFTprice} onChange={getNFTprice} /><br/>
                        <button>Mint NFT</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Mint;
