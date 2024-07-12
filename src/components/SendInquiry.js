import React, { useState } from 'react';
import '../style/sendinruiry.css';
import MedicineOne from '../assest/enquiry/medicine__one.png';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Pagination from 'react-js-pagination';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const SendInquiry = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedState, setCheckedState] = useState({});
  const [products, setProducts] = useState([
    { id: 1, name: 'Paracetamol', strength: '500 Mg', description: 'Acetaminophen, also known as N-acetyl-para-aminophenol (APAP) or paracetamol in many countries, is a non-opioid analgesic and antipyretic agent utilized for treating pain and fever.', 
      supplier: 'Atom Pharma', unitPrice: 24, targetPrice: 20, deliveryTime: '12 Days', image: MedicineOne },
    { id: 2, name: 'Dolo', strength: '650 Mg', description: 'Acetaminophen, also known as N-acetyl-para-aminophenol (APAP) or paracetamol in many countries, is a non-opioid analgesic and antipyretic agent utilized for treating pain and fever.', 
      supplier: 'Atom Pharma', unitPrice: 24, targetPrice: 20, deliveryTime: '12 Days', image: MedicineOne },
    { id: 3, name: 'Migon', strength: '1000 Mg', description: 'Acetaminophen, also known as N-acetyl-para-aminophenol (APAP) or paracetamol in many countries, is a non-opioid analgesic and antipyretic agent utilized for treating pain and fever.', 
      supplier: 'Beta Pharma', unitPrice: 24, targetPrice: 20, deliveryTime: '12 Days', image: MedicineOne },
    { id: 4, name: 'Migon', strength: '1000 Mg', description: 'Acetaminophen, also known as N-acetyl-para-aminophenol (APAP) or paracetamol in many countries, is a non-opioid analgesic and antipyretic agent utilized for treating pain and fever.',
       supplier: 'Beta Pharma', unitPrice: 24, targetPrice: 20, deliveryTime: '12 Days', image: MedicineOne },
    // Add more products as needed
  ]);

  const handleCheckboxChange = (id) => {
    setCheckedState(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemoveItem = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const groupedProducts = groupBySupplier(products);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='send-enquiry-container'>
      <div className='send-enquiry-heading'>Send Enquiry</div>
      <div className='send-enquiry-main-section'>
        <div className='send-enquiry-inner-section'>
          <div className='send-enquiry-upper-section'>
            <div className='send-enquiry-upper-left-sec'>
              <span className='send-enquiry-upper-left-head'>Your Enquiries</span>
            </div>
            <div className='send-enquiry-upper-right-sec'>
              <div className='send-enquiry-upper-right-content'>
                <span className='send-enquiry-upper-right-total'>Total:</span>
                <span className='send-enquiry-upper-right-number'>{products.length} Enquiries</span>
              </div>
              <div className='send-enquiry-upper-right-button-sec'>
                <span className='send-enquiry-upper-right-button'>Send Enquiry</span>
              </div>
            </div>
          </div>
          <div className='send-enquiry-container-inner-container'>
            {Object.entries(groupedProducts).map(([supplier, products]) => (
              <div key={supplier} className='send-enquiry-supplier-list-container'>
                <div className='send-enquiry-supplier-list-upper-section'>
                  <div className='send-enquiry-supplier-list-heading'>Supplier Name:</div>
                  <div className='send-enquiry-supplier-list-text'>{supplier}</div>
                </div>
                {products.map(product => (
                  <div key={product.id} className='send-enquiry-inner-bottom-section-container'>
                    <div className='send-enquiry-inner-checkbox'>
                      <label className="custom-checkbox-label">
                        <input
                          type='checkbox'
                          className='custom-checkbox'
                          checked={checkedState[product.id] || false}
                          onChange={() => handleCheckboxChange(product.id)}
                        />
                        <span className="custom-checkbox-checkmark"></span>
                      </label>
                    </div>
                    <div className='send-enquiry-inner-image'>
                      <img src={product.image} alt='Img1' />
                    </div>
                    <div className='send-enquiry-inner-content'>
                      <div className='send-enquiry-inner-top-container'>
                        <div className='send-enquiry-inner-top-head-section'>
                          <span className='send-enquiry-inner-top-heading'>{product.name}</span>
                          <span className='send-enquiry-inner-top-strength'>({product.strength})</span>
                        </div>
                        <div className='send-enquiry-inner-top-text-section'>
                          <span className='send-enquiry-inner-top-supplier'>{product.description}</span>
                        </div>
                      </div>
                      <div className='send-enquiry-inner-bottom-section'>
                        <div className='send-enquiry-inner-bottom-container'>
                          <span className='send-enquiry-inner-bootom-head'>Unit Price:</span>
                          <span className='send-enquiry-inner-bootom-text'>{product.unitPrice} USD</span>
                        </div>
                        <div className='send-enquiry-inner-bottom-container'>
                          <span className='send-enquiry-inner-bootom-head'>Target Price:</span>
                          <span className='send-enquiry-inner-bootom-text'>{product.targetPrice} USD</span>
                        </div>
                        <div className='send-enquiry-inner-bottom-container'>
                          <span className='send-enquiry-inner-bootom-head'>Est. Delivery Time:</span>
                          <span className='send-enquiry-inner-bootom-text'>{product.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className='send-enquiry-remove-section'>
                      <HighlightOffOutlinedIcon
                        className='send-enquiry-clear-icon'
                        onClick={() => handleRemoveItem(product.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className='pagi-container'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={products.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              prevPageText={<KeyboardDoubleArrowLeftIcon style={{ fontSize: '15px' }} />}
              nextPageText={<KeyboardDoubleArrowRightIcon style={{ fontSize: '15px' }} />}
              hideFirstLastPages={true}
            />
            <div className='pagi-total'>
              Total Items: {products.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const groupBySupplier = (products) => {
  return products.reduce((acc, product) => {
    const supplier = product.supplier;
    if (!acc[supplier]) {
      acc[supplier] = [];
    }
    acc[supplier].push(product);
    return acc;
  }, {});
};

export default SendInquiry;
