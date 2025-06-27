import Mint from "./Mint";
import Home from "./Home";
import MarketPlace from "./MarketPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from "./Creation";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/marketPlace" element={<MarketPlace/>}/>
                <Route path="/mint" element={<Mint />} />
                <Route path="/creation" element={<Creation/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
