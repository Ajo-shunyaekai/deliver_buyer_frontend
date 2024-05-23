import React from 'react'
import Supplierdetails from '../../style/supplierdetails.css'
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const SupplyOrderList = () => {
    return (
        <div className="supply-card-body">
            <div>
                <div className="table-assign-supply-heading">Order List</div>
            </div>
            <div className='supply-order-list-main-section'>
                <table className="supply-table">
                    <thead className='supply-details-thead-section'>
                        <tr>
                            <td className='supply-tdss'>Product ID</td>

                            <td className='supply-tdss'>Product Name</td>

                            <td className='supply-tdss'>Price</td>

                            <td className='supply-tdss'>Quantity</td>

                            <td className='supply-button-tdss'>Status</td>
                        </tr>

                    </thead>
                    <tbody className='supply-table-tbody'>
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
                                    <Link to='/order-details'>
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
                                    <Link to='/order-details'>
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
                                    <Link to='/order-details'>
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
                                    <Link to='/order-details'>
                                        <div className='table-supply-section-view'>
                                            <RemoveRedEyeOutlinedIcon className='table-supply-section-eye' />
                                        </div>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SupplyOrderList