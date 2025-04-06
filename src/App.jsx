import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgetPassword from "./components/ForgetPassword";
import Invest from "./components/Invest";
import Account from "./components/Account";
import RechargePage from "./components/RechargePage";
import BankCardForm from "./components/BankCardForm"; // ✅ New import
import List from "./components/List"; // ✅ Import List component 
import Footer from "./components/Footer";
import PrizeTask from "./components/PrizeTask";
// import NewAccount from "./components/NewAccountPage";
import LoaderPage from "./components/LoaderPage"; 

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
        {/* <Route path="/new-account" element={<NewAccount />} /> */}
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/bank-card" element={<BankCardForm />} />
        <Route path="/list/:type" element={<List />} /> {/* ✅ Dynamic route */}
        <Route path="/loader" element={<LoaderPage />} />
      </Routes>
      <Footer value={value} onChange={setValue} />
    </BrowserRouter>
  );
}

export default App;
