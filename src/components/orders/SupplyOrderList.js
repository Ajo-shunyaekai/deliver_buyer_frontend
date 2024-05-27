import React from 'react'
import Supplierdetails from '../../style/supplierdetails.css'
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import moment from 'moment/moment';


const SupplyOrderList = ({orderList}) => {

    return (
        <div className="supply-card-body">
            <div>
                <div className="table-assign-supply-heading">Order List</div>
            </div>
            <div className='supply-order-list-main-section'>
                <table className="supply-table">
                    {
                        orderList && orderList.length > 0 ?   
                        <thead className='supply-details-thead-section'>
                        <tr>
                            <td className='supply-tdss'>Order ID</td>

                            <td className='supply-tdss'>Date</td>

                            {/* <td className='supply-tdss'>Price</td> */}

                            <td className='supply-tdss'>Quantity</td>

                            <td className='supply-tdss'>Status</td>

                            <td className='supply-button-tdss'>Action</td>

                        </tr>

                    </thead> : ''
                    }
                  
                    
                    <tbody className='supply-table-tbody'>
                        {
                            orderList && orderList.length > 0 ? (
                            orderList?.map((order,i) => {
                                const totalQuantity = order.items.reduce((total, item) => {
                                    return total + item.quantity;
                                  }, 0);
                                  const orderedDate = moment(order.created_at).format("DD/MM/YYYY")
                                return (
                                    <tr className='supply-table-tr'>
                                    <td className='supply-td'>
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">{order.order_id || 'ORD-8723RD213fd'}</span>
                                        </div>
                                    </td>
                                    <td className='supply-td' >
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">{orderedDate || '22/05/2024'}</span>
                                        </div>
                                    </td>
                                    {/* <td className='supply-td' >
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">Paracetamol Tablet</span>
                                        </div>
                                    </td> */}
                                    {/* <td className='supply-td'>
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">588 AED</span>
                                        </div>
                                    </td> */}
                                    <td className='supply-td'>
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">{totalQuantity || 100}</span>
                                        </div>
                                    </td>
                                    <td className='supply-td'>
                                        <div className="table-supply-section-content">
                                            <span className="table-g-supply-text">{order.order_status || 'pending'}</span>
                                        </div>
                                    </td>
                                    <td className='supply-button-td'>
                                        <div className="table-supply-section-content">
                                            <Link to={`/order-details/${order.order_id || `ORD-8723RD213fd`}`}>
                                                <div className='table-supply-section-view'>
                                                    <RemoveRedEyeOutlinedIcon className='table-supply-section-eye' />
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                )
                            }) 
                            ) : 'no orders'
                        }
                       
                        {/* <tr className='supply-table-tr'>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">PR1234567</span>
                                </div>
                            </td>
                            <td className='supply-td' >
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">Paracetamol Tablet</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">588 AED</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">100</span>
                                </div>
                            </td>
                            <td className='supply-button-td'>
                                <div className="table-supply-section-content">
                                    <Link to='/order-details/345345'>
                                        <div className='table-supply-section-view'>
                                            <RemoveRedEyeOutlinedIcon className='table-supply-section-eye' />
                                        </div>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr className='supply-table-tr'>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">PR1234567</span>
                                </div>
                            </td>
                            <td className='supply-td' >
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">Paracetamol Tablet</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">588 AED</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">100</span>
                                </div>
                            </td>
                            <td className='supply-button-td'>
                                <div className="table-supply-section-content">
                                    <Link to='/order-details/23424'>
                                        <div className='table-supply-section-view'>
                                            <RemoveRedEyeOutlinedIcon className='table-supply-section-eye' />
                                        </div>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr className='supply-table-tr'>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">PR1234567</span>
                                </div>
                            </td>
                            <td className='supply-td' >
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">Paracetamol Tablet</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">588 AED</span>
                                </div>
                            </td>
                            <td className='supply-td'>
                                <div className="table-supply-section-content">
                                    <span className="table-g-supply-text">100</span>
                                </div>
                            </td>
                            <td className='supply-button-td'>
                                <div className="table-supply-section-content">
                                    <Link to='/order-details/234324'>
                                        <div className='table-supply-section-view'>
                                            <RemoveRedEyeOutlinedIcon className='table-supply-section-eye' />
                                        </div>
                                    </Link>
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SupplyOrderList