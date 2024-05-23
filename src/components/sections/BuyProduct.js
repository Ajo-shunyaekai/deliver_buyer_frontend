import React, { useEffect, useState } from 'react';
import buyproduct from '../../style/buyproduct.css';
import { Link } from 'react-router-dom';
import Generics from '../../assest/Buy/generics.svg'
import Orignals from '../../assest/Buy/orignals.svg'
import Biosimilars from '../../assest/Buy/biosimilars.svg'
import MedicalDevices from '../../assest/Buy/medicaldevices.svg'
import Nutraceutical from '../../assest/Buy/neutraceutical.svg'
import Arrow from '../../assest/Buy/arrow.svg'
import Search from '../../assest/Buy/search-icon.svg'
import MedicineOne from '../../assest/Buy/paracetamol.png';
import { postRequestWithToken } from '../../api/Requests';

const BuyProduct = ({active}) => {
    const [medicineList, setMedicineList] = useState([])
    const [inputValue, setInputValue]     = useState('')
    const [searchKey, setSearchKey]       = useState('')
    // const active = 'product';

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

        if (e.target.value === '') {
            setSearchKey('');
        }
    }

    const handleProductSearch = () => {
        setSearchKey(inputValue)
    }   

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleProductSearch();
        }
    };

    useEffect(() => {
        const obj = {
            buyer_id: 'BUY-p480xquscz',
            searchKey: searchKey
         }

        if(active === 'product') {
            postRequestWithToken('buyer/medicine/medicine-list', obj, async (response) => {
                if (response.code === 200) {
                    setMedicineList(response.result)
                } else {
                   console.log('error in medicine list api',response);
                }
              })
        }
    },[searchKey])

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
                {/* start the search container code */}
                <div className='buy-seller-search-container'>
                    <input className='buy-seller-search-input' type='text' placeholder='Search Product'
                     onChange={(e) => handleInputChange(e)}
                     onKeyDown={handleKeyDown}
                     />
                    <div className='buy-seller-search' onClick={() => handleProductSearch() }>
                        <img className='buy-seller-search-icon' src={Search} />
                        Search
                    </div>
                </div>
                <div className='buy-product-main-container'>
                    {/* <div className='buy-product-card-section'>
                        <div className='buy-product-card-first-section-right'>
                            <div className='buy-product-card-first-medicine-image'>
                                <img src={MedicineOne} alt="Medicine" />
                            </div>
                            <div className='buy-product-card-first-button-container'>
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                                <Link to='/product-details'>
                                    <div className='buy-product-card-first-send-button'>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='buy-product-card-first-section'>
                            <div className='buy-product-card-first-left'>
                                <div className='buy-product-card-first-copmany-name'>Medicine Name</div>
                                <div className='buy-product-card-first-copmany-description'>Drugs Name</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Country of origin</div>
                                <div className='buy-product-card-second-text'>Dubai UAE</div>
                            </div>
                            <div className='buy-product-card-second-section'>
                                <div className='buy-product-card-second-head'>Stocked in</div>
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
                    </div> */}

{
                        medicineList?.map((medicine, i) => {
                            const firstImage = Array.isArray(medicine?.medicine_image) ? medicine.medicine_image[0] : null;
                            return (
                                <div className='buy-product-card-section'>
                                <div className='buy-product-card-first-section-right'>
                                    <div className='buy-product-card-first-medicine-image'>
                                        <img  src={`${process.env.REACT_APP_SERVER_URL}uploads/product_files/${firstImage}`}  alt="Medicine" /> 
                                    </div>
                                    <div className='buy-product-card-first-button-container'>
                                        <Link to={`/medicine-details/${medicine.medicine_id}`}>
                                            <div className='buy-product-card-first-send-button'>
                                                View Details
                                            </div>
                                        </Link>
                                    </div>
                                </div>
        
                                <div className='buy-product-card-first-section'>
                                    <div className='buy-product-card-first-left'>
                                        <div className='buy-product-card-first-copmany-name'>{medicine.medicine_name}</div>
                                        <div className='buy-product-card-first-copmany-description'>{medicine.drugs_name}</div>
                                    </div>
                                    <div className='buy-product-card-second-section'>
                                        <div className='buy-product-card-second-head'>Country of origin</div>
                                        <div className='buy-product-card-second-text'>{medicine.country_of_origin}</div>
                                    </div>
                                    <div className='buy-product-card-second-section'>
                                        <div className='buy-product-card-second-head'>Stocked in</div>
                                        <div className='buy-product-card-second-text'>{medicine.quantity}</div>
                                    </div>
                                    <div className='buy-product-card-second-section'>
                                        <div className='buy-product-card-second-head'>Dossier Type</div>
                                        <div className='buy-product-card-second-text'>{medicine.dossier_type}</div>
                                    </div>
                                    <div className='buy-product-card-second-section'>
                                        <div className='buy-product-card-second-head'>Dossier Status</div>
                                        <div className='buy-product-card-second-text'>{medicine.dossier_status}</div>
                                    </div>
                                    <div className='buy-product-card-second-section'>
                                        <div className='buy-product-card-second-head'>GMP Approvals</div>
                                        <div className='buy-product-card-second-text'>{medicine.gmp_approvals}</div>
                                    </div>
        
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default BuyProduct;
