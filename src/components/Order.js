import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    const location  = useLocation();
     const navigate = useNavigate()

    // const [activeLink, setActiveLink]   = useState('active'); 
    const [orderList, setOrderList]     = useState([])
    const [totalOrders, setTotalOrders] = useState()
    const [currentPage, setCurrentPage] = useState(1); 
    const ordersPerPage = 1;

    // const handleLinkClick = (link) => {
    //     setActiveLink(link);
    //     setCurrentPage(1)
        
    //     switch (link) {
    //         case 'alloted':
                
    //             break;
    //         case 'active':
                
    //             break;

    //         case 'completed':
                
    //             break;
    //         case 'delete':
                
    //             break;
           
    //         default:
    //             break;
    //     }
    // };
    const getActiveLinkFromPath = (path) => {
        
        switch (path) {
            case '/order/active':
                return 'active';
            case '/order/completed':
                return 'completed';
            case '/order/pending':
                return 'pending';
            default:
                return 'active';
        }
    };

    const activeLink = getActiveLinkFromPath(location.pathname);

    const handleLinkClick = (link) => {
        setCurrentPage(1)
        switch (link) {
            case 'active':
                navigate('/order/active');
                break;
            case 'completed':
                navigate('/order/completed');
                break;
            case 'pending':
                navigate('/order/pending');
                break;
            default:
                navigate('/order/active');
        }
    };

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
            buyer_id  : buyerIdSessionStorage || buyerIdLocalStorage,
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
                Orders
                </div>
               
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