import React, { useState } from 'react';
import styles from '../style/support.module.css';
import FaqSupport from './sections/FaqSupport';
import { Link } from 'react-router-dom';
import { postRequestWithToken } from '../api/Requests';

const Support = () => {
    const [feedbackVisible, setFeedbackVisible] = useState(true); // Set feedbackVisible to true by default
    const [complaintVisible, setComplaintVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('feedback'); // Set activeButton to 'feedback' by default

    const [isTypingOrderId, setIsTypingOrderId]          = useState(false); 
    const [isTypingComplaint, setIsTypingComplaint]      = useState(false); 
    const [isTypingFeedOrderId, setIsTypingFeedOrderId]  = useState(false)
    const [isTypingFeedback, setIsTypingFeedback]        = useState(false)


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

    const initialFeedbackData = {
        order_id : '',
        feedback : '',
      };
    
      const initialComplaintData = {
        order_id  : '',
        complaint : '',
      };
    
      const initialFeedbackErrors  = {};
      const initialComplaintErrors = {};
    
      const [feedbackData, setFeedbackData]       = useState(initialFeedbackData);
      const [complaintData, setComplaintData]     = useState(initialComplaintData);
      const [feedbackErrors, setFeedbackErrors]   = useState(initialFeedbackErrors);
      const [complaintErrors, setComplaintErrors] = useState(initialComplaintErrors);

    const validateFeedbackForm = () => {
      const errors = {};
      if (!feedbackData.order_id) {
          errors.order_id = 'Order ID is required';
      }
      if (!feedbackData.feedback) {
          errors.feedback = 'Feedback text is required';
      }
      setFeedbackErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const validateFeedbackOrderId = (order_id) => {
        const error = !order_id ? 'Order ID is required' : null;
        setFeedbackErrors((prevErrors) => ({ ...prevErrors, order_id: error }));
        setIsTypingFeedOrderId(false);
    };

    const validateFeedback = (feedback) => {
        const error = !feedback ? 'Feedback text is required' : null;
        setFeedbackErrors((prevErrors) => ({ ...prevErrors, feedback: error }));
        setIsTypingFeedback(false);
    };

    const validateComplaintOrderId = (order_id) => {
        const error = !order_id ? 'Order ID is required' : null;
        setComplaintErrors((prevErrors) => ({ ...prevErrors, order_id: error }));
        setIsTypingOrderId(false);
    };

    const validateComplaint = (complaint) => {
        const error = !complaint ? 'Complaint text is required' : null;
        setComplaintErrors((prevErrors) => ({ ...prevErrors, complaint: error }));
        setIsTypingComplaint(false);
    };

    const validateComplaintForm = () => {
        const errors = {};
        if (!complaintData.order_id) {
            errors.order_id = 'Order ID is required';
        }
        if (!complaintData.complaint) {
            errors.complaint = 'Complaint text is required';
        }
        setComplaintErrors(errors);
        return Object.keys(errors).length === 0;
    };

      const handleFeedback = (e) => {
        e.preventDefault();
        feedbackData.buyer_id     = 'BUY-jmn98sdanx';
        feedbackData.support_type = 'feedback';
    
        postRequestWithToken('buyer/order/submit-order-feedback', feedbackData, async (response) => {
          if (response.code === 200) {
            setFeedbackData(initialFeedbackData);
            setFeedbackErrors(initialFeedbackErrors);
            setIsTypingFeedOrderId(false);
            setIsTypingFeedback(false);
          } else {
            console.log(response.message);
          }
        });
      };
    
      const handleComplaint = (e) => {
        e.preventDefault();
        complaintData.buyer_id     = 'BUY-jmn98sdanx';
        complaintData.support_type = 'complaint';
    
        postRequestWithToken('buyer/order/submit-order-complaint', complaintData, async (response) => {
          if (response.code === 200) {
            setComplaintData(initialComplaintData);
            setComplaintErrors(initialComplaintErrors);
            setIsTypingOrderId(false);
            setIsTypingComplaint(false);
          } else {
            console.log(response.message);
          }
        });
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
                            {/* {
                                feedbackVisible && (
                                  
                                    <div className={styles[`form-container`]}>
                                    <div className={styles[`form-heading`]}>Feedback Form</div>
                                    <form onSubmit={(e) => {
                                            e.preventDefault();

                                            if (validateFeedbackForm()) {
                                                handleFeedback(e);
                                            }
                                        }}>
                                        <div className={styles[`form-container`]}>
                                            <input type="text" placeholder="Enter your order Id" className={styles[`form-input`]} 
                                             value={feedbackData.order_id}
                                             onChange={(e) => setFeedbackData({ ...feedbackData, order_id: e.target.value })}
                                             onInput={() => setIsTypingFeedOrderId(true)}
                                             onBlur={(e) => validateFeedbackOrderId(e.target.value)}
                                            />
                                            {feedbackErrors.order_id && !isTypingFeedOrderId && <div className="error-message" style={{color: 'red'}}>{feedbackErrors.order_id}</div>}
                                            <textarea placeholder="Enter your feedback" className={styles[`form-input`]} 
                                             value={feedbackData.feedback}
                                             onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                                             onInput={() => setIsTypingFeedback(true)}
                                             onBlur={(e) => validateFeedback(e.target.value)}
                                            />
                                            {feedbackErrors.feedback && !isTypingFeedback && <p className="error-message" style={{color: 'red'}}>{feedbackErrors.feedback}</p>}
                                            <input type="submit" value="Submit" className={styles[`form-submit-btn`]} />
                                        </div>
                                    </form>
                                   </div>
                                )
                            } */}
                            {
                                feedbackVisible && (
                                    <div className={styles['form-container']}>
                                        <div className={styles['form-heading']}>Feedback Form</div>
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            if (validateFeedbackForm()) {
                                                handleFeedback(e);
                                            }
                                        }}>
                                            <div className={styles['form-container']}>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your order Id"
                                                    className={styles['form-input']}
                                                    value={feedbackData.order_id}
                                                    onChange={(e) => setFeedbackData({ ...feedbackData, order_id: e.target.value })}
                                                    onInput={() => setIsTypingFeedOrderId(true)}
                                                    onBlur={(e) => validateFeedbackOrderId(e.target.value)}
                                                />
                                                {feedbackErrors.order_id && !isTypingFeedOrderId && <div className="error-message" style={{ color: 'red' }}>{feedbackErrors.order_id}</div>}
                                                <textarea
                                                    placeholder="Enter your feedback"
                                                    className={styles['form-input']}
                                                    value={feedbackData.feedback}
                                                    onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                                                    onInput={() => setIsTypingFeedback(true)}
                                                    onBlur={(e) => validateFeedback(e.target.value)}
                                                />
                                                {feedbackErrors.feedback && !isTypingFeedback && <p className="error-message" style={{ color: 'red' }}>{feedbackErrors.feedback}</p>}
                                                <input type="submit" value="Submit" className={styles['form-submit-btn']} />
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                            {
                                complaintVisible && (
                                    // <div className={styles[`form-container`]}>
                                    //     <div className={styles[`form-heading`]}>Complaint Form</div>
                                    //     <form>
                                    //         <div className={styles[`form-container`]}>
                                    //             <input type="text" placeholder="Enter your order Id" className={styles[`form-input`]} />
                                    //             <textarea placeholder="Enter your complaint" className={styles[`form-input`]} />
                                    //             <input type="submit" value="Submit" className={styles[`form-submit-btn`]} />
                                    //         </div>
                                    //     </form>
                                    // </div>
                                    <div className={styles[`form-container`]}>
                                        <div className={styles[`form-heading`]}>Complaint Form</div>
                                         <form onSubmit={(e) => {
                                                e.preventDefault();

                                                if (validateComplaintForm()) {
                                                    handleComplaint(e);
                                                }
                                            }}>
                                            <div className={styles[`form-container`]}>
                                                <input type="text" placeholder="Enter your order Id" className={styles[`form-input`]}
                                                value={complaintData.order_id}
                                                onChange={(e) => setComplaintData({ ...complaintData, order_id: e.target.value })}
                                                onInput={() => setIsTypingOrderId(true)}
                                                onBlur={(e) => validateComplaintOrderId(e.target.value)}
                                                />
                                              {complaintErrors.order_id && !isTypingOrderId && <div className="error-message" style={{color: 'red'}}>{complaintErrors.order_id}</div>}
                                                <textarea placeholder="Enter your complaint" className={styles[`form-input`]} 
                                                 value={complaintData.complaint}
                                                 onChange={(e) => setComplaintData({ ...complaintData, complaint: e.target.value })}
                                                 onInput={() => setIsTypingComplaint(true)}
                                                 onBlur={(e) => validateComplaint(e.target.value)}
                                                 />
                                               {complaintErrors.complaint && !isTypingComplaint && <div className="error-message" style={{color: 'red'}}>{complaintErrors.complaint}</div>}
                                                <input type="submit" value="Submit" className={styles[`form-submit-btn`]} />
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
