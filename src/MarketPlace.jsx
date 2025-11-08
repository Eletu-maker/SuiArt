import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from "./Popup";
import { useState, useEffect } from "react";

function MarketPlace() {
    const [collection, setCollection] = useState([]);
    const [displayedCollection, setDisplayedCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedArt, setSelectedArt] = useState(null);

    // Fetch data from the mock API
    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://690dbf51bd0fefc30a02251a.mockapi.io/artwork');
                if (!response.ok) {
                    throw new Error('Failed to fetch artworks');
                }
                const data = await response.json();
                // Transform the API data to match the expected structure
                const transformedData = data.map(item => ({
                    id: item.id,
                    name: item.artName,
                    img: item.avatar,
                    price: parseFloat(item.price).toFixed(2),
                    description: item.description,
                    createdAt: item.createdAt
                }));
                setCollection(transformedData);
                // Initially display only 10 items
                setDisplayedCollection(transformedData.slice(0, 10));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    // Show loading state
    if (loading) {
        return (
            <div className="Mint-background">
                <Navbar />
                <div className="Mint">
                    <div className="search-box" style={{ position: 'relative' }}>
                        <input 
                            type="text" 
                            placeholder="Search items..." 
                            style={{ paddingLeft: '30px', height: '30px' }} 
                        />
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="18" 
                            fill="gray" 
                            viewBox="0 0 24 24"
                            style={{ 
                                position: 'absolute', 
                                left: '8px', 
                                top: '35%', 
                                transform: 'translateY(-50%)' 
                            }}
                        >
                            <path d="M19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            style={{
                                position: 'absolute',
                                right: '8px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        >
                            <path
                                fill="#0f68d7"
                                d="M3 20v-6l8-2l-8-2V4l19 8z"
                            />
                        </svg>
                    </div>

                    <ul className="category">
                        <li>All Collection</li>
                        <li>Art NFT</li>
                        <li>Sculpture</li>
                        <li>Photograph</li>
                        <li>Anime</li>
                        <li>Others</li>
                    </ul>

                    <hr />

                    <div>
                        <p>Loading artworks...</p>
                    </div>

                    <button>Load More Items</button>
                </div>
                <Footer />
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="Mint-background">
                <Navbar />
                <div className="Mint">
                    <div className="search-box" style={{ position: 'relative' }}>
                        <input 
                            type="text" 
                            placeholder="Search items..." 
                            style={{ paddingLeft: '30px', height: '30px' }} 
                        />
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="18" 
                            fill="gray" 
                            viewBox="0 0 24 24"
                            style={{ 
                                position: 'absolute', 
                                left: '8px', 
                                top: '35%', 
                                transform: 'translateY(-50%)' 
                            }}
                        >
                            <path d="M19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            style={{
                                position: 'absolute',
                                right: '8px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        >
                            <path
                                fill="#0f68d7"
                                d="M3 20v-6l8-2l-8-2V4l19 8z"
                            />
                        </svg>
                    </div>

                    <ul className="category">
                        <li>All Collection</li>
                        <li>Art NFT</li>
                        <li>Sculpture</li>
                        <li>Photograph</li>
                        <li>Anime</li>
                        <li>Others</li>
                    </ul>

                    <hr />

                    <div>
                        <p>Error loading artworks: {error}</p>
                    </div>

                    <button>Load More Items</button>
                </div>
                <Footer />
            </div>
        );
    }

    // Function to load more items
    const loadMoreItems = () => {
        const newItemsToShow = itemsToShow + 10;
        setItemsToShow(newItemsToShow);
        setDisplayedCollection(collection.slice(0, newItemsToShow));
    };

    // Function to handle art click and show popup
    const handleArtClick = (art) => {
        setSelectedArt(art);
        setShowPopup(true);
    };

    // Function to close popup
    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedArt(null);
    };

    return (
        <div className="Mint-background">
            <Navbar />
            <div className="Mint">
                <div className="search-box" style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder="Search items..." 
                        style={{ paddingLeft: '30px', height: '30px' }} 
                    />
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="18" 
                        fill="gray" 
                        viewBox="0 0 24 24"
                        style={{ 
                            position: 'absolute', 
                            left: '8px', 
                            top: '35%', 
                            transform: 'translateY(-50%)' 
                        }}
                    >
                        <path d="M19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        style={{
                            position: 'absolute',
                            right: '8px',
                            top: '35%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                    >
                        <path
                            fill="#0f68d7"
                            d="M3 20v-6l8-2l-8-2V4l19 8z"
                        />
                    </svg>
                </div>

               
              

                <div className="Market-Art-display">
                    {displayedCollection.map((art) => (
                        <div className="Art-container" key={art.id} onClick={() => handleArtClick(art)}>
                            <img src={art.img} alt={art.name} />
                            <p className="Art-name">{art.name}
                                <span className="Sui-price">{art.price}</span>
                            </p>
                        </div>
                    ))}
                    {showPopup && <Popup art={selectedArt} onClose={handleClosePopup} />}
                </div>

                {itemsToShow < collection.length && (
                    <button onClick={loadMoreItems}>Load More Items</button>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MarketPlace;