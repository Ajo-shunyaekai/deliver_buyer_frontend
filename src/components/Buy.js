import React, { useEffect, useState } from 'react';
import '../style/buy.css';
import BuySeller from '../components/sections/BuySeller';
import BuyProduct from './sections/BuyProduct';
import { postRequestWithToken } from '../api/Requests';

const Buy = () => {
    const [activeButton, setActiveButton] = useState('seller'); // Initialize activeButton with 'seller'

    // Function to handle button click and set active button
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };


    return (
        <>
            <div className='buy-main-container'>
                <div className='buy-main-heading'>Buy</div>
                <div className='buy-button-section'>
                    {/* Buttons with click handlers */}
                    <div className={`buy-button-one ${activeButton === 'seller' ? 'active' : ''}`} onClick={() => handleButtonClick('seller')}>
                        By Seller
                    </div>
                    <div className={`buy-button-two ${activeButton === 'product' ? 'active' : ''}`} onClick={() => handleButtonClick('product')}>
                        By Product
                    </div>
                </div>
                {/* Conditional rendering based on activeButton state */}
                {activeButton === 'seller' && <BuySeller active={activeButton}/>}
                {activeButton === 'product' && <div>
                    <BuyProduct active = {activeButton}/>
                </div>}
            </div>
        </>
    );
};

export default Buy;
