import React, { useState } from 'react';
import styles from '../style/support.module.css';
import FaqSupport from './sections/FaqSupport';
import SupportImageUpload from './SupportImageUpload'

const Support = () => {
    const [feedbackVisible, setFeedbackVisible] = useState(true); 
    const [complaintVisible, setComplaintVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('feedback'); 

    const toggleFeedbackForm = () => {
        setFeedbackVisible(true);
        setComplaintVisible(false);
        setActiveButton('feedback');
    };

    const toggleComplaintForm = () => {
        setComplaintVisible(true);
        setFeedbackVisible(false);
        setActiveButton('complaint');
    };



    // Form Validation
    const [orderId, setOrderId] = useState('');
    const [feedback, setFeedback] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!orderId) {
            errors.orderId = 'Order ID is required';
        }
        if (!feedback) {
            errors.feedback = 'Feedback is required';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Form is valid, submit the form
            console.log({ orderId, feedback });
        } else {
            // Form is invalid, set errors
            setErrors(errors);
        }
    };

    // Complaint form
    
    const [compOrderId, setcompOrderId] = useState('');
    const [compfeedback, setcompfeedback] = useState('');
    const [compErrors, setcompErrors] = useState({});

    const compValidate = () => {
        const compErrors = {};
        if (!compOrderId) {
            compErrors.compOrderId = 'Order ID is required';
        }
        if (!compfeedback) {
            compErrors.compfeedback = 'Feedback is required';
        }
        return compErrors;
    };

    const complaintSubmit = (event) => {
        event.preventDefault();
        const compErrors = compValidate(); // Call compValidate instead of validate
        if (Object.keys(compErrors).length === 0) {
            // Form is valid, submit the form
            console.log({ compOrderId, compfeedback }); // Log the correct variables
        } else {
            // Form is invalid, set errors
            setcompErrors(compErrors);
        }
    };

    return (
        <>
            <div className={styles['support-main-container']}>
                <div className={styles[`support-heading`]}>Support</div>
                <div className={styles[`support-container`]}>
                    <div className={styles[`support-page`]}>
                        <div className={styles[`faq-section`]}>
                            <div className={styles[`support-btn-container`]}>
                                <div onClick={toggleFeedbackForm}>
                                    <div className={`${styles[`support-btn`]} ${activeButton === 'feedback' && styles.active}`}>
                                        Feedback
                                    </div>
                                </div>
                                <div onClick={toggleComplaintForm}>
                                    <div className={`${styles[`support-btn`]} ${activeButton === 'complaint' && styles.active}`}>
                                        Complaint
                                    </div>
                                </div>
                            </div>
                            {
                                feedbackVisible && (
                                    <div className={styles[`form-main-container`]}>
                                        <div className={styles[`form-heading`]}>Feedback Form</div>
                                        <form className={styles['form-main-form-section']}  onSubmit={handleSubmit}>
                                            <div className={styles[`form-container`]}>
                                                <div className={styles['form-support-main-section']}>
                                                    <div className={styles['form-cont-input-sec']}>
                                                    <input
                                                    type="text"
                                                    placeholder="Enter your order Id"
                                                    className={styles[`form-input`]}
                                                    value={orderId}
                                                    onChange={(e) => setOrderId(e.target.value)}/>
                                                    {errors.orderId && <div className={styles['error-message']}>{errors.orderId}</div>}
                                                    </div>
                                                    
                                                    <div className={styles['form-support-textarea']}>
                                                    <textarea
                                                    placeholder="Enter your feedback"
                                                    className={styles[`form-textarea`]}
                                                    rows={4}
                                                    value={feedback}
                                                    onChange={(e) => setFeedback(e.target.value)}/>
                                                        {errors.feedback && <div className={styles['error-message']}>{errors.feedback}</div>}
                                                    </div>
                                                </div>

                                                <div className={styles['form-support-image']}>
                                                    <SupportImageUpload />
                                                </div>
                                            </div>
                                            <div className={styles[`form-submit-btn-cont`]} >
                                            <button type="submit" className={styles['form-submit-btn']}>Submit</button>

                                                {/* <span className={styles['form-submit-btn']}>Submit</span> */}
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                            {
                                complaintVisible && (
                                    <div className={styles[`form-main-container`]}>
                                        <div className={styles[`form-heading`]}>Complaint Form</div>
                                        <form className={styles['form-main-form-section']} onSubmit={complaintSubmit}>
                                        <div className={styles['form-container']}>
                                            <div className={styles['form-support-main-section']}>
                                                <div className={styles['form-cont-input-sec']}>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your order Id"
                                                        className={styles['form-input']}
                                                        value={compOrderId}
                                                        onChange={(e) => setcompOrderId(e.target.value)}
                                                    />
                                                    {compErrors.compOrderId && <div className={styles['error-message']}>{compErrors.compOrderId}</div>}
                                                </div>

                                                <div className={styles['form-support-textarea']}>
                                                    <textarea
                                                        placeholder="Enter your complaint"
                                                        className={styles['form-textarea']}
                                                        rows={4}
                                                        value={compfeedback} // Corrected the variable name
                                                        onChange={(e) => setcompfeedback(e.target.value)}
                                                    />
                                                    {compErrors.compfeedback && <div className={styles['error-message']}>{compErrors.compfeedback}</div>}
                                                </div>
                                            </div>

                                            <div className={styles['form-support-image']}>
                                                <SupportImageUpload />
                                            </div>
                                        </div>
                                        <div className={styles['form-submit-btn-cont']}>
                                            <button type="submit" className={styles['form-submit-btn']}>Submit</button> 
                                            {/* Changed to button and added type="submit" */}
                                        </div>
                                    </form>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <FaqSupport />
                </div>
            </div>
        </>
    )
}

export default Support;
