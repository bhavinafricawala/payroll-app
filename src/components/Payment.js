import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Payment = ({ policyNumber, payrollData, setPaymentData }) => {
  const [payment, setPayment] = useState({ routing: "", account: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentData(payment);
    navigate("/summary");
  };

  return (
    <Container className="mt-4">
      <h2>Enter Payment Details</h2>

      <Alert variant="success">
        <h5>Payroll Summary</h5>
        <p>
          <strong>Policy Number:</strong> {policyNumber}
        </p>
        <p>
          <strong>California Payroll:</strong> ${payrollData.california}
        </p>
        <p>
          <strong>Arizona Payroll:</strong> ${payrollData.arizona}
        </p>
        <h5>Premium Charges</h5>
        <p>California Premium: ${payrollData.premium.california.toFixed(2)}</p>
        <p>Arizona Premium: ${payrollData.premium.arizona.toFixed(2)}</p>
        <strong>Total Premium: ${payrollData.premium.total.toFixed(2)}</strong>
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Routing Number</Form.Label>
          <Form.Control
            type="text"
            value={payment.routing}
            onChange={(e) =>
              setPayment({ ...payment, routing: e.target.value })
            }
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            value={payment.account}
            onChange={(e) =>
              setPayment({ ...payment, account: e.target.value })
            }
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">
          Submit Payment
        </Button>
      </Form>
    </Container>
  );
};

export default Payment;
