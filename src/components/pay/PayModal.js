import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UploadDocument from '../../components/pay/UploadDocument';

function PayModal({ showModal, handleClose }) {
    const [chequeImage, setChequeImage] = useState(null);

    const handleFileChange = event => {
        const file = event.target.files[0];
        setChequeImage(file);
    };

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Payment Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-payment-section'>
                    <div className='modal-payment-form'>
                        <label className='modal-class-head'>Mode of Payment</label>
                        <select className='modal-pay-dropdown' defaultValue="">
                            <option value="">Select</option>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Online">Net Banking</option>
                        </select>
                    </div>
                    <div className='modal-payment-form'>
                        <label className='modal-class-head'>Amount</label>
                        <input className='modal-class-input' type='text' name='amount' placeholder='Enter the Amount' autoComplete='off' />
                    </div>
                    <div className='modal-payment-form'>
                        <label className='modal-class-head'>Transaction ID</label>
                        <input className='modal-class-input' type='text' name='transactionId' placeholder='Enter the Transaction ID' autoComplete='off' />
                    </div>
                    <div className='modal-payment-form'>
                        <label className='modal-class-head'>Date</label>
                        <input className='modal-class-input' type='text' name='date' placeholder='DD/MM/YY' autoComplete='off' />
                    </div>
                    <div className='modal-payment-form'>
                        <label className='modal-class-head'>Upload Image</label>
                        <UploadDocument />
                    </div>
                    {chequeImage && (
                        <div className='modal-payment-form'>
                            <img src={URL.createObjectURL(chequeImage)} alt="Cheque" />
                        </div>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='modal-handle-save'>Submit</Button>
                <Button className='modal-handle-close' onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PayModal;
