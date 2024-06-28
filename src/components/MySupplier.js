import React,  { useEffect, useState }  from 'react'
import MySupplier from '../style/mysupplier.css'
import card1 from '../assest/companycard/card1.svg'
import card2 from '../assest/companycard/card2.svg'
import card3 from '../assest/companycard/card3.svg'
import card4 from '../assest/companycard/card4.svg'
import card5 from '../assest/companycard/card5.svg'
import card6 from '../assest/companycard/card6.svg'
import { Link, useNavigate } from 'react-router-dom'
import { postRequestWithToken } from '../api/Requests'
import Pagination from 'react-js-pagination'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const MySuplier = () => {
    const navigate = useNavigate()

    const [mySuppliers, setMySuppliers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems]   = useState()
    const itemsPerPage = 4; 

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const buyerIdSessionStorage = sessionStorage.getItem("buyer_id");
        const buyerIdLocalStorage   = localStorage.getItem("buyer_id");

        if (!buyerIdSessionStorage && !buyerIdLocalStorage) {
        navigate("/login");
        return;
        }
            const obj = {
                buyer_id: buyerIdSessionStorage || buyerIdLocalStorage,
                pageNo : currentPage,
                pageSize : itemsPerPage
            }

            postRequestWithToken('buyer/supplier-list', obj, async (response) => {
                if (response.code === 200) {
                    setMySuppliers(response.result.suppliers)
                    setTotalItems(response.result.totalItems)
                } else {
                   console.log();
                }
              })
    },[currentPage])

    return (
        <>
            <div className='mysupplier-main-container'>
                <div className='mysupplier-main-head'>My Supplier</div>
                <div className='mysupplier-main-section'>
                {
                        mySuppliers?.map((supplier,i) => {
                            return (
                    <div className='mysupplier-card-section' key={i}>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>{supplier.supplier_name}</div>
                                <div className='mysupplier-description'>License No: {supplier.license_no || 'LIC-097342'}</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                {/* <img src={card1} /> */}
                                <img src={`${process.env.REACT_APP_SERVER_URL}uploads/supplier/supplierImage_files/${supplier?.supplier_image[0]}`} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>{supplier.country_of_origin || 'United Arab Emirated'}</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>{supplier.contact_person_country_code || +91} {supplier.contact_person_mobile_no || 9868708723}</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>{supplier.description || 'test description'}</div>
                        </div>
                        <Link to={`/supplier-details/${supplier.supplier_id}`}>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div>
                    )
                        })
                    }

                    {/* <div className='mysupplier-card-section'>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>ABC PVT. LTD</div>
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                <img src={card2} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>Abu Dhabi</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>+971 768987098</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>Lorem Ipsum is simply dummy<br /> printing.</div>
                        </div>
                        <Link to='/supplier-details'>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div>

                    <div className='mysupplier-card-section'>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>ABC PVT. LTD</div>
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                <img src={card3} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>Abu Dhabi</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>+971 768987098</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>Lorem Ipsum is simply dummy<br /> printing.</div>
                        </div>
                        <Link to='/supplier-details'>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div>

                    <div className='mysupplier-card-section'>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>ABC PVT. LTD</div>
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                <img src={card4} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>Abu Dhabi</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>+971 768987098</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>Lorem Ipsum is simply dummy<br /> printing.</div>
                        </div>
                        <Link to='/supplier-details'>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div>

                    <div className='mysupplier-card-section'>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>ABC PVT. LTD</div>
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                <img src={card5} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>Abu Dhabi</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>+971 768987098</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>Lorem Ipsum is simply dummy<br /> printing.</div>
                        </div>
                        <Link to='/supplier-details'>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div>

                    <div className='mysupplier-card-section'>
                        <div className='mysupplier-card-first-uppar-section'>
                            <div className='mysupplier-card-content-section'>
                                <div className='mysupplier-name-head'>ABC PVT. LTD</div>
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                <img src={card6} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>Abu Dhabi</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>+971 768987098</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>Lorem Ipsum is simply dummy<br /> printing.</div>
                        </div>
                        <Link to='/supplier-details'>
                            <div className='mysupplier-card-button'>
                                <div className='mysupplier-card-button-details'>View Details</div>
                            </div>
                        </Link>
                    </div> */}
                </div>

                <div className='mysupplier-pagination-section-main'>
                    <div className='pagi-container'>
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={totalItems}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                            prevPageText={<KeyboardDoubleArrowLeftIcon style={{ fontSize: '15px' }} />}
                            nextPageText={<KeyboardDoubleArrowRightIcon style={{ fontSize: '15px' }} />}
                            hideFirstLastPages={true}
                        />
                        <div className='pagi-total'>
                            Total Items: {totalItems}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MySuplier
