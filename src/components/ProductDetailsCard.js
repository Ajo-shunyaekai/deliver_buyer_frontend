import React from 'react'
import productDetails from '../style/productDetails.css';
import Tablet from '../assest/tablet.png'
import { Link } from 'react-router-dom';

const ProductDetailsCard = ({similarMedicines, onMedicineClick}) => {

    // const handleMedicineClick = (medicineId) =>{
    //     onMedicineClick(medicineId)
    // }
    return (
        <>
            <div className='product-details-card-section-heading'>Similar products</div>
            {
                similarMedicines?.map((medicine,i) => (
                    <div className='product-details-card-section' key={i}>
                    <div className='product-details-card-img-container'>
                        <div className='product-details-card-img-cont-sec'>
                            <img src={`${process.env.REACT_APP_SERVER_URL}uploads/product_files/${medicine.medicine_image[0]}`}  />
                            {/* <img  src={`${process.env.REACT_APP_SERVER_URL}uploads/product_files/${firstImage}`}  alt="Medicine" />  */}
                        </div>
                        <div className='product-details-card-image-button-cont' onClick={() => onMedicineClick(medicine.medicine_id)}>
                            View Details
                        </div>
                    </div>
                    <div className='product-details-card-right-container'>
                        <div className='product-details-card-upper-section'>
                            <div className='product-details-card-medicine-head'>{medicine.medicine_name}</div>
                            <div className='product-details-card-medicine-text'>{medicine.drugs_name}</div>
                        </div>
                        <div className='product-details-card-text-section'>
                            <div className='product-details-card-text-head'>Country of Origin :</div>
                            <div className='product-details-card-test-text'>{medicine.country_of_origin}</div>
                        </div>
                        <div className='product-details-card-text-section'>
                            <div className='product-details-card-text-head'>Stocked In :</div>
                            <div className='product-details-card-test-text'>{medicine.quantity}</div>
                        </div>
                        <div className='product-details-card-text-section'>
                            <div className='product-details-card-text-head'>Dossier Type :</div>
                            <div className='product-details-card-test-text'>{medicine.dossier_type}</div>
                        </div>
                        <div className='product-details-card-text-section'>
                            <div className='product-details-card-text-head'>Dossier Status :</div>
                            <div className='product-details-card-test-text'>{medicine.dossier_status}</div>
                        </div>
                        <div className='product-details-card-text-section'>
                            <div className='product-details-card-text-head'>GMP Approvals :</div>
                            <div className='product-details-card-test-text'>{medicine.gmp_approvals}</div>
                        </div>
                        {/* <Link to={`/medicine-details/${medicine.medicine_id}`}> */}
                        {/* <div className='product-details-inner-card-button-sec' >
                            <span className='product-details-inner-view-card-details'>View Details</span>
                        </div> */}
                        {/* </Link> */}
                    </div>
                </div>
                ))
            }
           

            {/* <div className='product-details-card-section'>
                <div className='product-details-card-img-container'>
                    <div className='product-details-card-img-cont-sec'>
                        <img src={Tablet} />
                    </div>
                    <div className='product-details-card-image-button-cont'>
                        View Details
                    </div>
                </div>
                <div className='product-details-card-right-container'>
                    <div className='product-details-card-upper-section'>
                        <div className='product-details-card-medicine-head'>Dollo(Paracetamol)</div>
                        <div className='product-details-card-medicine-text'>Drugs Name</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Country of Origin :</div>
                        <div className='product-details-card-test-text'>Dubai UAE</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Stocked In :</div>
                        <div className='product-details-card-test-text'>450</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Type :</div>
                        <div className='product-details-card-test-text'>EU CTU</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Status :</div>
                        <div className='product-details-card-test-text'>Ready to file</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>GMP Approvals :</div>
                        <div className='product-details-card-test-text'>GU EMP</div>
                    </div>
                    <div className='product-details-inner-card-button-sec'>
                        <span className='product-details-inner-view-card-details'>View Details</span>
                    </div>
                </div>
            </div> 
            <div className='product-details-card-section'>
                <div className='product-details-card-img-container'>
                    <div className='product-details-card-img-cont-sec'>
                        <img src={Tablet} />
                    </div>
                    <div className='product-details-card-image-button-cont'>
                        View Details
                    </div>
                </div>
                <div className='product-details-card-right-container'>
                    <div className='product-details-card-upper-section'>
                        <div className='product-details-card-medicine-head'>Dollo(Paracetamol)</div>
                        <div className='product-details-card-medicine-text'>Drugs Name</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Country of Origin :</div>
                        <div className='product-details-card-test-text'>Dubai UAE</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Stocked In :</div>
                        <div className='product-details-card-test-text'>450</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Type :</div>
                        <div className='product-details-card-test-text'>EU CTU</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Status :</div>
                        <div className='product-details-card-test-text'>Ready to file</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>GMP Approvals :</div>
                        <div className='product-details-card-test-text'>GU EMP</div>
                    </div>
                    <div className='product-details-inner-card-button-sec'>
                        <span className='product-details-inner-view-card-details'>View Details</span>
                    </div>
                </div>
            </div> 
            <div className='product-details-card-section'>
                <div className='product-details-card-img-container'>
                    <div className='product-details-card-img-cont-sec'>
                        <img src={Tablet} />
                    </div>
                    <div className='product-details-card-image-button-cont'>
                        View Details
                    </div>
                </div>
                <div className='product-details-card-right-container'>
                    <div className='product-details-card-upper-section'>
                        <div className='product-details-card-medicine-head'>Dollo(Paracetamol)</div>
                        <div className='product-details-card-medicine-text'>Drugs Name</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Country of Origin :</div>
                        <div className='product-details-card-test-text'>Dubai UAE</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Stocked In :</div>
                        <div className='product-details-card-test-text'>450</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Type :</div>
                        <div className='product-details-card-test-text'>EU CTU</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Status :</div>
                        <div className='product-details-card-test-text'>Ready to file</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>GMP Approvals :</div>
                        <div className='product-details-card-test-text'>GU EMP</div>
                    </div>
                    <div className='product-details-inner-card-button-sec'>
                        <span className='product-details-inner-view-card-details'>View Details</span>
                    </div>
                </div>
            </div> 
            <div className='product-details-card-section'>
                <div className='product-details-card-img-container'>
                    <div className='product-details-card-img-cont-sec'>
                        <img src={Tablet} />
                    </div>
                    <div className='product-details-card-image-button-cont'>
                        View Details
                    </div>
                </div>
                <div className='product-details-card-right-container'>
                    <div className='product-details-card-upper-section'>
                        <div className='product-details-card-medicine-head'>Dollo(Paracetamol)</div>
                        <div className='product-details-card-medicine-text'>Drugs Name</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Country of Origin :</div>
                        <div className='product-details-card-test-text'>Dubai UAE</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Stocked In :</div>
                        <div className='product-details-card-test-text'>450</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Type :</div>
                        <div className='product-details-card-test-text'>EU CTU</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Status :</div>
                        <div className='product-details-card-test-text'>Ready to file</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>GMP Approvals :</div>
                        <div className='product-details-card-test-text'>GU EMP</div>
                    </div>
                    <div className='product-details-inner-card-button-sec'>
                        <span className='product-details-inner-view-card-details'>View Details</span>
                    </div>
                </div>
            </div> 
            <div className='product-details-card-section'>
                <div className='product-details-card-img-container'>
                    <div className='product-details-card-img-cont-sec'>
                        <img src={Tablet} />
                    </div>
                    <div className='product-details-card-image-button-cont'>
                        View Details
                    </div>
                </div>
                <div className='product-details-card-right-container'>
                    <div className='product-details-card-upper-section'>
                        <div className='product-details-card-medicine-head'>Dollo(Paracetamol)</div>
                        <div className='product-details-card-medicine-text'>Drugs Name</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Country of Origin :</div>
                        <div className='product-details-card-test-text'>Dubai UAE</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Stocked In :</div>
                        <div className='product-details-card-test-text'>450</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Type :</div>
                        <div className='product-details-card-test-text'>EU CTU</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>Dossier Status :</div>
                        <div className='product-details-card-test-text'>Ready to file</div>
                    </div>
                    <div className='product-details-card-text-section'>
                        <div className='product-details-card-text-head'>GMP Approvals :</div>
                        <div className='product-details-card-test-text'>GU EMP</div>
                    </div>
                    <div className='product-details-inner-card-button-sec'>
                        <span className='product-details-inner-view-card-details'>View Details</span>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ProductDetailsCard