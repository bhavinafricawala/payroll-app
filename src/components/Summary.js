import React from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Summary = ({ policyNumber, payrollData, paymentData }) => {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <h2>Submission Summary</h2>

      <Alert variant="success">
        <h5>✅ Payroll Submission Successful!</h5>
        <p>
          <strong>Policy Number:</strong> {policyNumber}
        </p>

        <h5>Payroll Details</h5>
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

        <h5>Payment Details</h5>
        <p>
          <strong>Routing Number:</strong> ****{paymentData.routing.slice(-4)}
        </p>
        <p>
          <strong>Account Number:</strong> ****{paymentData.account.slice(-4)}
        </p>
      </Alert>

      <Button variant="primary" onClick={() => navigate("/")}>
        Return to Home
      </Button>
    </Container>
  );
};

export default Summary;
