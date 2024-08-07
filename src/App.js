import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import SignUp from './signup/SignUp.js';
import SupplierCompleted from './components/supplier/SuplierCompleted.js'
import SupplierActive from './components/supplier/SupplierActive.js'
import SupplierPending from './components/supplier/SupplierPending.js'
import ImageUploader from './signup/ImageUploader.js';
import SuccessModal from './signup/SuccessModal.js';
import Login from './signup/Login.js';
import Buy2ndMarket from './components/sections/Buy2ndMarket.js'
import MarketProductDetails from './components/MarketProductDetails.js';
import SupplyProductList from './components/orders/SupplyProductList.js'
import SupplierPurchaseInvoice from './components/pay/SupplierPurchaseInvoice.js'
import SendInquiry from './components/SendInquiry';
import SearchProductDetails from './components/SearchProductDetails.js';
import Subscription from './components/Subscription.js';
import TableMembership from './components/membership/TableMembership.js';
import SubscriptionMembership from './components/SubscriptionMembership.js';
import SearchMarketProductDetails from './components/SearchMarketProductDetails.js';


function IncludeSidebar() {
  return (
    <div>
       <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/order" element={<Order />} /> */}
              <Route path="/order/active" element={<Order />} />
              <Route path="/order/completed" element={<Order />} />
              <Route path="/order/pending" element={<Order />} />
              <Route path="/order" element={<Navigate to="/order/active" />} />
              {/* <Route path="/buy" element={<Buy />} /> */}
              <Route path="/buy/seller" element={<Buy />} />
              <Route path="/buy/product" element={<Buy />} />
              <Route path="/buy/market" element={<Buy />} />
              <Route path="/buy" element={<Navigate to="/buy/seller" />} />
              <Route path="/my-supplier" element={<MySupplier />} />
              {/* <Route path="/invoice" element={<Invoice />} /> */}
              <Route path="/invoice/pending" element={<Invoice />} />
              <Route path="/invoice/paid" element={<Invoice />} />
              <Route path="/invoice" element={<Navigate to="/invoice/pending" />} />
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
              {/* <Route path="/supplier-details/:supplierId" element={<SupplierDetails />} /> */}
              <Route path="/supplier-details/products/:supplierId" element={<SupplierDetails />} />
              <Route path="/supplier-details/orders/:supplierId" element={<SupplierDetails />} />
              <Route path="/supplier-details/:supplierId" element={<SupplierDetails />}  />
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
              <Route path="/supplier-completed/:supplierId" element={<SupplierCompleted />} />
              <Route path="/supplier-active/:supplierId" element={<SupplierActive />} />
              <Route path="/supplier-pending/:supplierId" element={<SupplierPending />} />
              <Route path="/supply-product-list" element={<SupplyProductList />} />
              <Route path="/buy-2nd-market" element={<Buy2ndMarket />} />
              <Route path="/market-product-details/:medicineId" element={<MarketProductDetails />} />  
              <Route path="/supplier-purchase-invoice" element={<SupplierPurchaseInvoice />} />  
              <Route path="/send-inquiry" element={<SendInquiry/>} />
              <Route path="/search-product-details/:medicineId" element={<SearchProductDetails/>} />
              <Route path="/subscription" element={<Subscription/>} />
              <Route path="/subscription-membership" element={<SubscriptionMembership/>} />
              <Route path="/table-membership" element={<TableMembership/>} />
              <Route path="/search-market-product-details/:medicineId" element={<SearchMarketProductDetails/>} /> 
              {/* <Route path="/search-market-details-card" element={<SearchMarketDetailsCard/>} />  */}
            </Routes>
       </Sidebar>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
          <Route path='/*' element={<IncludeSidebar />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Sidebar>
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
          </Sidebar> */}
        </Router>
      </div>
    </>
  );
}

export default App;
