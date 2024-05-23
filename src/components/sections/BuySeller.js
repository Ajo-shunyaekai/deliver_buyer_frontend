import React, { useState } from 'react';
import buy from '../../style/buy.css'
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Search from '../../assest/Buy/search-icon.svg'
import card1 from '../../assest/companycard/card1.svg'
import card2 from '../../assest/companycard/card2.svg'
import card3 from '../../assest/companycard/card3.svg'
import card4 from '../../assest/companycard/card4.svg'
import card5 from '../../assest/companycard/card5.svg'
import card6 from '../../assest/companycard/card6.svg'
import ArrowCard from '../../assest/companycard/arrowcard.svg'

const BuySeller = () => {
    const [showFormDropdown, setShowFormDropdown] = useState(false);
    const [showRecommendedUseDropdown, setShowRecommendedUseDropdown] = useState(false);
    const [showCountryOfOriginDropdown, setShowCountryOfOriginDropdown] = useState(false);
    const [showGMPApprovalsDropdown, setShowGMPApprovalsDropdown] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <div className='buy-seller-container'>


            </div>
            {/* start the search container code */}
            <div className='buy-seller-search-container'>
                <input className='buy-seller-search-input' type='text' placeholder='Search Seller' />
                <div className='buy-seller-search'>
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
                                <li>Country 1</li>
                                <li>Country 2</li>
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
                <div className='buy-seller-company-cards'>
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
                </div>
            </div>
        </>
    )
}

export default BuySeller