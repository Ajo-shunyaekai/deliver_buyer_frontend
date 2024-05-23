import React from 'react';
import productDetails from '../style/productDetails.css';
import para from '../assest/para.webp'
import CountryDetails from '../components/sections/CountryDetails';
import ProductDetailsCard from './ProductDetailsCard';
const ProductDetails = () => {

    return (
        <>
            <div className='main-product-details-container'>


                <div className="product-details-cover">

                    <div className='product-details-container-main'>
                        <div className="product-details-section-one">
                            <div className="product-details-sec-one-left">
                                <h4 >
                                    Paracetamol
                                </h4>
                                <p class="font-semibold text-[12px] leading-[21px] md:text-[16px] md:leading-[28px] text-gray-700 m-0">
                                    Suppositories 125 mg, 250 mg,
                                </p>
                            </div>

                            <div className="product-details-sec-one-right">
                                <button className='product-details-send-btn'>Send Inquiry</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-details-wrapper">
                        <div className='product-details-container'>
                            <div className="product-details-section-two">
                                <div className="product-details-sec-two-left">
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Shipping time :</div>
                                        <div className='product-details-two-right-text'>12 Days</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Dossier type :</div>
                                        <div className='product-details-two-right-text'>EU CTD</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Dossier status :</div>
                                        <div className='product-details-two-right-text'>Ready to file</div>
                                    </div>
                                </div>
                                <div className="product-details-sec-two-left">
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Country of origin :</div>
                                        <div className='product-details-two-right-text'>European Union</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>GMP approvals :</div>
                                        <div className='product-details-two-right-text'>EU GMP</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='product-details-container'>
                            <div className="product-details-section-two-img">
                                <div className="product-details-sec-img-left">
                                    <img src={para} alt="" className="responsive-image" />
                                </div>
                                <div className="product-details-sec-img-left">
                                    <img src={para} alt="" className="responsive-image" />
                                </div>
                                <div className="product-details-sec-img-left">
                                    <img src={para} alt="" className="responsive-image" />
                                </div>
                                <div className="product-details-sec-img-left">
                                    <img src={para} alt="" className="responsive-image" />
                                </div>
                            </div>
                        </div>

                        <div className='product-details-container'>
                            <div className="product-range-container">
                                <div className="product-range-heading">Quantity</div>
                                <div className="product-range-heading">Price</div>
                                <div className="product-range-heading">Est. Delivery Time</div>
                            </div>
                            <div className="product-range-details">
                                <div className="product-range-text"> <input className="product-range-input" type=" text" value='0 to 500' /> </div>
                                <div className="product-range-text"><input className="product-range-input" type="text" value="192 AED" /> </div>
                                <div className="product-range-text"> <input className="product-range-input" type="text" value="10 Days" /></div>
                            </div>

                            <div className="product-range-details">
                                <div className="product-range-text"> <input className="product-range-input" type=" text" value='500 to 1000' /> </div>
                                <div className="product-range-text"><input className="product-range-input" type="text" value="299 AED" /> </div>
                                <div className="product-range-text"> <input className="product-range-input" type="text" value="14 Days" /></div>
                            </div>

                            <div className="product-range-details">
                                <div className="product-range-text"> <input className="product-range-input" type=" text" value='1000 to 2000' /> </div>
                                <div className="product-range-text"><input className="product-range-input" type="text" value="399 AED" /> </div>
                                <div className="product-range-text"> <input className="product-range-input" type="text" value="16 Days" /></div>
                            </div>

                            <div className="product-range-details">
                                <div className="product-range-text"> <input className="product-range-input" type=" text" value='2000 to 5000' /> </div>
                                <div className="product-range-text"><input className="product-range-input" type="text" value="469 AED" /> </div>
                                <div className="product-range-text"> <input className="product-range-input" type="text" value="18 Days" /></div>
                            </div>


                        </div>
                        <div className='product-details-container'>
                            <div className="product-details-country-section">
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Registered in :</div>
                                    <div className='product-details-four-right-text'> <CountryDetails /></div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Tags :</div>
                                    <div className='product-details-four-right-text'>Dymadon, Lemsip, Panadol, Panamax, Tylenol</div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Available for :</div>
                                    <div className='product-details-four-right-text'>Licensing With supply</div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Comments :</div>
                                    <div className='product-details-four-right-text'>
                                        Full documentation, WEU non-generic dossier.
                                        Tablets 250 mg - OTC,available for markets worldwide, except the countries already registered in
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='product-details-containers'>

                            <div className="product-details-mfg-container">
                                <div className="product-details-mfg-heading">Manufacture #12024</div>
                                <div className="product-details-mfg-details">A pharmaceutical manufacturer based in the EU that is active in 40+ countries selling its products in Europe,
                                    Africa, Middle East, CIS, North America, LATAM, and Asia for 50+ years.
                                    Key production lines are RX products, OTC, cosmetics, food supplements, and veterinary products.
                                    They are produced in GMP-compliant manufacture. The main dosage forms are liquid, solid, and semi-solid.
                                    The main therapeutic areas are dermatology, metabolic diseases, and respiratory. The company possesses a branch in Africa.</div>
                            </div>

                        </div>

                        <div className='product-details-company-section'>
                            <div className='product-details-company-conatiner'>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Supplier Name :</div>
                                    <div className='product-details-inner-copmany-text'>ABC Pvt. Ltd.</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>License No. :</div>
                                    <div className='product-details-inner-copmany-text'>2541IT</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Address :</div>
                                    <div className='product-details-inner-copmany-text'>City Place Abu Dhabi</div>
                                </div>
                            </div>
                            <div className='product-details-company-conatiner'>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Payment Terms :</div>
                                    <div className='product-details-inner-copmany-text'>Credit, Debit</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Est. Delivery Time :</div>
                                    <div className='product-details-inner-copmany-text'>12 Days</div></div>
                            </div>
                        </div>
                        {/* start the ecommerce card */}
                        <div className='product-details-card-container'>
                            <ProductDetailsCard />
                        </div>
                        {/* end the ecommerce card */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails