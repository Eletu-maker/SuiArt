import Navbar from "./Navbar";
import Footer from "./Footer";

function MarketPlace() {
    return (
        <div className="Mint-background">
            <Navbar />
            <div className="Mint"><div className="search-box" style={{ position: 'relative' }}>
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
                
            </div>

            <button>Load More Items</button>
</div>
            <Footer />
        </div>
    );
}

export default MarketPlace;
