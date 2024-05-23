import React from 'react'
const AssignDriver = ({orderItems}) => {
    return (
        <div className="card-body">
            <div>
                <div className="table-assign-driver-heading">Product List</div>
            </div>
            <table className="table">
                <tbody>
                {
                            orderItems?.map((item,i) => {
                                return (
                    <tr>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                {/* <span className="table-g-driver-name">Product ID</span> */}
                                <span className="table-g-not-names">{item.product_id}</span>
                            </div>
                        </td>
                        <td className='tables-td-cont' >
                            <div className="table-second-container">
                                <span className="table-g-section">{item.product_name.charAt(0)}</span>
                                <div className="table-g-section-content">
                                    <span className="table-g-driver-name">Product Name</span>
                                    <span className="table-g-not-name">{item.product_name} ({item.drugs_name}) </span>
                                </div>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Quantity</span>
                                <span className="table-g-not-name">{item.quantity}</span>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Price</span>
                                <span className="table-g-not-name">{item.price}</span>
                            </div>
                        </td>
                        {/* <td>
                            <div className='table-action-icon'>
                                <VisibilityIcon />
                            </div>
                        </td> */}
                        <td>

                        </td>
                    </tr>
        )
    })
}

                    {/* <tr>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                             
                                <span className="table-g-not-names">PR1234567</span>
                            </div>
                        </td>
                        <td className='tables-td-cont' >
                            <div className="table-second-container">
                                <span className="table-g-section">G</span>
                                <div className="table-g-section-content">
                                    <span className="table-g-driver-name">Product Name</span>
                                    <span className="table-g-not-name">Paracetamol (acetaminophen) </span>
                                </div>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Quantity</span>
                                <span className="table-g-not-name">200</span>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Price</span>
                                <span className="table-g-not-name">500 AED</span>
                            </div>
                        </td>
                      
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                         
                                <span className="table-g-not-names">PR1234567</span>
                            </div>
                        </td>
                        <td className='tables-td-cont' >
                            <div className="table-second-container">
                                <span className="table-g-section">G</span>
                                <div className="table-g-section-content">
                                    <span className="table-g-driver-name">Product Name</span>
                                    <span className="table-g-not-name">Paracetamol (acetaminophen) </span>
                                </div>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Quantity</span>
                                <span className="table-g-not-name">200</span>
                            </div>
                        </td>
                        <td className='tables-td'>
                            <div className="table-g-section-content">
                                <span className="table-g-driver-name">Price</span>
                                <span className="table-g-not-name">500 AED</span>
                            </div>
                        </td>
                        
                        <td>

                        </td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}

export default AssignDriver