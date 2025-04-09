import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgetPassword from "./components/ForgetPassword";
import Invest from "./components/Invest";
import Account from "./components/Account";
import RechargePage from "./components/RechargePage";
import BankCardForm from "./components/BankCardForm"; 
import Footer from "./components/Footer";
import PrizeTask from "./components/PrizeTask";
import LoaderPage from "./components/LoaderPage"; 
import BillingList from "./components/BillingList";
import WithdrawalRecords from "./components/WithdrawalRecords";  
import PageNotFound from "./components/PageNotFound";
import RechargeRecords from "./components/RechargeRecords";
import CommisionRecords from "./components/CommisionRecords";
import UserSettings from "./components/UserSettings"; 
import ResetPaymentPasswordPage from './components/ResetPaymentPasswordPage';

function App() {
  const [value, setValue] = useState("invest");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forget-Password" element={<ForgetPassword />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/prize-task" element={<PrizeTask />} />
        <Route path="/account" element={<Account />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/bank-card" element={<BankCardForm />} />
        <Route path="/billing" element={<BillingList />} />
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/withdraw-record" element={<WithdrawalRecords />} /> 
        <Route path="/recharge-record" element={<RechargeRecords />} />
        <Route path="/commission-record" element={<CommisionRecords />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/reset-payment-password" element={<ResetPaymentPasswordPage />} />

      </Routes>
      <Footer value={value} onChange={setValue} />
    </BrowserRouter>
  );
}

export default App;
