import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Dashboard from './components/Dashboard';
import Buy from './components/Buy'
import Order from './components/Order.js';
import MySupplier from './components/MySupplier.js';
import Invoice from './components/Invoice.js';
import Support from './components/Support.js';
import PopupModal from './components/orders/PopupModal.js';
import ActiveOrder from './components/orders/ActiveOrder.js';
import CompleteOrder from './components/orders/CompleteOrder.js';
import DeletedOrder from './components/orders/DeletedOrder.js';
import OrderCancel from './components/orders/OrderCancel.js';
import LineChart from './components/chart/LineChart';
import ProgressBar from './components/chart/ProgressBar';
import OrderDetails from './components/OrderDetails.js';
import PendingDetails from './components/PendingDetails.js';
import ProductDetails from './components/ProductDetails.js'
import OrderDetailsCircularBar from './components/chart/OrderDetailsCircularBar.js';
import SupplierDetails from './components/SupplierDetails.js';
import CompletedOrders from './components/dashboard/CompletedOrders.js';
import OngoingOrders from './components/dashboard/OngoingOrders.js';
import PendingOrders from './components/dashboard/PendingOrders.js';
import SupplyOrderList from './components/orders/SupplyOrderList.js';
import CompleteInvoice from './components/invoice/CompleteInvoice.js';
import OngoingInvoice from './components/invoice/OngoingInvoice.js';
import PendingInvoice from './components/invoice/PendingInvoice.js';
import PayModal from './components/pay/PayModal'
import UploadDocument from './components/pay/UploadDocument'
import InvoiceDesign from './components/pay/invoiceDesign.js';
import CustomModal from './components/pay/CustomModal.js';
import InvoiceCardDesign from './components/pay/InvoiceCardDesign.js'
import ProductDetailsCard from './components/ProductDetailsCard.js';


function App() {

useEffect(() => {
  sessionStorage.setItem('buyer_name','Pranav')
  sessionStorage.setItem('buyer_id','BUY-jmn98sdanx')
  sessionStorage.setItem('buyer_email','buyer1@gmail.org')
  sessionStorage.setItem('buyer_mobile','8129197512')
  sessionStorage.setItem('buyer_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEFwciAxNSAyMDI0IDEyOjQ5OjM0IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImJ1eWVySWQiOiJCVVktam1uOThzZGFueCIsImlhdCI6MTcxMzE2NTU3NH0.HvJHPx6WA09qcMedTVVeTpuqlsXOSfTDEjWlU7v1kJQ')

},[])

  return (
    <>
      <div className='App'>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/order" element={<Order />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/my-supplier" element={<MySupplier />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/support" element={<Support />} />
              <Route path="/active-order" element={<ActiveOrder />} />
              <Route path="/complete-order" element={<CompleteOrder />} />
              <Route path="/deleted-order" element={<DeletedOrder />} />
              <Route path="/popup-Modal" element={<PopupModal />} />
              <Route path="/ordercancel" element={<OrderCancel />} />
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/progress-bar" element={<ProgressBar />} />
              <Route path="/order-details/:orderId" element={<OrderDetails />} />
              <Route path="/pending-details/:orderId" element={<PendingDetails />} />
              <Route path="/medicine-details/:medicineId" element={<ProductDetails />} />
              <Route path="/supplier-details/:supplierId" element={<SupplierDetails />} />
              <Route path="/completed-orders" element={<CompletedOrders />} />
              <Route path="/ongoing-orders" element={<OngoingOrders />} />
              <Route path="/supply-order-list" element={<SupplyOrderList />} />
              <Route path="/pending-orders" element={<PendingOrders />} />
              <Route path="/order-details-circular-bar" element={<OrderDetailsCircularBar />} />
              <Route path="/complete-invoice" element={<CompleteInvoice />} />
              <Route path="/ongoing-invoice" element={<OngoingInvoice />} />
              <Route path="/pending-invoice" element={<PendingInvoice />} />
              <Route path="/upload-document" element={<UploadDocument />} />
              <Route path="/invoice-design/:orderId" element={<InvoiceDesign />} />
              <Route path="/custom-modal" element={<CustomModal />} />
              <Route path="/invoice-card-design" element={<InvoiceCardDesign />} />
              <Route path="/product-details-card" element={<ProductDetailsCard />} />
            </Routes>
          </Sidebar>
        </Router>
      </div>
    </>
  );
}

export default App;
