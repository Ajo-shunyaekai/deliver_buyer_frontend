import React, { useEffect, useState } from 'react';
import buy from '../../style/buy.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Search from '../../assest/Buy/search-icon.svg'
import card1 from '../../assest/companycard/card1.svg'
import card2 from '../../assest/companycard/card2.svg'
import card3 from '../../assest/companycard/card3.svg'
import card4 from '../../assest/companycard/card4.svg'
import card5 from '../../assest/companycard/card5.svg'
import card6 from '../../assest/companycard/card6.svg'
import ArrowCard from '../../assest/companycard/arrowcard.svg'
import { postRequestWithToken } from '../../api/Requests';

const BuySeller = ({active}) => {
    const navigate = useNavigate()

    const [showFormDropdown, setShowFormDropdown]                       = useState(false);
    const [showRecommendedUseDropdown, setShowRecommendedUseDropdown]   = useState(false);
    const [showCountryOfOriginDropdown, setShowCountryOfOriginDropdown] = useState(false);
    const [showGMPApprovalsDropdown, setShowGMPApprovalsDropdown]       = useState(false);

    const [openDropdown, setOpenDropdown]   = useState(null);
    const [supplierList, setSupplierList]   = useState([])
    const [inputValue, setInputValue]       = useState('');
    const [searchKey, setSearchKey]         = useState('')
    const [countryOrigin, setCountryOrigin] = useState()
    const [filterCountry, setFilterCountry] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

        if (e.target.value === '') {
            setSearchKey('');
        }
    }

    const handleProductSearch = () => {
        setSearchKey(inputValue)
    }   

    const handleCountry = (country) => {
        setFilterCountry(country)
    }

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const buyerIdSessionStorage = sessionStorage.getItem("buyer_id");
        const buyerIdLocalStorage   = localStorage.getItem("buyer_id");

        if (!buyerIdSessionStorage && !buyerIdLocalStorage) {
        navigate("/login");
        return;
        }

        if(active === 'seller') {
            const obj = {
                buyer_id  : buyerIdSessionStorage || buyerIdLocalStorage,
                searchKey : searchKey,
                filterCountry
            }

            postRequestWithToken('buyer/supplier-list', obj, async (response) => {
                if (response.code === 200) {
                    setSupplierList(response.result)
                } else {
                   console.log('error in supplier list api',response);
                }
              })
            }
    },[searchKey, filterCountry])

    useEffect(() => {
        const buyerIdSessionStorage = sessionStorage.getItem("buyer_id");
        const buyerIdLocalStorage   = localStorage.getItem("buyer_id");

        if (!buyerIdSessionStorage && !buyerIdLocalStorage) {
        navigate("/login");
        return;
        }

        const obj = {
            buyer_id: buyerIdSessionStorage || buyerIdLocalStorage,
        }
        postRequestWithToken('buyer/supplier/get-filter-values', obj, async (response) => {
            if (response.code === 200) {
                setCountryOrigin(response.result[0].country)
            } else {
               console.log('error in get filter values api',response);
            }
          })
    },[])

    return (
        <>
            <div className='buy-seller-container'>


            </div>
            {/* start the search container code */}
            <div className='buy-seller-search-container'>
                <input className='buy-seller-search-input' type='text' placeholder='Search Seller' onChange={(e) => handleInputChange(e)}/>
                <div className='buy-seller-search' onClick={() => handleProductSearch() }>
                    <img className='buy-seller-search-icon' src={Search} />
                    Search
                </div>
            </div>
            {/* start the filter section code */}
            <div className='buy-seller-filter-container'>
                <ul className='buy-seller-filter-ul'>
                    <li className='buy-seller-filter-drop' onClick={() => toggleDropdown('form')}>
                        Form {openDropdown === 'form' ? <FaAngleUp /> : <FaAngleDown />}
                        {openDropdown === 'form' && (
                            <ul className='buy-seller-inner-dropdown'>
                                <li>Option 1</li>
                                <li>Option 2</li>
                            </ul>
                        )}
                    </li>
                    <li className='buy-seller-filter-drop' onClick={() => toggleDropdown('recommendedUse')}>
                        Recommended Use {openDropdown === 'recommendedUse' ? <FaAngleUp /> : <FaAngleDown />}
                        {openDropdown === 'recommendedUse' && (
                            <ul className='buy-seller-inner-dropdown'>
                                <li>Option A</li>
                                <li>Option B</li>
                            </ul>
                        )}
                    </li>
                    <li className='buy-seller-filter-drop' onClick={() => toggleDropdown('countryOfOrigin')}>
                        Country of Origin {openDropdown === 'countryOfOrigin' ? <FaAngleUp /> : <FaAngleDown />}
                        {openDropdown === 'countryOfOrigin' && (
                            <ul className='buy-seller-inner-dropdown'>
                                {/* <li>Country 1</li>
                                <li>Country 2</li> */}
                                {countryOrigin?.map((country, i) => (
                                  <li key={i} onClick={() => handleCountry(country)}>{country}</li>
                                ))}  
                            </ul>
                        )}
                    </li>
                    <li className='buy-seller-filter-drop' onClick={() => toggleDropdown('gmpApprovals')}>
                        GMP Approvals {openDropdown === 'gmpApprovals' ? <FaAngleUp /> : <FaAngleDown />}
                        {openDropdown === 'gmpApprovals' && (
                            <ul className='buy-seller-inner-dropdown'>
                                <li>GMP Approved</li>
                                <li>Not GMP Approved</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            {/* start the card section code */}
            <div className='buy-seller-company-card-section'>
                {/* <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card1} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div >
                <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card2} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div>
                <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card3} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div>
                <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card4} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div>
                <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card5} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div>
                <div className='buy-seller-company-cards'>
                    <div className='buy-seller-company-container'>
                        <div className='buy-seller-copmany-contents'>
                            <div className='buy-seller-copmany-name'>Company Name</div>
                            <div className='buy-seller-company-name-text'>Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='buy-seller-copmany-img'>
                            <img src={card6} />
                        </div>
                    </div>
                    <div className='buy-seller-company-content-section'>
                        <div className='buy-seller-company-country-name'>Country of Origin</div>
                        <div className='buy-seller-company-counrty-flag'>India</div>
                    </div>
                    <div className='buy-seller-company-description'>
                        <div className='buy-seller-company-description-text'>Discription</div>
                        <div className='buy-seller-company-short-description'>Lorem ipsum dolor sit amet, consectetur
                            adipiscin elit, sed do eiusmod tempor
                            incididunt</div>
                    </div>
                    <Link to='/supplier-details'>
                        <div className='buy-seller-company-card-button'>
                            <div className='buy-seller-company-view'> View Details</div>
                        </div>
                    </Link>
                </div> */}
                 
                 {
                    supplierList?.map((supplier,i) => {
                        return (
                        <div className='buy-seller-company-cards'>
                        <div className='buy-seller-company-container'>
                            <div className='buy-seller-copmany-contents'>
                                <div className='buy-seller-copmany-name'>{supplier.supplier_name}</div>
                                <div className='buy-seller-company-name-text'>License No: {supplier.license_no}</div>
                            </div>
                            <div className='buy-seller-copmany-img'>
                                {/* <img src={card1} /> */}
                                <img src={`${process.env.REACT_APP_SERVER_URL}uploads/supplier/supplierImage_files/${supplier.supplier_image[0]}`} />
                            </div>
                        </div>
                        <div className='buy-seller-company-content-section'>
                            <div className='buy-seller-company-country-name'>Country of Origin</div>
                            <div className='buy-seller-company-counrty-flag'>{supplier.country_of_origin}</div>
                        </div>
                        <div className='buy-seller-company-description'>
                            <div className='buy-seller-company-description-text'>Description</div>
                            <div className='buy-seller-company-short-description'>{supplier.description}</div>
                        </div>
                        <Link to={`/supplier-details/${supplier.supplier_id}`}>
                            <div className='buy-seller-company-card-button'>
                                <div className='buy-seller-company-view'> View Details</div>
                                <img className='buy-seller-copmany-arrowcard' src={ArrowCard} />
                            </div>
                        </Link>
                        </div >
                        )
                        
                    })
                }

            </div>
        </>
    )
}

export default BuySeller