import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import orderCancel from '../../style/orderCancel.css';
import CloseIcon from '@mui/icons-material/Close';

const OrderCancel = ({ setModal }) => {
    console.log('caa');
    const [open, setOpen] = useState(true);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        setModal(false)
    };

    const handleCancel = () => {
        // window.alert('submitted')
        setModal(false)
    }


    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" >
            <div className="order-cancel-container">
                <div className="order-cancel-header">
                    <div className="order-cancel-heading">Order ID : 22585
                    </div>
                    <CloseIcon onClick={toggleDrawer(false)} style={{ fontSize: '20px', color: '#5e676f' }} />
                </div>

                <div className="order-cancel-content">
                    This order is allotted to you. If you cancel this order, this order will no longer be allotted to you. Still wants to cancel this, proceed further
                </div>

                <div className="order-textarea-heading">
                    <span>Reason</span>
                    <textarea name="" id="" rows="2" className=" order-textarea" />
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