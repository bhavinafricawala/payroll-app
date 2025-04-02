import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import Policy from "./components/Policy";
import Payroll from "./components/Payroll";
import Payment from "./components/Payment";
import Summary from "./components/Summary";

const App = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [payrollData, setPayrollData] = useState({
    california: 0,
    arizona: 0,
    premium: { california: 0, arizona: 0, total: 0 },
  });
  const [paymentData, setPaymentData] = useState({ routing: "", account: "" });

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Policy setPolicyNumber={setPolicyNumber} />}
        />
        <Route
          path="/payroll"
          element={<Payroll setPayrollData={setPayrollData} />}
        />
        <Route
          path="/payment"
          element={
            <Payment
              policyNumber={policyNumber}
              payrollData={payrollData}
              setPaymentData={setPaymentData}
            />
          }
        />
        <Route
          path="/summary"
          element={
            <Summary
              policyNumber={policyNumber}
              payrollData={payrollData}
              paymentData={paymentData}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
