import React from 'react';
import '../../style/buyproduct.css';
import { Link } from 'react-router-dom';
import Search from '../../assest/Buy/search-icon.svg'
import Generics from '../../assest/Buy/generics.svg'
import Orignals from '../../assest/Buy/orignals.svg'
import Biosimilars from '../../assest/Buy/biosimilars.svg'
import MedicalDevices from '../../assest/Buy/medicaldevices.svg'
import Nutraceutical from '../../assest/Buy/neutraceutical.svg'
import Arrow from '../../assest/Buy/arrow.svg'
import MedicineOne from '../../assest/Buy/paracetamol.png';

const Buy2ndMarket = () => {
    return (
        <>
            <div className='buy-product-main-section-container'>
            <div className='buy-seller-main-heading'>Lorem Ipsum is simply dummy text</div>
                <div className='buy-seller-pharma-card'>
                    <div className='buy-seller-card'>
                        <div className='buy-seller-card-img'>
                            <img className='buy-seller-img-one' src={Generics} />
                        </div>
                        <div className='buy-seller-card-head'>Generies</div>
                        <div className='buy-seller-card-content'>Lorem ipsum is placeholder text
                            commonly used in the graphic,</div>
                        <div className='buy-seller-arrow-img'>
                            <img src={Arrow} />
                        </div>
                    </div>
                    <div className='buy-seller-card'>
                        <div className='buy-seller-card-img'>
                            <img className='buy-seller-img-two' src={Orignals} />
                        </div>
                        <div className='buy-seller-card-head'>Orignals</div>
                        <div className='buy-seller-card-content'>Lorem ipsum is placeholder text
                            commonly used in the graphic,</div>
                        <div className='buy-seller-arrow-img'>
                            <img src={Arrow} />
                        </div>
                    </div>
                    <div className='buy-seller-card'>
                        <div className='buy-seller-card-img'>
                            <img className='buy-seller-img-three' src={Biosimilars} />
                        </div>
                        <div className='buy-seller-card-head'>Biosimilars</div>
                        <div className='buy-seller-card-content'>Lorem ipsum is placeholder text
                            commonly used in the graphic,</div>
                        <div className='buy-seller-arrow-img'>
                            <img src={Arrow} />
                        </div>
                    </div>
                    <div className='buy-seller-card'>
                        <div className='buy-seller-card-img'>
                            <img className='buy-seller-img-four' src={MedicalDevices} />
                        </div>
                        <div className='buy-seller-card-head'>Medical Devices</div>
                        <div className='buy-seller-card-content'>Lorem ipsum is placeholder text
                            commonly used in the graphic,</div>
                        <div className='buy-seller-arrow-img'>
                            <img src={Arrow} />
                        </div>
                    </div>
                    <div className='buy-seller-card'>
                        <div className='buy-seller-card-img'>
                            <img className='buy-seller-img-five' src={Nutraceutical} />
                        </div>
                        <div className='buy-seller-card-head'>Nutraceutical</div>
                        <div className='buy-seller-card-content'>Lorem ipsum is placeholder text
                            commonly used in the graphic,</div>
                        <div className='buy-seller-arrow-img'>
                            <img src={Arrow} />
                        </div>
                    </div>
                </div>
                <div className='buy-seller-search-container'>
                    <input className='buy-seller-search-input' type='text' placeholder='Search Product' />
                    <div className='buy-seller-search'>
                        <img className='buy-seller-search-icon' src={Search} />
                        Search
                    </div>
                </div>
                <div className='buy-product-main-container'>
                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>

                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>

                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>

                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>

                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>

                    <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/market-product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                        <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Dolo</div>
                                <div className='buy-product-card-first-copmany-description'> paracetamol</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of Origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked In</div>
                                <div className='buy-product-card-second-text'>450</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Type</div>
                                <div className='buy-product-card-second-text'>EU CTU</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Dossier Status</div>
                                <div className='buy-product-card-second-text'>Ready to file</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>GMP Approvals</div>
                                <div className='buy-product-card-second-text'>GU EMP</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buy2ndMarket;
