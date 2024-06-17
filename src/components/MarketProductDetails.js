import React, { useState } from 'react';
import '../style/productDetails.css';
import para from '../assest/para.webp';
import CountryDetails from '../components/sections/CountryDetails';
import ProductDetailsCard from './ProductDetailsCard';
import { Link } from 'react-router-dom';
import SupplierPurchaseInvoice from './pay/SupplierPurchaseInvoice';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const MarketProductDetails = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDownloadPDF = () => {
        const input = document.getElementById('invoice-section'); 

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('invoice.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF', error);
            });
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = (e) => {
        if (e.target.className === 'modal') {
            setShowModal(false);
        }
    };

    return (
        <>
            <div className='main-product-details-container'>
                <div className="product-details-cover">
                    <div className='product-details-container-main'>
                        <div className="product-details-section-one">
                            <div className="product-details-sec-one-left">
                                <h4>
                                Paracetamol <span className='product-details-stength'> (500mg)</span>
                                </h4>
                                <p className="font-semibold text-[12px] leading-[21px] md:text-[16px] md:leading-[28px] text-gray-700 m-0">
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
                                        <div className='product-details-two-left-text'>Purchased on :</div>
                                        <div className='product-details-two-right-text'>12/04/2024</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Country available in :</div>
                                        <div className='product-details-two-right-text'>UAE</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Quantity :</div>
                                        <div className='product-details-two-right-text'>244</div>
                                    </div>
                                </div>
                                <div className="product-details-sec-two-left">
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Unit price :</div>
                                        <div className='product-details-two-right-text'>20 AED</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Minimum purchase :</div>
                                        <div className='product-details-two-right-text'>20 Unit</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Condition :</div>
                                        <div className='product-details-two-right-text'>Very less used</div>
                                    </div>
                                </div>
                                <div className="product-details-sec-two-button-cont">
                                    <div className='product-details-view-button-invoice' onClick={toggleModal}>
                                        <span className='view-purchase-invoice-button-sec'>View Purchase Invoice</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Type of form :</div>
                                        <div className='product-details-two-right-text'>Tablet</div>
                                    </div>
                                </div>
                                <div className="product-details-sec-two-left">
                                <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Product category :</div>
                                        <div className='product-details-two-right-text'>Nutraceuticals</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Shelf life :</div>
                                        <div className='product-details-two-right-text'>36 Month</div>
                                    </div>
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
                                <div className="product-details-mfg-heading">About Supplier #124321</div>
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
                                    <Link to='/supplier-details'>
                                        <div className='product-details-inner-copmany-head'>Supplier name :</div>
                                        <div className='product-details-inner-copmany-text'>ABC Pvt. Ltd.</div>
                                    </Link>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>License no. :</div>
                                    <div className='product-details-inner-copmany-text'>2541IT</div>
                                </div>
                                
                            </div>
                            <div className='product-details-company-conatiner'>
                            <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Address :</div>
                                    <div className='product-details-inner-copmany-text'>City Place Abu Dhabi</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Payment terms :</div>
                                    <div className='product-details-inner-copmany-text'>12 Days</div>
                                </div>
                            </div>
                        </div>
                        {/* start the ecommerce card */}
                        <div className='product-details-card-container'>
                            <ProductDetailsCard />
                        </div>
                        {/* end the ecommerce card */}
                    </div>
                </div>
                {showModal && (
                <div className="market-modal" onClick={closeModal}>
                    <div className="market-modal-content">
                        <span className="market-close" onClick={toggleModal}>&times;</span>
                        <div id="invoice-section">
                            <SupplierPurchaseInvoice />
                        </div>
                        <div className='invoice-download-button-container'>
                        <button id="invoice-download-button" onClick={handleDownloadPDF}>Download Invoice</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </>
    );
}

export default MarketProductDetails;
