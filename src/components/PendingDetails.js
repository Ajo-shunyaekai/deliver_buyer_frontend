import React, { useEffect, useState } from 'react';
import Orderdetails from '../style/orderdetails.css'
import WorldMap from "react-svg-worldmap";
import OrderDetailsCircularBar from './chart/OrderDetailsCircularBar';
import ProductList from './details/ProductList';

const PendingDetails = () => {
    const [activeButton, setActiveButton] = useState('1h');
    const handleButtonClick = (value) => {
        setActiveButton(value);
    };
    return (
        <div className='order-details-container'>
            <div className='order-details-conatiner-heading'>Order ID: <span>987456321</span></div>
            <div className='order-details-section'>
                <div className='order-details-left-section'>
                    <div className='order-details-top-inner-section'>
                        <div className='order-details-left-inner-section-container'>
                            <div className='order-details-left-top-containers'>
                                <div className='order-details-top-order-cont'>
                                    <div className='order-details-left-top-main-heading'> Seller Name</div>
                                    <div className='order-details-left-top-main-contents'> Pharmaceuticals Pvt Ltd</div>
                                </div>
                                <div className='order-details-top-order-cont'>
                                    <div className='order-details-left-top-main-heading'> Order Status</div>
                                    <div className='order-details-left-top-main-contents'> In-Transit</div>
                                </div>
                                <div className='order-details-top-order-cont'>
                                    <div className='order-details-left-top-main-heading-button'> Tracking</div>
                                    <div className='order-details-left-top-main-contents'> </div>
                                </div>
                            </div>
                            {/* <div className='order-details-left-bottom-containers'>
                                <div className='order-details-left-bottom-vehichle'>
                                    <div className='order-details-left-bottom-vehicle-head'>Vehicle Type</div>
                                    <div className='order-details-left-bottom-vehicle-text'>20 FT Flatbed Open Body</div>
                                </div>
                                <div className='order-details-left-bottom-vehichle-no'>
                                    <div className='order-details-left-bottom-vehichle-no-head'>Total Cost</div>
                                    <div className='order-details-left-bottom-vehichle-no-text'>4000 AED</div>
                                </div>

                            </div> */}
                        </div>
                        {/* <div className='order-details-right-inner-section-container'>
                            <div className='order-details-right-inner-circular-bar-section'>
                                <div className='order-details-right-inner-section-heading'>Order Status</div>

                            </div>
                            <div className='order-details-right-inner-circular-bar-section'>
                                <div className='order-details-right-inner-section-heading'>Tracking</div>

                            </div>
                        </div> */}
                    </div>
                    {/* <div className='order-details-top-bottom-sction'>
                        <div className='order-details-top-bottom-order-sect'>
                            <div className='order-details-top-bottom-order-heading'>Commodity</div>
                            <div className='order-details-top-bottom-order-content'>Steel Plates - 20 Ton</div>
                        </div>
                        <div className='order-details-top-bottom-order-sect'>
                            <div className='order-details-top-bottom-order-heading'>Order Rate</div>
                            <div className='order-details-top-bottom-order-content'>AED 2152/TRWB</div>
                        </div>
                        <div className='order-details-top-bottom-order-sect'>
                            <div className='order-details-top-bottom-order-heading'>Order Date & Time</div>
                            <div className='order-details-top-bottom-order-content'>24/12/2019, 12:00 PM</div>
                        </div>
                    </div> */}


                </div>
                {/* <div className='order-details-right-section'>
                    <div className='order-details-map-container'>
                        <WorldMap
                            color="red"
                            value-suffix="people"
                            size="sm"
                            data={countryData}
                        />
                    </div>
                </div> */}
            </div>
            {/* start the assign driver section */}
            <div className='order-details-assign-driver-section'>
                <ProductList />
            </div>
            {/* end the assign driver section */}
            {/* Start the end section */}
            <div className='order-details-payment-container'>
                <div className='order-details-payment-left-section'>
                    <div className='order-details-payment-terms-cont'>
                        <div className='order-details-payment-first-terms-cont'>
                            <div className='order-details-payment-first-terms-heading'>Payment Terms</div>
                            <div className='order-details-payment-first-terms-text'>23 Days</div>
                        </div>
                        <div className='order-details-payment-first-terms-cont'>
                            <div className='order-details-payment-first-terms-heading'>Est. Delivery Time</div>
                            <div className='order-details-payment-first-terms-text'>15 Days</div>
                        </div>
                    </div>
                    <div className='order-details-payment-detention-cont'>
                        <div className='order-details-payment-detention-head'>Due Invoices</div>
                        <div className='order-details-payment-detention-content'>
                            <div className='order-details-payment-detention-date'>20</div>
                            {/* <div className='order-details-payment-detention-time'>AED 300</div> */}
                        </div>
                    </div>
                    <div className='order-details-payment-remark-cont'>
                        <div className='order-details-payment-remark-head'>Remarks</div>
                        {/* <div className='order-details-payment-remark-text'>Marketing and TV ads</div> */}
                        <div className='order-details-payment-remark-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        {/* <div className='order-details-payment-remark-text'>E-marketing maintenance</div> */}
                    </div>
                </div>
                <div className='order-details-payment-right-section'>
                    <div className='order-details-payment-right-section-heading'>Shipping Details</div>
                    <div className='order-details-payment-right-details-row'>
                        <div className='order-details-right-details-row-one'>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Consignor Name</div>
                                <div className='order-details-right-pickdata-text'>Surya Kumar sharma</div>
                            </div>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Phone No.</div>
                                <div className='order-details-right-pickdata-text'>+971 563658956</div>
                            </div>
                            <div className='order-details-right-pickupdata-address'>
                                <div className='order-details-right-pickdata-head'>Address</div>
                                <div className='order-details-right-pickdata-text'>Financial Center Rd, Along Sheik zayed road, Dubai 22155.</div>
                            </div>
                        </div>
                        <hr className='order-details-right-pickupdata-hr' />
                        <div className='order-details-right-details-row-one'>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Consignor Name</div>
                                <div className='order-details-right-pickdata-text'>Ashok kumar chauhan</div>
                            </div>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Phone No.</div>
                                <div className='order-details-right-pickdata-text'>+971 562145214</div>
                            </div>
                            <div className='order-details-right-pickupdata-address'>
                                <div className='order-details-right-pickdata-head'>Address</div>
                                <div className='order-details-right-pickdata-text'>Financial Center Rd, Along Sheik zayed road, Dubai 22155.</div>
                            </div>
                        </div>
                        {/* <hr className='order-details-right-pickupdata-hr' /> */}
                        {/* <div className='order-details-payment-right-section-heading'>Drop Details</div>
                        <div className='order-details-right-details-row-one'>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Consignee Name</div>
                                <div className='order-details-right-pickdata-text'>Mustfa Zaved khan</div>
                            </div>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Phone No.</div>
                                <div className='order-details-right-pickdata-text'>+971 587452154</div>
                            </div>
                            <div className='order-details-right-pickupdata-address'>
                                <div className='order-details-right-pickdata-head'>Address</div>
                                <div className='order-details-right-pickdata-text'>Financial Center Rd, Along Sheik zayed road, Dubai 22155.</div>
                            </div>
                        </div>
                        <hr className='order-details-right-pickupdata-hr' />
                        <div className='order-details-right-details-row-one'>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Consignee Name</div>
                                <div className='order-details-right-pickdata-text'>John Hancko</div>
                            </div>
                            <div className='order-details-right-pickupdata'>
                                <div className='order-details-right-pickdata-head'>Phone No.</div>
                                <div className='order-details-right-pickdata-text'>+971 585421542</div>
                            </div>
                            <div className='order-details-right-pickupdata-address'>
                                <div className='order-details-right-pickdata-head'>Address</div>
                                <div className='order-details-right-pickdata-text'>Financial Center Rd, Along Sheik zayed road, Dubai 22155.</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* end the section */}
        </div>
    )
}

export default PendingDetails