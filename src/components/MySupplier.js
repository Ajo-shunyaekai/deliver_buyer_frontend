import React,  { useEffect, useState }  from 'react'
import MySupplier from '../style/mysupplier.css'
import card1 from '../assest/companycard/card1.svg'
import card2 from '../assest/companycard/card2.svg'
import card3 from '../assest/companycard/card3.svg'
import card4 from '../assest/companycard/card4.svg'
import card5 from '../assest/companycard/card5.svg'
import card6 from '../assest/companycard/card6.svg'
import { Link } from 'react-router-dom'
import { postRequestWithToken } from '../api/Requests'

const MySuplier = () => {
    const [mySuppliers, setMySuppliers] = useState([])

    useEffect(() => {
            const obj = {
                buyer_id: 'BUY-p480xquscz',
            }

            postRequestWithToken('buyer/supplier-list', obj, async (response) => {
                if (response.code === 200) {
                    setMySuppliers(response.result)
                } else {
                   console.log();
                }
              })
    },[])

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
                                <div className='mysupplier-description'>When looking at its layout.</div>
                            </div>
                            <div className='mysupplier-image-section'>
                                {/* <img src={card1} /> */}
                                <img src={`${process.env.REACT_APP_SERVER_URL}uploads/supplierImage_files/${supplier.supplier_image[0]}`} />
                            </div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Country Origin</div>
                            <div className='mysupplier-card-text'>{supplier.country_of_origin}</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Contact Number</div>
                            <div className='mysupplier-card-text'>{supplier.country_code} {supplier.mobile}</div>
                        </div>
                        <div className='mysupplier-card-first-section'>
                            <div className='mysupplier-card-heading'>Description</div>
                            <div className='mysupplier-card-text'>{supplier.description}</div>
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
            </div >
        </>
    )
}

export default MySuplier
