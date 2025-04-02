import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Policy = ({ setPolicyNumber }) => {
  const [policy, setPolicy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPolicyNumber(policy);
    navigate("/payroll/?policy=" + policy);
  };

  return (
    <Container className="mt-4">
      <h2>Enter Policy Number</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="policyNumber">
          <Form.Label>Policy Number</Form.Label>
          <Form.Control
            type="text"
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Next
        </Button>
      </Form>
    </Container>
  );
};

export default Policy;
