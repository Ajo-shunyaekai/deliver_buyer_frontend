import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import order from '../style/order.css';
import order_list from '../assest/dashboard/order_list.svg'
import OrderCancel from '../components/orders/OrderCancel';
import OrderDetails from './OrderDetails';
import ActiveOrders from '../components/orders/ActiveOrder';
import CompletedOrders from '../components/orders/CompleteOrder';
import PendingOrders from '../components/orders/DeletedOrder';
import Sidebar from '../components/Sidebar';
import { postRequestWithToken } from '../api/Requests';


const Order = () => {

    // Active class apply
    const [activeLink, setActiveLink] = useState('active'); // Default active link is 'alloted'

    const handleLinkClick = (link) => {
        setActiveLink(link);
        // Here you can set the respective orders state variable based on the link clicked
        switch (link) {
            case 'alloted':
                // Set allotedOrders state
                break;
            case 'active':
                // Set activeOrders state
                break;

            case 'completed':
                // Set completeOrders state
                break;
            case 'delete':
                // Set deleteOrders state
                break;
            // Add cases for completed and deleted orders similarly
            default:
                break;
        }
    };
    // pagination end

    const [orderList, setOrderList]     = useState([])
    const [totalOrders, setTotalOrders] = useState()
    const [currentPage, setCurrentPage] = useState(1); 
    const ordersPerPage = 1;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const obj = {
            buyer_id  : "BUY-jmn98sdanx",
            filterKey : activeLink,
            page_no   : currentPage, 
            limit     : ordersPerPage,
        }

        postRequestWithToken('buyer/order/buyer-order-list', obj, async (response) => {
            if (response.code === 200) {
                setOrderList(response.result.data)
                setTotalOrders(response.result.totalItems)
            } else {
               console.log('error in order list api',response);
            }
          })
    },[activeLink, currentPage])
    return (
        <>
            <div className='order-main-container'>
                <div className="order-name">
                    {(() => {
                        switch (activeLink) {
                            case 'alloted':
                                return 'Allotted Order';
                            case 'active':
                                return 'Active Orders';
                            case 'completed':
                                return 'Completed Orders';
                            case 'pending':
                                return 'Pending Orders';
                            default:
                                return 'Orders';
                        }
                    })()}
                </div>
                {/* <div className="order-name">Orders</div> */}
                <div className="order-container">
                    <div className="order-container-left">
                        <div onClick={() => handleLinkClick('active')} className={activeLink === 'active' ? 'active order-left-wrapper' : 'order-left-wrapper'}>
                            <img src={order_list} alt="order icon" />
                            <div>Active Orders</div>
                        </div>


                        <div onClick={() => handleLinkClick('completed')} className={activeLink === 'completed' ? 'active order-left-wrapper' : 'order-left-wrapper'}>
                            <img src={order_list} alt="order icon" />
                            <div>Completed Orders</div>
                        </div>

                        <div onClick={() => handleLinkClick('pending')} className={activeLink === 'pending' ? 'active order-left-wrapper' : 'order-left-wrapper'}>
                            <img src={order_list} alt="order icon" />
                            <div>Pending Orders</div>
                        </div>
                    </div>

                    {/* Order Right side table  */}
                    <div className="order-container-right">
                        <div responsive="xl" className='order-table-responsive'>

                            {
                                activeLink === 'active' ? 
                                <ActiveOrders 
                                orderList        = {orderList} 
                                totalOrders      = {totalOrders} 
                                currentPage      = {currentPage}
                                ordersPerPage    = {ordersPerPage}
                                handlePageChange = {handlePageChange}
                                activeLink       = {activeLink}
                                /> 
                                : activeLink === 'completed' ?
                                 <CompletedOrders 
                                 orderList        = {orderList} 
                                 totalOrders      = {totalOrders} 
                                 currentPage      = {currentPage}
                                 ordersPerPage    = {ordersPerPage}
                                 handlePageChange = {handlePageChange}
                                 activeLink       = {activeLink}
                                 /> : 
                                 activeLink === 'pending' ? 
                                 <PendingOrders
                                 orderList        = {orderList} 
                                 totalOrders      = {totalOrders} 
                                 currentPage      = {currentPage}
                                 ordersPerPage    = {ordersPerPage}
                                 handlePageChange = {handlePageChange}
                                 activeLink       = {activeLink}
                                  /> : ''
                            }


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Order