import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const NFTContext = createContext();

// Custom hook to use the NFT context
export const useNFTs = () => {
    const context = useContext(NFTContext);
    if (!context) {
        throw new Error('useNFTs must be used within an NFTProvider');
    }
    return context;
};

// Provider component
export const NFTProvider = ({ children }) => {
    const [mintedNFTs, setMintedNFTs] = useState([]);
    const [purchasedNFTs, setPurchasedNFTs] = useState([]);

    // Load NFTs from localStorage when the app starts
    useEffect(() => {
        const savedMintedNFTs = JSON.parse(localStorage.getItem('mintedNFTs') || '[]');
        const savedPurchasedNFTs = JSON.parse(localStorage.getItem('purchasedNFTs') || '[]');
        setMintedNFTs(savedMintedNFTs);
        setPurchasedNFTs(savedPurchasedNFTs);
    }, []);

    // Save minted NFTs to context and localStorage
    const addMintedNFT = (nft) => {
        const newNFT = { ...nft, id: Date.now() + Math.random() };
        const updatedNFTs = [...mintedNFTs, newNFT];
        setMintedNFTs(updatedNFTs);
        localStorage.setItem('mintedNFTs', JSON.stringify(updatedNFTs));
    };

    // Save purchased NFTs to context and localStorage
    const addPurchasedNFT = (nft) => {
        const newNFT = { ...nft, id: Date.now() + Math.random() };
        const updatedNFTs = [...purchasedNFTs, newNFT];
        setPurchasedNFTs(updatedNFTs);
        localStorage.setItem('purchasedNFTs', JSON.stringify(updatedNFTs));
    };

    // Get all NFTs (minted and purchased)
    const getAllNFTs = () => {
        return [...mintedNFTs, ...purchasedNFTs];
    };

    // Value object to be provided to consumers
    const value = {
        mintedNFTs,
        purchasedNFTs,
        addMintedNFT,
        addPurchasedNFT,
        getAllNFTs
    };

    return (
        <NFTContext.Provider value={value}>
            {children}
        </NFTContext.Provider>
    );
};