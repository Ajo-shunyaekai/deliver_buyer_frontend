import React, { useState } from 'react';
import Supplierdetails from '../style/supplierdetails.css'
import SupplyOrderList from './orders/SupplyOrderList'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const SupplierDetails = () => {

    return (
        <>
            <div className='supplier-details-container'>
                <div className='supplier-details-inner-conatiner'>
                    <div className='supplier-details-left-inner-container'>
                        <div className='supplier-details-left-uppar-section'>
                            <div className='supplier-details-left-uppar-head'>Pharmaceuticals Pvt Ltd</div>
                            <div className='supplier-details-left-inner-section'>
                                <div className='supplier-details-left-inner-sec-text'>Supplier ID: SP12345657</div>
                                <div className='supplier-details-left-inner-img-container'>
                                    <div className='supplier-details-left-inner-mobile-button'>
                                        <PhoneInTalkOutlinedIcon className='supplier-details-left-inner-icon' />
                                        <span className='tooltip'>123-456-7890</span>
                                    </div>
                                    <div className='supplier-details-left-inner-email-button'>
                                        <MailOutlineIcon className='supplier-details-left-inner-icon' />
                                        <span className='tooltip'>example@example.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='supplier-details-description-section'>
                            <div className='supplier-details-description-head'>Description</div>
                            <div className='supplier-details-description-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                        </div>
                        <div className='supllier-details-section'>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>License No.</div>
                                <div className='supplier-details-inner-text'>455SD78954</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Address</div>
                                <div className='supplier-details-inner-text'>476 Udyog Vihar Gurugaon</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Country of Origin</div>
                                <div className='supplier-details-inner-text'>Dubai</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Contact Person Name:</div>
                                <div className='supplier-details-inner-text'>Mr. Satish Kumar</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Designation</div>
                                <div className='supplier-details-inner-text'>Market General Manager</div>
                            </div>

                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Payment Terms</div>
                                <div className='supplier-details-inner-text'>Credit, Debit, COD</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Est. Delivery Time</div>
                                <div className='supplier-details-inner-text'> Any discounts</div>
                            </div>
                            <div className='supplier-details-inner-section'>
                                <div className='supplier-details-inner-head'>Tags</div>
                                <div className='supplier-details-inner-text'>Abilify, Acanya, Acthar Gel</div>
                            </div>
                        </div>
                    </div>
                    <div className='supplier-details-card-section'>
                        <div className='supplier-details-uppar-card-section'>
                            <div className='supplier-details-uppar-card-inner-section'>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Completed Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>45</div>
                                    </div>

                                </div>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Active Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>45</div>
                                    </div>

                                </div>
                                <div className='supplier-details-card-container'>
                                    <div className='supplier-details-card-container-contents'>
                                        <div className='supplier-details-card-conteianer-head'>Pending Orders</div>
                                        <div className='supplier-details-card-conteianer-text'>45</div>
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