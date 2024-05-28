import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import styles from '../../style/pendingInvoice.css';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { Link, useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import InvoiceTemplate from '../pay/invoiceDesign';


const CompleteInvoice = ({invoiceList}) => {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const handleShowModal  = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    //invoice download
    const handleDownload = (invoice) => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        // Render the InvoiceTemplate with the given invoice data
        ReactDOM.render(<InvoiceTemplate invoice={invoice} />, element);

        // Set options for html2pdf
        const options = {
            margin: 0.5,
            filename: `invoice_${invoice.invoice_number}.pdf`,
            image: { type: 'jpeg', quality: 1.00 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Generate PDF
        html2pdf().from(document.getElementById('invoice-content')).set(options).save().then(() => {
            // Clean up the temporary container
            ReactDOM.unmountComponentAtNode(element);
            document.body.removeChild(element);
        });
    };

    useEffect(() => {
        const buyerIdSessionStorage = sessionStorage.getItem("buyer_id");
        const buyerIdLocalStorage   = localStorage.getItem("buyer_id");

        if (!buyerIdSessionStorage && !buyerIdLocalStorage) {
        navigate("/login");
        return;
        }
    },[])

    return (
        <>
            <div className='pending-invo-container' >

                <div className='table-responsive mh-2 50'>
                    <table className="table table-theme table-row v-middle" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                        <thead>
                            <tr>
                                <th className="text-muted invoice-th">Invoice No.</th>
                                <th className="text-muted invoice-th">Order ID</th>
                                <th className="text-muted invoice-th">Customer Name</th>
                                <th className="text-muted invoice-th">Amount</th>
                                <th className="text-muted invoice-th">Payment Type</th>
                                <th className="text-muted invoice-th">Status</th>
                                <th className="text-muted invoice-th">Action</th>
                            </tr>
                        </thead>
                        <tbody className='pending-invoies-tbody-section'>
                        {invoiceList && invoiceList.length > 0 ? (
                            invoiceList.map((invoice, i) => (
                            <tr data-id="9" className='table-row v-middle'>
                                <td>
                                    <span className="item-title">{invoice.invoice_number}</span>
                                </td>
                                <td>
                                    <span className="item-title">{invoice.order_id}</span>
                                </td>
                                <td>
                                    <span className="item-title">{invoice.shipping_details.consignor_name}</span>
                                </td>
                                <td>
                                    <div className="mx-0">
                                        <span className="item-title text-color">{invoice.totalPrice} AED</span>
                                    </div>
                                </td>

                                <td className="flex">
                                    <span className="item-title text-color">COD</span>
                                </td>
                                <td className="flex">
                                    <span className="item-title text-color">{invoice.order_status === 'completed' ? 'Paid' : ''}</span>
                                </td>
                                <td>
                                    <div className='invoice-details-button-row'>
                                        <Link to={`/invoice-design/${invoice.order_id}`}>
                                            <div className='invoice-details-button-column'>
                                                <VisibilityOutlinedIcon className='invoice-view' />
                                            </div>
                                        </Link>
                                        <div className='invoice-details-button-column-download' onClick={() => handleDownload(invoice)}>
                                            <CloudDownloadOutlinedIcon className='invoice-view' />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                          ))
                          ) : (
                              <tr>
                                  <td colSpan="7" className="text-center">No data available</td>
                              </tr>
                          )}
                        </tbody>
                        {/* <tbody className='pending-invoies-tbody-section'>
                            <tr data-id="9" className='table-row v-middle'>
                                <td>
                                    <span className="item-title">18452025</span>
                                </td>
                                <td>
                                    <span className="item-title">OR125456</span>
                                </td>
                                <td>
                                    <span className="item-title">Abdul Mohammad</span>
                                </td>
                                <td>
                                    <div className="mx-0">
                                        <span className="item-title text-color">2748 AED</span>
                                    </div>
                                </td>

                                <td className="flex">
                                    <span className="item-title text-color">COD</span>
                                </td>
                                <td className="flex">
                                    <span className="item-title text-color">Paid</span>
                                </td>
                                <td>
                                    <div className='invoice-details-button-row'>
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
                        <tbody className='pending-invoies-tbody-section'>
                            <tr data-id="9" className='table-row v-middle'>
                                <td>
                                    <span className="item-title">18452025</span>
                                </td>
                                <td>
                                    <span className="item-title">OR125456</span>
                                </td>
                                <td>
                                    <span className="item-title">Abdul Mohammad</span>
                                </td>
                                <td>
                                    <div className="mx-0">
                                        <span className="item-title text-color">2748 AED</span>
                                    </div>
                                </td>

                                <td className="flex">
                                    <span className="item-title text-color">COD</span>
                                </td>
                                <td className="flex">
                                    <span className="item-title text-color">Paid</span>
                                </td>
                                <td>
                                    <div className='invoice-details-button-row'>
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

                        </tbody> */}
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompleteInvoice
