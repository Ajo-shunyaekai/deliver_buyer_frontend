import React, { useEffect, useState } from 'react';
import Supplierdetails from '../style/supplierdetails.css'
import SupplyOrderList from './orders/SupplyOrderList'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { useParams } from 'react-router-dom';
import { postRequestWithToken } from '../api/Requests';

const SupplierDetails = () => {
    const { supplierId } = useParams()

    const [supplier, setSupplier]                     = useState()
    const [buyerSupplierOrder, setBuyerSupplierOrder] = useState()
    // const [orderCount, setOrderCount]                 = useState()

    useEffect(() => {
        const obj = {supplier_id: supplierId}
        postRequestWithToken('buyer/supplier-details', obj, async (response) => {
            if (response.code === 200) {
                setSupplier(response.result)
            } else {
               console.log('error in supplier-details api');
            }
          })
    },[])

    useEffect(() => {
        const fetchBuyerSupplierOrder = () => {
            const obj = {
                buyer_id    : 'BUY-jmn98sdanx',
                supplier_id : supplierId
            }
    
            postRequestWithToken('buyer/buyer-supplier-orders', obj, async(response) => {
                if(response.code === 200) {
                    // setOrderCount(response.result)
                    setBuyerSupplierOrder(response.result)
                } else {
                    console.log('error in buyer-supplier-orders api');
                }
            })
        }

        fetchBuyerSupplierOrder()
    },[])

    console.log('buyerSupplierOrder',buyerSupplierOrder);
    // console.log('orderCount',orderCount);


    return (
        <>
            <div className='supplier-details-container'>
                <div className='supplier-details-inner-conatiner'>
                    <div className='supplier-details-left-inner-container'>
                        <div className='supplier-details-left-uppar-section'>
                            <div className='supplier-details-left-uppar-head'>{supplier?.supplier_name}</div>
                            <div className='supplier-details-left-inner-section'>
                                <div className='supplier-details-left-inner-sec-text'>Supplier ID: {supplier?.supplier_id}</div>
                                <div className='supplier-details-left-inner-img-container'>
                                    <div className='supplier-details-left-inner-mobile-button'>
                                        <PhoneInTalkOutlinedIcon className='supplier-details-left-inner-icon' />
                                        <span className='tooltip'>{supplier?.country_code} {supplier?.mobile}</span>
                                    </div>
                                    <div className='supplier-details-left-inner-email-button'>
                                        <MailOutlineIcon className='supplier-details-left-inner-icon' />
                                        <span className='tooltip'>{supplier?.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='supplier-details-description-section'>
                            <div className='supplier-details-description-head'>Description</div>
                            <div className='supplier-details-description-content'>{supplier?.description}</div>
                        </div>
                        <div className='supllier-details-section'>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>License No.</div>
                                <div className='supplier-details-inner-text'>{supplier?.license_no}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Address</div>
                                <div className='supplier-details-inner-text'>{supplier?.supplier_address}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Country of Origin</div>
                                <div className='supplier-details-inner-text'>{supplier?.country_of_origin}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Contact Person Name:</div>
                                <div className='supplier-details-inner-text'>{supplier?.contact_person_name}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Designation</div>
                                <div className='supplier-details-inner-text'>{supplier?.designation}</div>
                            </div>

                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Payment Terms</div>
                                <div className='supplier-details-inner-text'>{supplier?.payment_terms}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Est. Delivery Time</div>
                                <div className='supplier-details-inner-text'>{supplier?.estimated_delivery_time}</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Tags</div>
                                <div className='supplier-details-inner-text'>{supplier?.tags}</div>
                            </div>
                        </div>
                    </div>
                    <div className='supplier-details-card-section'>
                        <div className='supplier-details-uppar-card-section'>
                            <div className='supplier-details-uppar-card-inner-section'>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Completed Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>{buyerSupplierOrder?.completedCount || 20}</div>
                                    </div>

                                </div>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Active Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>{buyerSupplierOrder?.activeCount || 10}</div>
                                    </div>

                                </div>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Pending Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>{buyerSupplierOrder?.pendingCount || 25}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='supplier-details-bottom-table-section'>
                            <SupplyOrderList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierDetails