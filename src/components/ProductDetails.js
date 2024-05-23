import React, { useEffect, useState } from 'react';
import productDetails from '../style/productDetails.css';
import para from '../assest/para.webp'
import CountryDetails from '../components/sections/CountryDetails';
import ProductDetailsCard from './ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { postRequestWithToken } from '../api/Requests';
const ProductDetails = () => {

    const { medicineId }        = useParams()
    const [details, setDetails] = useState()

    useEffect(() => {
        const obj = {medicine_id: medicineId}
        postRequestWithToken('buyer/medicine/medicine-details', obj, async (response) => {
            if (response.code === 200) {
                setDetails(response.result)
            } else {
               console.log('error in med details api');
            }
          })
    },[])

    return (
        <>
            <div className='main-product-details-container'>

            {
                    details?.map((data,i) => {
                        const strengths = data.inventory.strength?.join(', ');
                        return (
                <div className="product-details-cover">

                    <div className='product-details-container-main'>
                        <div className="product-details-section-one">
                            <div className="product-details-sec-one-left">
                                <h4 >
                                 {data.medicine_name}
                                </h4>
                                <p class="font-semibold text-[12px] leading-[21px] md:text-[16px] md:leading-[28px] text-gray-700 m-0">
                                   {data.dosage_form}  {strengths}
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
                                        <div className='product-details-two-right-text'>{data?.supplier?.estimated_delivery_time}</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Dossier type :</div>
                                        <div className='product-details-two-right-text'>{data.dossier_type}</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Dossier status :</div>
                                        <div className='product-details-two-right-text'>{data.dossier_status}</div>
                                    </div>
                                </div>
                                <div className="product-details-sec-two-left">
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>Country of origin :</div>
                                        <div className='product-details-two-right-text'>{data.country_of_origin}</div>
                                    </div>
                                    <div className="product-details-two">
                                        <div className='product-details-two-left-text'>GMP approvals :</div>
                                        <div className='product-details-two-right-text'>{data.gmp_approvals}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='product-details-container'>
                        {/* <div className="product-details-section-two-img"> */}
                                {/* {data.medicine_image?.map((image, j) => (
                                    <div className="product-details-sec-img-left" key={j}>
                                        <img src={`${process.env.REACT_APP_SERVER_URL}uploads/product_files/${image}`} alt={`${data.medicine_name} ${j}`} className="responsive-image" />
                                    </div>
                           
                                ))} */}
                                {/* </div> */}
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

                            {
                                        data.inventory.delivery_info?.map((info,k) => {
                                            return (
                                                <div className="product-range-details">
                                                    <div className="product-range-text"> <input className="product-range-input" type=" text" value={info.quantity} /> </div>
                                                    <div className="product-range-text"><input className="product-range-input" type="text" value={info.price} /> </div>
                                                    <div className="product-range-text"> <input className="product-range-input" type="text" value={info.est_delivery_days} /></div>
                                                </div>
                                            )
                                        })
                                    }

                            {/* <div className="product-range-details">
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
                            </div> */}


                        </div>
                        <div className='product-details-container'>
                            <div className="product-details-country-section">
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Registered in :</div>
                                    <div className='product-details-four-right-text'> <CountryDetails countryData = {data.registered_in} /></div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Tags :</div>
                                    <div className='product-details-four-right-text'>{data?.supplier?.tags}</div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Available for :</div>
                                    <div className='product-details-four-right-text'>Licensing With supply</div>
                                </div>
                                <div className="product-details-county">
                                    <div className='product-details-four-left-text'>Comments :</div>
                                    <div className='product-details-four-right-text'>
                                    {data.comments}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-details-containers'>

                            <div className="product-details-mfg-container">
                                <div className="product-details-mfg-heading">{data?.supplier?.supplier_name}</div>
                                <div className="product-details-mfg-details">{data?.supplier?.description}</div>
                            </div>

                        </div>

                        <div className='product-details-company-section'>
                            <div className='product-details-company-conatiner'>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Supplier Name :</div>
                                    <div className='product-details-inner-copmany-text'>{data?.supplier?.supplier_name}</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>License No. :</div>
                                    <div className='product-details-inner-copmany-text'>{data?.supplier?.license_no}</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Address :</div>
                                    <div className='product-details-inner-copmany-text'>{data?.supplier?.supplier_address}</div>
                                </div>
                            </div>
                            <div className='product-details-company-conatiner'>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Payment Terms :</div>
                                    <div className='product-details-inner-copmany-text'>{data?.supplier?.payment_terms}</div>
                                </div>
                                <div className='product-details-inner-company'>
                                    <div className='product-details-inner-copmany-head'>Est. Delivery Time :</div>
                                    <div className='product-details-inner-copmany-text'>{data?.supplier?.estimated_delivery_time}</div></div>
                            </div>
                        </div>
                        {/* start the ecommerce card */}
                        <div className='product-details-card-container'>
                            <ProductDetailsCard />
                        </div>
                        {/* end the ecommerce card */}
                    </div>
                </div>
                  )
                })
            }
            </div>
        </>
    )
}
export default ProductDetails