import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style/pendingInvoice.css';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import PayModal from '../pay/PayModal';
const PendingInvoice = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <div className='pending-invo-container' >
            <div className='table-responsive mh-2 50'>
                <table className="table table-theme table-row v-middle" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                    <thead>
                        <tr>
                            <th className="text-muted invoice-th">Invoice No.</th>
                            <th className="text-muted invoice-th">Order ID</th>
                            <th className="text-muted invoice-th">Customer Name</th>
                            <th className="text-muted invoice-th">Amount</th>
                            <th className="text-muted invoice-th">Status</th>
                            <th className="text-muted invoice-th">Action</th>
                        </tr>
                    </thead>
                    <tbody className='pending-invoies-tbody-section'>
                        <tr data-id="9" className='table-row v-middle'>
                            <td>
                                <span className="item-title">18452025</span>
                            </td>
                            <td>
                                <span className="item-title">OR145236</span>
                            </td>
                            <td>
                                <div className="mx-0">
                                    <span className="item-title text-color">Mohammad Karim</span>
                                </div>
                            </td>

                            <td className="flex">
                                <span className="item-title text-color">450 AED</span>
                            </td>
                            <td className="flex">
                                <span className="item-title text-color">Pending</span>
                            </td>
                            <td className='pending-invoices-td'>
                                <div className='invoice-details-button-row'>
                                    <div className='invoice-details-button-column-pay'>
                                        <span
                                            className='invoices-details-button-pay'
                                            variant="primary"
                                            onClick={handleShowModal}
                                        >
                                            Pay
                                        </span>
                                    </div>

                                    <PayModal showModal={showModal} handleClose={handleCloseModal} />
                                    <Link to='/invoice-design'>
                                        <div className='invoice-details-button-column'>
                                            <VisibilityOutlinedIcon className='invoice-view' />
                                        </div>
                                    </Link>
                                    <div className='invoice-details-button-column-download'>
                                        <CloudDownloadOutlinedIcon className='invoice-view' />
                                    </div>

                                </div>
                            </td>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default PendingInvoice
