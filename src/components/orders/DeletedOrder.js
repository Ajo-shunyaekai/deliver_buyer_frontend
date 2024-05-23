import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import order from '../../style/order.css';
import ActivesOrders from '../../style/activeorder.css'
import Pagination from "react-js-pagination";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderCancel from './OrderCancel';
import PendingDetails from '../PendingDetails'



const PendingOrder = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(!modal)
    }


    // Alloted Order JSOn file
    const [activeOrders, setActiveOrders] = useState([
        {
            "order_id": "3654646",
            "date": {
                "date": "12/12/2019",
                // "time": "10:00 am"
            },
            "source_destination": {
                // "source": "Abu Dhabi - United Arab Emirates",
                "destination": "Pharmaceuticals Pvt. Ltd"
            },
            "number_of_TRWB": 4,
            "commodity": {
                "name": "Steel",
                "quantity": "(20 Ton)"
            },
            "status": "Pending"
        },
        {
            "order_id": "000002",
            "date": {
                "date": "12/12/2019",
                // "time": "10:00 am"
            },
            "source_destination": {
                // "source": "Abu Dhabi - United Arab Emirates",
                "destination": "Pharmaceuticals Pvt. Ltd"
            },
            "number_of_TRWB": 4,
            "commodity": {
                "name": "Steel",
                "quantity": "(20 Ton)"
            },
            "status": "Pending"
        },
        {
            "order_id": "000003",
            "date": {
                "date": "12/12/2019",
                // "time": "10:00 am"
            },
            "source_destination": {
                // "source": "Abu Dhabi - United Arab Emirates",
                "destination": "Pharmaceuticals Pvt. Ltd"
            },
            "number_of_TRWB": 4,
            "commodity": {
                "name": "Steel",
                "quantity": "(20 Ton)"
            },
            "status": "Pending"
        },
        {
            "order_id": "000004",
            "date": {
                "date": "12/12/2019",
                // "time": "10:00 am"
            },
            "source_destination": {
                // "source": "Abu Dhabi - United Arab Emirates",
                "destination": "Pharmaceuticals Pvt. Ltd"
            },
            "number_of_TRWB": 4,
            "commodity": {
                "name": "Steel",
                "quantity": "(20 Ton)"
            },
            "status": "Pending"
        },
    ]);


    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 2; // Change this to set the number of orders per page
    // Logic to calculate pagination indexes
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = activeOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(activeOrders.length / ordersPerPage);

    // pagination end
    return (
        <>
            <div className='order-main-container'>
                <div className="order-name-2"> Active Orders</div>
                <div className="order-container">

                    {/* Order Right side table  */}
                    <div className="order-container-right-section">
                        {/* start the table section code */}
                        <div className='order-inner-container-section'>
                            <table className="table-container">
                                <thead className='order-container-thead'>
                                    <tr className='order-container-tr'>
                                        <th className="order-container-th"><div className="order-container-head"> Order ID</div></th>
                                        <th className="order-container-th"> <div className="order-container-head"> Date</div></th>
                                        <th className="order-container-ths"><div className="order-container-heads">Supplier Name</div></th>
                                        <th className="order-container-th"><div className="order-container-head">Quantity</div></th>
                                        <th className="order-container-th"><div className="order-container-head">Status</div></th>
                                        <th className="order-container-th"><div className="order-container-head">Action</div></th>
                                    </tr>
                                </thead>
                                <tbody className='order-container-tbody'>
                                    <tr className="order-section-tr">
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">18452025</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">12/12/2019</div>
                                        </td>
                                        <td className='order-section-tds'>
                                            <div className="order-section-heading">Arihant Pharma Pvt. Ltd</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">4</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">Pending</div>
                                        </td>
                                        <td className='order-section-button-cont'>
                                            <div className='order-section-button'>
                                                <Link to='/pending-details'>
                                                    <div className='order-section-view'>
                                                        <RemoveRedEyeOutlinedIcon className='order-section-eye' />
                                                    </div>
                                                </Link>

                                                <div className='order-section-delete'>
                                                    <HighlightOffIcon className='order-section-off' />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody className='order-container-tbody'>
                                    <tr className="order-section-tr">
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">18452025</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">12/12/2019</div>
                                        </td>
                                        <td className='order-section-tds'>
                                            <div className="order-section-heading">Arihant Pharma Pvt. Ltd</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">4</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">Pending</div>
                                        </td>
                                        <td className='order-section-button-cont'>
                                            <div className='order-section-button'>
                                                <Link to='/pending-details'>
                                                    <div className='order-section-view'>
                                                        <RemoveRedEyeOutlinedIcon className='order-section-eye' />
                                                    </div>
                                                </Link>
                                                <div className='order-section-delete'>
                                                    <HighlightOffIcon className='order-section-off' />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody className='order-container-tbody'>
                                    <tr className="order-section-tr">
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">18452025</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">12/12/2019</div>
                                        </td>
                                        <td className='order-section-tds'>
                                            <div className="order-section-heading">Arihant Pharma Pvt. Ltd</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">4</div>
                                        </td>
                                        <td className='order-section-td'>
                                            <div className="order-section-heading">Pending</div>
                                        </td>
                                        <td className='order-section-button-cont'>
                                            <div className='order-section-button'>
                                                <Link to='/pending-details'>
                                                    <div className='order-section-view'>
                                                        <RemoveRedEyeOutlinedIcon className='order-section-eye' />
                                                    </div>
                                                </Link>
                                                <div className='order-section-delete'>
                                                    <HighlightOffIcon className='order-section-off' />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* End the table section code */}
                        {
                            modal === true ? <OrderCancel setModal={setModal} /> : ''
                        }
                        <div className='pagi-container'>
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={ordersPerPage}
                                totalItemsCount={activeOrders.length}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                                prevPageText={<KeyboardDoubleArrowLeftIcon style={{ fontSize: '15px' }} />}
                                nextPageText={<KeyboardDoubleArrowRightIcon style={{ fontSize: '15px' }} />}
                                hideFirstLastPages={true}
                            />
                            <div className='pagi-total'>
                                <div className='pagi-total'>
                                    Total Items: {activeOrders.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >



        </>
    )
}

export default PendingOrder
