import { useNFTs } from './NFTContext';

function Popup({ art, onClose }) {
    // If no art data is provided, use default values
    const artwork = art || {
        id: "1",
        name: "Sui - Goat #111",
        img: "https://avatars.githubusercontent.com/u/33053805",
        price: "5.45",
        description: "Description about the NFT",
        createdAt: "2025-11-07T06:05:54.809Z"
    };

    const { addPurchasedNFT } = useNFTs();

    // Function to handle buying an NFT
    const handleBuyNFT = () => {
        // Create purchased NFT object
        const purchasedNFT = {
            name: artwork.name,
            description: artwork.description,
            price: artwork.price,
            image: artwork.img,
            createdAt: new Date().toISOString()
        };

        // Add NFT to context
        addPurchasedNFT(purchasedNFT);
        
        // Close the popup
        onClose();
        
        // Optional: Show confirmation message
        alert(`Successfully purchased ${artwork.name}! It has been added to your collection.`);
    };

    return (
        <div className="PopUp-background">
            <div className="cancel" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                </svg>
            </div>
           
            <div className="PopUp">
                <div>
                    <img src={artwork.img} alt={artwork.name} width={300} height={300} />
                    <p>Owned by</p>
                </div>
                <div>
                    <h2>{artwork.name}</h2>
                    <div className="PopBoder">
                        <h4>Buy for</h4>
                        <h2>
                            <svg width="25" height="25" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                
                            </svg> 
                            {artwork.price}
                        </h2>
                        <button onClick={handleBuyNFT}>Buy me</button>
                    </div>
                    <div className="PopBoder">
                        <h4>About NFT</h4>
                        <p>{artwork.description || "No description available"}</p>
                        <h4>Special Traits:</h4>
                        <p>ID: {artwork.id}</p>
                        <p>Created: {new Date(artwork.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <hr />
            <p>User</p>
        </div>
    );
}

export default Popup;