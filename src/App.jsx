import Mint from "./Mint";
import Home from "./Home";
import MarketPlace from "./MarketPlace";
import Creation from "./Creation";
import Navbar from "./Navbar";
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NFTProvider } from './NFTContext';

function App() {
    return (
        <WalletProvider>
            <NFTProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marketPlace" element={<MarketPlace />} />
                        <Route path="/mint" element={<Mint />} />
                        <Route path="/creation" element={<Creation />} />
                    </Routes>
                </BrowserRouter>
            </NFTProvider>
        </WalletProvider>
    );
}

export default App;