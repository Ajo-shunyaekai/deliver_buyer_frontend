import React, { useEffect, useState } from 'react';
import InvoiceCardDesign from './InvoiceCardDesign';
import InvoiceDesign from '../../style/invoiceDesign.css'
import html2pdf from 'html2pdf.js';
import { postRequestWithToken } from '../../api/Requests';
import { useParams} from 'react-router-dom';
import moment from 'moment/moment';


function InvoiceTemplate({invoice}) {
    const { orderId }                     = useParams()
    const [orderDetails, setOrderDetails] = useState()

    useEffect(() => {
        const obj = {order_id: orderId}

        postRequestWithToken('buyer/order/invoice-details', obj, async (response) => {
            if (response.code === 200) {
                setOrderDetails(response.result)
            } else {
               console.log('error in order details api');
            }
          })
    },[])

    const orderedDate = moment(orderDetails?.created_at).format("DD/MM/YYYY")

    const handleDownload = () => {
        const element = document.getElementById('invoice-content');
        const options = {
            margin: 0.5,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(element).set(options).save()
        
    };
    
    let subtotal  = 0;
    let vatAmount = 0

    return (
        <div className='invoice-template-design '>
            <div className='scroll-wrapper'>
                <div className='invoice-template-download'>
                    <div className='invoice-template-button' onClick={handleDownload}>Download</div>
                </div>
                <div id='invoice-content'>
                <div style={{ maxWidth: '800px', margin: 'auto', padding: '30px', border: '1px solid #eee', fontSize: '16px', lineHeight: '24px', color: '#555', backgroundColor: '#FFFFFF' }}>
                    <div style={{ textAlign: 'center', fontWeight: '500', fontSize: '30px', margin: '0px 0px 20px 0px' }}>Invoice</div>
                    <table style={{ fontSize: '12px' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px dotted #99a0ac' }}>
                                <td style={{ display: 'flex', justifyContent: 'end' }}>
                                    <p style={{ fontSize: '16px', fontWeight: '500' }}>Invoice Number : </p>
                                    <p style={{ fontSize: '16px', fontWeight: '500' }}>&nbsp;{orderDetails?.invoice_number || invoice?.invoice_no}</p>
                                </td>
                                <td style={{ display: 'flex', justifyContent: 'end', paddingBottom: '10px' }}>
                                    <p style={{ fontSize: '15px', fontWeight: '500' }}>Date : </p>
                                    <p style={{ fontSize: '15px', fontWeight: '500' }}>&nbsp;{orderedDate || moment(invoice?.created_at).format("DD/MM/YYYY")}</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <table style={{ padding: '20px 16px', width: '100%', borderRadius: '12px', tableLayout: 'fixed', marginTop: '20px' }}>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px dotted #99a0ac' }}>
                                                <td style={{ verticalAlign: 'top', width: '60%', paddingRight: '20px', paddingBottom: '20px' }}>
                                                    <h1 style={{ fontSize: '14px', fontWeight: 500, paddingBottom: '3px' }}>From :</h1>
                                                    <p style={{ fontSize: '16px', fontWeight: 500, paddingBottom: '6px' }}>{orderDetails?.supplier?.supplier_name || invoice?.supplier?.supplier_name}</p>
                                                    <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac' }}>{orderDetails?.supplier?.supplier_address || invoice?.supplier?.supplier_address}</p>
                                                    <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', paddingTop: '6px' }}>United Arab Emirates</p>
                                                    <td style={{ display: 'flex', justifyContent: 'start' }}>
                                                        <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', paddingTop: '6px' }}>VAT Reg No :</p>
                                                        <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', paddingTop: '6px' }}>&nbsp;1266547896</p>
                                                    </td>
                                                </td>
                                                <td style={{ verticalAlign: 'top', width: '40%', paddingBottom: '20px' }}>
                                                    <h1 style={{ fontSize: '14px', fontWeight: 500, paddingBottom: '3px', textAlign: 'end' }}>To :</h1>
                                                    <p style={{ fontSize: '16px', fontWeight: 500, paddingBottom: '6px', textAlign: 'end' }}>{orderDetails?.buyer_company || invoice?.buyer_company}</p>
                                                    <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', lineHeight: '16px', textAlign: 'end' }}>{orderDetails?.shipping_details?.address || invoice?.shipping_details?.address}</p>
                                                    <p style={{ fontSize: '13px', color: '#99a0ac', lineHeight: '16px', textAlign: 'end', paddingTop: '6px' }}>Dubai (United Arab Emirates)</p>
                                                    <td style={{ display: 'flex', justifyContent: 'end' }}>
                                                        <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', paddingTop: '6px' }}>VAT Reg No :</p>
                                                        <p style={{ fontSize: '13px', lineHeight: '16px', color: '#99a0ac', paddingTop: '6px' }}>&nbsp;1266547896</p>
                                                    </td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3">
                                                    <table style={{ width: '100%', borderSpacing: 0, }}>
                                                        <thead>
                                                            <tr style={{ textTransform: 'uppercase' }}>
                                                                <td style={{ padding: '8px 0', fontWeight: 500, borderBottom: '1px dotted rgb(153, 160, 172)', width: '40px' }}>S.No</td>
                                                                <td style={{ padding: '8px 0', fontWeight: 500, borderBottom: '1px dotted rgb(153, 160, 172)', width: '150px' }}>Description</td>
                                                                <td style={{ padding: '8px 0', fontWeight: 500, borderBottom: '1px dotted rgb(153, 160, 172)', width: '40px' }}>Qty</td>
                                                                <td style={{ padding: '8px 0', fontWeight: 500, borderBottom: '1px dotted rgb(153, 160, 172)', textAlign: 'end', width: '100px' }}>Unit Price</td>
                                                                <td style={{ padding: '8px 0', fontWeight: 500, borderBottom: '1px dotted rgb(153, 160, 172)', textAlign: 'end', width: '120px' }}>Total</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                            {
                                                                (orderDetails && orderDetails?.items && orderDetails?.items?.length) ?
                                                                  orderDetails?.items?.map((item, i) => {
                                                                    const totalPrice = item.quantity * 50; 
                                                                    subtotal += totalPrice;
                                                                    vatAmount = subtotal * 0.20
                                                                    return (
                                                                    <tr key={i}>
                                                                    <td style={{ paddingBlock: '12px', display: 'flex', alignItems: 'baseline' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '14px' }}>{i + 1}.</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '14px' }}>{item.product_name} (500mg)</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>{item.quantity}</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px', textAlign: 'end' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>50 AED</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px', textAlign: 'end' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>{item.quantity * 50} AED</p>
                                                                    </td>
                                                                    </tr>
                                                                     );
                                                                    })
                                                                 :
                                                                invoice?.items?.map((item, i) => {
                                                                    const totalPrice = item.quantity * 50; 
                                                                    subtotal += totalPrice;
                                                                    vatAmount = subtotal * 0.20
                                                                    return (
                                                                    <tr key={i}>
                                                                    <td style={{ paddingBlock: '12px', display: 'flex', alignItems: 'baseline' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '14px' }}>{i + 1}.</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '14px' }}>{item.product_name} (500mg)</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>{item.quantity}</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px', textAlign: 'end' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>50 AED</p>
                                                                    </td>
                                                                    <td style={{ paddingBlock: '12px', textAlign: 'end' }}>
                                                                        <p style={{ fontWeight: 500, fontSize: '13px' }}>{item.quantity * 50} AED</p>
                                                                    </td>
                                                                    </tr>
                                                                    );
                                                                })
                                                            }
                                                            
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody style={{ borderTop: '1px dotted rgb(153, 160, 172)', borderBottom: '1px dotted rgb(153, 160, 172)' }}>
                                                            <tr>
                                                                <td style={{ verticalAlign: 'top', paddingBottom: '20px', width: '42%' }}>
                                                                    <h1 style={{ fontSize: '16px', fontWeight: '500', marginTop: '16px', textAlign: 'start' }}>Bank Details :</h1>
                                                                    <tr style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingTop: '8px' }}>
                                                                        <p style={{ fontSize: '14px', fontWeight: '500', width: '100px' }}>Account No :</p>
                                                                        <p style={{ fontSize: '14px', fontWeight: '500' }}>1234567890123456</p>
                                                                    </tr>
                                                                    <tr style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingTop: '6px' }}>
                                                                        <p style={{ fontSize: '14px', fontWeight: '500', width: '100px' }}>Sort Code :</p>
                                                                        <p style={{ fontSize: '14px', fontWeight: '500' }}>147852</p>
                                                                    </tr>
                                                                </td>
                                                                <td style={{ width: '550px' }} >
                                                                    <table style={{ width: '100%', borderSpacing: 0, }}>
                                                                        <tbody>
                                                                            <tr style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', columnGap: '10px', marginTop: '8px' }}>
                                                                                <p style={{ textAlign: 'end', fontSize: '14px', fontWeight: '500' }}>Subtotal :</p>
                                                                                <p style={{ textAlign: 'end', fontWeight: '500', fontSize: '14px', width: '100px' }}>{subtotal} AED</p>
                                                                            </tr>
                                                                            <tr style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', columnGap: '10px', paddingTop: '8px' }}>
                                                                                <p style={{ textAlign: 'end', fontSize: '14px', fontWeight: '500' }}>VAT @ 20% :</p>
                                                                                <p style={{ textAlign: 'end', fontWeight: '500', fontSize: '14px', width: '100px' }}>{vatAmount} AED</p>
                                                                            </tr>
                                                                            <tr style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', columnGap: '10px', paddingTop: '6px' }}>
                                                                                <p style={{ textAlign: 'end', fontSize: '14px', fontWeight: '500', paddingBottom: '10px' }}>Total Amount Payable   :</p>
                                                                                <p style={{ textAlign: 'end', fontWeight: '500', fontSize: '14px', paddingBottom: '10px', width: '100px' }}>{subtotal + vatAmount} AED</p>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tbody style={{ width: '100%', borderBottom: '1px dotted rgb(153, 160, 172)' }}>
                                <tr>
                                    <td style={{ verticalAlign: 'top', width: '100%', paddingRight: '20px', paddingBottom: '20px' }}>
                                        <h1 style={{ fontSize: '16px', fontWeight: '500', marginTop: '16px' }}>Payment Terms :</h1>
                                        <div style={{ fontSize: '13px', lineHeight: '20px', marginTop: '4px', color: '#99a0ac' }}>
                                            <p style={{ position: 'relative', paddingLeft: '20px' }}>
                                                <span style={{ position: 'absolute', left: '0', top: '0', fontSize: '22px' }}>•</span>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <p style={{ position: 'relative', paddingLeft: '20px' }}>
                                                <span style={{ position: 'absolute', left: '0', top: '0', fontSize: '22px' }}>•</span>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <p style={{ position: 'relative', paddingLeft: '20px' }}>
                                                <span style={{ position: 'absolute', left: '0', top: '0', fontSize: '22px' }}>•</span>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </tfoot>

                    </table>
                </div>
                <div className='invopice-card-section-design'>
                    <InvoiceCardDesign />
                </div>
                </div>
            </div >
        </div >
    );
}

export default InvoiceTemplate;
