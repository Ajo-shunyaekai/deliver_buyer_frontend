import React, { useState } from 'react';
import styles from '../style/invoice.module.css';
import { Link } from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PendingInvoice from '../components/invoice/PendingInvoice';
import PaidInvoice from '../components/invoice/CompleteInvoice';
import OngoingInvoice from '../components/invoice/OngoingInvoice';

const Invoice = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const headings = ['Pending Invoices', 'Paid Invoices'];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className={styles[`invoice-container`]}>
                <div className={styles['complete-conatiner-head']}>Invoices</div>
                <div className={styles[`invoice-wrapper`]}>
                    <div className={styles[`invoice-wrapper-left`]}>
                        {headings.map((heading, index) => (
                            <div key={index} className={styles['invoice-left-wrapper']} onClick={() => handleItemClick(index)}>
                                <DescriptionOutlinedIcon className={styles['invoice-wrapper-left-icons']} />
                                <div className={`${styles['invoice-wrapper-left-text']} ${activeIndex === index ? styles['active'] : ''}`}>{heading}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles[`invoice-wrapper-right`]}>
                        {activeIndex === 0 && <PendingInvoice />}
                        {activeIndex === 1 && <PaidInvoice />}
                        {/* {activeIndex === 2 && } */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Invoice;
