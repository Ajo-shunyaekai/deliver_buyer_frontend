import React, { useEffect, useState } from 'react';
import '../style/buy.css';
import BuySeller from '../components/sections/BuySeller';
import BuyProduct from './sections/BuyProduct';
import Buy2ndMarket from './sections/Buy2ndMarket';
import { postRequestWithToken } from '../api/Requests';
import { useLocation, useNavigate } from 'react-router-dom';

const Buy = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getActiveButtonFromPath = (path) => {
        switch (path) {
            case '/buy/seller':
                return 'seller';
            case '/buy/product':
                return 'product';
            case '/buy/market':
                return 'market';
            default:
                return 'seller';
        }
    };

    const activeButton = getActiveButtonFromPath(location.pathname);

    const handleButtonClick = (button) => {
        switch (button) {
            case 'seller':
                navigate('/buy/seller');
                break;
            case 'product':
                navigate('/buy/product');
                break;
            case 'market':
                navigate('/buy/market');
                break;
            default:
                navigate('/buy/seller');
        }
    };


    return (
        <>
            <div className='buy-main-container'>
                <div className='buy-main-heading'>Buy</div>
                <div className='buy-button-section'>
                    <div className={`buy-button-one ${activeButton === 'seller' ? 'active' : ''}`} onClick={() => handleButtonClick('seller')}>
                        By Seller
                    </div>
                    <div className={`buy-button-two ${activeButton === 'product' ? 'active' : ''}`} onClick={() => handleButtonClick('product')}>
                        By Product
                    </div>
                    <div className={`buy-button-two ${activeButton === 'market' ? 'active' : ''}`} onClick={() => handleButtonClick('market')}>
                   Secondary Market
                    </div>
                </div>
                {activeButton === 'seller' && <BuySeller active={activeButton}/>}
                {activeButton === 'product' && <div>
                    <BuyProduct active = {activeButton}/>
                </div>}
                {activeButton === 'market' && <div>
                    <Buy2ndMarket active = {activeButton}/>
                </div>}
            </div>
        </>
    );
};

export default Buy;
