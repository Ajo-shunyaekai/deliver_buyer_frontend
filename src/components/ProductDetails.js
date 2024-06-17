import React, { useEffect, useState } from 'react';
import productDetails from '../style/productDetails.css';
import para from '../assest/para.webp'
import CountryDetails from '../components/sections/CountryDetails';
import ProductDetailsCard from './ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { postRequestWithToken } from '../api/Requests';
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const navigate              = useNavigate();
    const { medicineId }        = useParams()

    const [details, setDetails]                           = useState()
    const [medId, setMedId]                               = useState(medicineId)
    const [medicineName, setMedicineName]                 = useState()
    const [newMedicineName, setNewMedicineName]           = useState()
    const [similarMedicinesList, setSimilarMedicinesList] = useState([])

    useEffect(() => {
        const buyerIdSessionStorage = sessionStorage.getItem("buyer_id");
        const buyerIdLocalStorage   = localStorage.getItem("buyer_id");

        if (!buyerIdSessionStorage && !buyerIdLocalStorage) {
        navigate("/login");
        return;
        }
        
        const obj = {
            medicine_id : medId,
            buyer_id    : buyerIdSessionStorage || buyerIdLocalStorage
        }
        
        postRequestWithToken('buyer/medicine/medicine-details', obj, async (response) => {
            if (response.code === 200) {
                setDetails(response.result)
                setMedicineName(response.result[0]?.medicine_name)

            } else {
               console.log('error in med details api');
            }
          })
    },[medId])

    useEffect(() => {
        const obj = {
            medicine_id   : medicineId, 
            medicine_name : medicineName
        }
        postRequestWithToken('buyer/medicine/similar-medicine-list', obj, async (response) => {
            if (response.code === 200) {
                setSimilarMedicinesList(response.result)
            } else {
               console.log('error in similar-medicine-list api');
            }
          })
    },[medicineName,medId])

    const handleMedicineClick = (newMedicineId, newMedicine) => {
        setMedId(newMedicineId)
        setNewMedicineName(newMedicine)
        navigate(`/medicine-details/${newMedicineId}`);
    };


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
                                        {data.medicine_name} <span className='product-details-stength'> (500mg)</span>
                                        </h4>
                                        <p class="font-semibold text-[12px] leading-[21px] md:text-[16px] md:leading-[28px] text-gray-700 m-0">
                                        {data.composition} 125 mg, 250 mg
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
                                                <div className='product-details-two-right-text'>{data?.shipping_time}</div>
                                            </div>
                                            <div className="product-details-two">
                                                <div className='product-details-two-left-text'>Dossier type :</div>
                                                <div className='product-details-two-right-text'>{data.dossier_type}</div>
                                            </div>
                                            <div className="product-details-two">
                                                <div className='product-details-two-left-text'>Dossier status :</div>
                                                <div className='product-details-two-right-text'>{data.dossier_status}</div>
                                            </div>
                                            <div className="product-details-two">
                                                <div className='product-details-two-left-text'>Type of form :</div>
                                                <div className='product-details-two-right-text'>Tablet</div>
                                            </div>
                                            <div className="product-details-two">
                                                <div className='product-details-two-left-text'>Stocked in :</div>
                                                <div className='product-details-two-right-text'>1500</div>
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
                                                <div className='product-details-two-right-text'>{data?.supplier?.country_of_origin}</div>
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
                                                <img src={`${process.env.REACT_APP_SERVER_URL}uploads/medicine/product_files/${image}`} alt={`${data.medicine_name} ${j}`} className="responsive-image" />
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
                                    <div className="product-range-heading">Unit Price</div>
                                    <div className="product-range-heading">Total Price</div>
                                    <div className="product-range-heading">Est. Delivery Time</div>
                                    </div>

                                    {
                                                data?.inventory_info?.map((info,k) => {
                                                    return (
                                                        <div className="product-range-details">
                                                            <div className="product-range-text"> <input className="product-range-input" type=" text" value={info.quantity} /> </div>
                                                            <div className="product-range-text"><input className="product-range-input" type="text" value="24 AED" /> </div>
                                                            <div className="product-range-text"><input className="product-range-input" type="text" value={info.unit_price} /> </div>
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
                                            <div className='product-details-four-right-text'>{data?.tags}</div>
                                        </div>
                                        <div className="product-details-county">
                                            <div className='product-details-four-left-text'>Available for :</div>
                                            <div className='product-details-four-right-text'>{data?.available_for}</div>
                                        </div>
                                        <div className="product-details-county">
                                            <div className='product-details-four-left-text'>Comments :</div>
                                            <div className='product-details-four-right-text'>
                                            {data.description}
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
                                     
                                    </div>
                                    <div className='product-details-company-conatiner'>
                                        <div className='product-details-inner-company'>
                                            <div className='product-details-inner-copmany-head'>Address :</div>
                                            <div className='product-details-inner-copmany-text'>{data?.supplier?.supplier_address}</div>
                                        </div>
                                        <div className='product-details-inner-company'>
                                            <div className='product-details-inner-copmany-head'>Payment Terms :</div>
                                            <div className='product-details-inner-copmany-text'>{data?.supplier?.payment_terms}</div>
                                        </div>
                                        {/* <div className='product-details-inner-company'>
                                            <div className='product-details-inner-copmany-head'>Est. Delivery Time :</div>
                                            <div className='product-details-inner-copmany-text'>{data?.supplier?.estimated_delivery_time}</div></div> */}
                                    </div>
                                </div>
                                {/* start the ecommerce card */}
                                <div className='product-details-card-container'>
                                    <ProductDetailsCard similarMedicines = {similarMedicinesList} onMedicineClick={handleMedicineClick}/>
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