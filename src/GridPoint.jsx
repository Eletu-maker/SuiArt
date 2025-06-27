import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "./Popup";
import icon1 from "./assets/images/write.png"
import art1 from "./assets/images/ArtWork1.png"
import Footer from "./Footer"
function GridPoint(){
    const navigate = useNavigate();
     const [showPopup, setShowPopup] = useState(false);
    const now = new Date(); 
    const collection = [{
       name: "art1",
       img: art1,
       price: 10
    },{
        name: "art1",
       img: art1,
       price: 10
    },{
       name: "art1",
       img: art1,
       price: 10
        
    },{
        name: "art1",
       img: art1,
       price: 10
    },{
        name: "art1",
       img: art1,
       price: 10
    },]
      const handleArtClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return(
        <div className="secondDisplay">
            <div className="grid-container">
                <div className="context-container">
                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"/><path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/></svg>
                    <p className="title">Create Your Art</p>
                    <p className="content">Bring your unique expression to life, digitally or physically</p>
                </div>
                <div className="context-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 48 48"><rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 23.168a2.526 2.526 0 0 1 2.526-2.526h0a2.526 2.526 0 0 1 2.527 2.526v4.169M11.5 20.642v6.695" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.553 23.168a2.526 2.526 0 0 1 2.526-2.526h0a2.526 2.526 0 0 1 2.527 2.526v4.169" stroke-width="2"/><circle cx="24.069" cy="17.547" r=".75" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.069 20.642v6.695m10.789-8.779v7.516c0 .697.565 1.263 1.263 1.263h.379m-2.968-6.695h2.652m-4.147 6.695v-4.168a2.526 2.526 0 0 0-2.527-2.527h0a2.526 2.526 0 0 0-2.526 2.527m0 4.168v-6.695" stroke-width="2"/></svg>
                    <p className="title">Mint as NFT</p>
                    <p className="content">upload and secure your art on the blockchain. Every piece gets a digital proof of ownership</p>
                </div>
                <div className="context-container">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.677 15.118c-.812-1.232-5.09-5.42-6.162-6.552c-1.673-1.774-2.826-3.748-5.01-4.238c-1.372-.321-8.316.54-7.214 1.683a.35.35 0 0 0 .501 0c.481-.471 3.898-.932 6.533-.832a5.77 5.77 0 0 1 2.935 2.315c1.453 1.823 6.623 7.193 7.304 8.115q.182.271.311.571a25.8 25.8 0 0 1-4.94 5.57a6.3 6.3 0 0 1-2.214 1.183a47 47 0 0 1-4.338-3.707a69 69 0 0 1-4.629-5.12a6 6 0 0 1-1.062-3.486a.31.31 0 0 0-.621 0c.13 2.825.731 3.526 2.555 5.71a40.8 40.8 0 0 0 6.933 7.014a1.58 1.58 0 0 0 1.824.561c2.615-.802 5.57-4.599 7.073-6.512c.561-.732.922-1.183.22-2.275"/><path d="M8.72 9.758c.38-1.062.49-1.643-.37-2.315a2.204 2.204 0 0 0-3.207.401A8.4 8.4 0 0 1 2.879 5.84C1.716 4.538.594 2.364 1.897 1.232c.55-.491 1.523-.23 2.475.33c2.194 1.253 2.114 2.565 2.715 2.204c.841-.51-1.764-2.765-2.866-3.316C1.626-.862-.127.901.164 3.095c.36 2.665 2.474 4.469 4.819 5.63c.46 2.947 3.366 2.105 3.737 1.033m-.4-.872a1.293 1.293 0 0 1-2.546.13c.441.16.842.16.882-.1s-.521-.54-.912-.751c1.122-1.343 2.816-.1 2.575.721m14.768-2.254c-3.556-1.533-2.595-1.112-7.564-2.465c-.08 0-.591-.25-.872-.06a.34.34 0 0 0 .17.581q1.027.3 2.004.732a47 47 0 0 0 5.741 2.224c.832.37-.55 3.316-.54 4.007a.35.35 0 0 0 .7 0c.03-.831 2.295-3.957.361-5.02M9.842 12.243a.6.6 0 0 1-.3-.451a.371.371 0 1 0-.732 0a1.37 1.37 0 0 0 .792 1.392a1.263 1.263 0 0 0 1.673-.63c.13-.23.201-.488.21-.752a1.9 1.9 0 0 0-.11-.672c-.25-.69-.611-1.152.47-.29a.331.331 0 0 0 .522-.39c-.631-.792-1.383-1.494-2.134-.672a1.28 1.28 0 0 0-.26 1.002c0 .33.21.631.26 1.002a.53.53 0 0 1 0 .3c-.11.14-.24.25-.391.16m3.998-.701q-.351 0-.682.12a2.5 2.5 0 0 0-.821.502q-.428.42-.802.891l-.47.541l-.532.641a.33.33 0 0 0 .471.451l.611-.53l.14-.11v.1a.6.6 0 0 0 .28.3c.161.1.302.13.462.22c-.23.23-.47.481-.691.682a.373.373 0 1 0 .47.58c.452-.32 1.003-.69 1.464-1.101q.512-.445.901-1.002c.198-.364.279-.78.23-1.193a1.34 1.34 0 0 0-.46-.921a1.14 1.14 0 0 0-.571-.17m-.14 1.734a4.4 4.4 0 0 1-.602.871a2.2 2.2 0 0 0-.15-.47a.76.76 0 0 0-.28-.331c.12-.1.24-.2.37-.29c.13-.091 1.182-.762.661.22m1.654 1.211l-1.413 1.002a3.8 3.8 0 0 0-.731.821a1.16 1.16 0 0 0 0 1.063l.23.4l.33.391a.37.37 0 0 0 .572-.47l-.13-.322l-.1-.34v-.1c0-.03.14-.13.21-.2l.45-.422l1.002-1.372a.33.33 0 1 0-.45-.471zm1.753 2.825l.15.22q.094.099.2.181c.812.641.942.571 1.093.461c.15-.11.32-.15-.17-1.192a1.4 1.4 0 0 0-.161-.26a1.2 1.2 0 0 0-.23-.211c-.812-.541-1.002-.431-2.165.5c-.13.101-.22.231-.34.341c-.13.13-.27.25-.391.391q-.185.251-.32.531c-.09.191-.13.4-.12.611c.023.248.11.486.25.692c.13.18.791 1.002 1.162.58c.37-.42-.11-.52-.31-.951a.56.56 0 0 1 0-.32l.2-.221l.1.08c.811.511.942.42 1.072.3s.24-.26-.21-1.101a.8.8 0 0 0-.15-.21l.38-.462a.08.08 0 0 1-.04.04"/></g></svg>
                    <p className="title">Thrive</p>
                    <p className="content">Sell, earn, and build your reputation a an authentic Nigerian artisan</p>
                </div>
            </div>
            <div className="ArtWork">
                <h2>Featured art work</h2>
                    <div className="Art-display">
                                            {collection.map((art, index) => (
                            <div className="Art-container" key={index} onClick={handleArtClick}>
                            <img src={art.img} alt={art.name} width={140} height={150} />
                            <p className="Art-name">{art.name}
                                <span className="Sui-price">{art.price}</span>
                            </p>
                            </div>
                        ))}
                           {showPopup && <Popup onClose={handleClosePopup} />} 
                    </div>
            </div>

            <div className="third-section">
                <div>
                    
                    <img src={art1} alt="image" width={140} height={220}></img>
            
                    
                    <img src={art1} alt="image" width={140} height={220}></img>
                </div>
                <div className="story">
                    <h2>Own Your Story, Digitalize Your Art.</h2>
                    <button className="NFT-button" onClick={() => navigate("/mint")}>Mint Your NFTs</button>
                </div>
            </div>
           <Footer></Footer>
        </div>
        
    )
}

export default GridPoint