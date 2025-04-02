import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Payroll = ({ setPayrollData }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const policyNumber = queryParams.get("policy");
  const [payroll, setPayroll] = useState({ california: 0, arizona: 0 });
  const [premium, setPremium] = useState({
    california: 0,
    arizona: 0,
    total: 0,
  });
  const navigate = useNavigate();

  const calculatePremium = (payrollData) => {
    const caPremium = (payrollData.california * 2.5) / 100; // 2.5% for CA
    const azPremium = (payrollData.arizona / 100) * 1.7; // $1.70 per $100 for AZ
    const totalPremium = caPremium + azPremium;

    setPremium({
      california: caPremium,
      arizona: azPremium,
      total: totalPremium,
    });
  };

  const handlePayrollChange = (e) => {
    const { name, value } = e.target;
    const updatedPayroll = { ...payroll, [name]: Number(value) };
    setPayroll(updatedPayroll);
    calculatePremium(updatedPayroll);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayrollData({ ...payroll, premium });
    navigate("/payment");
  };

  return (
    <Container className="mt-4">
      <h2>Enter Payroll Details: {policyNumber}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            California Payroll<i>(Rate: 2.5%)</i>
          </Form.Label>
          <Form.Control
            type="money"
            name="california"
            value={payroll.california}
            onChange={handlePayrollChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Arizona Payroll<i>(Rate: 1.7%)</i>
          </Form.Label>
          <Form.Control
            type="money"
            name="arizona"
            value={payroll.arizona}
            onChange={handlePayrollChange}
            required
          />
        </Form.Group>

        <Alert variant="info" className="mt-3">
          <strong>Premium Calculation:</strong>
          <br />
          California: ${premium.california.toFixed(2)} <br />
          Arizona: ${premium.arizona.toFixed(2)} <br />
          <strong>Total Premium: ${premium.total.toFixed(2)}</strong>
        </Alert>

        <Button variant="primary" type="submit" className="mt-3">
          Next
        </Button>
      </Form>
    </Container>
  );
};

export default Payroll;
