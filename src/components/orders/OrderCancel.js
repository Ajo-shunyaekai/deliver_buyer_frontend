import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import orderCancel from '../../style/orderCancel.css';
import CloseIcon from '@mui/icons-material/Close';
import { postRequestWithToken } from '../../api/Requests';

const OrderCancel = ({ setModal, orderId,  activeLink  }) => {
    console.log('caa');
    const [open, setOpen] = useState(true);
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        setModal(false)
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleCancel = () => {
        if (reason.trim() === '') {
            setError('Reason is required');
            return;
        }
        setError('');

        const obj = {
            buyer_id   : "BUY-jmn98sdanx",
            order_id   : orderId,
            order_type : activeLink,
            reason     : reason
        }

        // postRequestWithToken('buyer/order/cancel-order', obj, async (response) => {
        //     if (response.code === 200) {

        //     } else {
        //        console.log('error in order cancel api',response);
        //     }
        //   })
        setModal(false)
    }


    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" >
            <div className="order-cancel-container">
                <div className="order-cancel-header">
                    <div className="order-cancel-heading">Order ID : {orderId}
                    </div>
                    <CloseIcon onClick={toggleDrawer(false)} style={{ fontSize: '20px', color: '#5e676f' }} />
                </div>

                <div className="order-cancel-content">
                    This order is allotted to you. If you cancel this order, this order will no longer be allotted to you. Still wants to cancel this, proceed further
                </div>

                <div className="order-textarea-heading">
                    <span>Reason</span>
                    <textarea 
                    name="" 
                    id="" rows="2" 
                    className=" order-textarea" 
                    value={reason}
                    onChange={handleReasonChange}
                    />
                    {error && <div className="error-message" style={{color:'red'}}>{error}</div>}
                </div>

                <div className="order-btn-container">
                    <div className="order-close-btn" onClick={toggleDrawer(false)}>   Close</div>
                    <div className="order-submit-btn" onClick={() => handleCancel()}>   Submit</div>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default OrderCancel