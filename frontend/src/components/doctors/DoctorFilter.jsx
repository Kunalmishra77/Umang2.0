import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const DoctorFilter = () => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white border-bottom p-3">
        <h5 className="mb-0 fw-bold text-secondary">Search Filter</h5>
      </Card.Header>
      <Card.Body className="p-4">
        <div className="mb-4">
            <label className="form-label fw-medium text-secondary">Date</label>
            <Form.Control type="date" className="shadow-none" />
        </div>

        <div className="mb-4">
            <label className="form-label fw-medium text-secondary">Gender</label>
            <Form.Check type="checkbox" label="Male Doctor" id="gender-male" className="mb-2" />
            <Form.Check type="checkbox" label="Female Doctor" id="gender-female" />
        </div>

        <div className="mb-4">
            <label className="form-label fw-medium text-secondary">Select Specialist</label>
            <Form.Check type="checkbox" label="Urology" id="spec-urology" className="mb-2" />
            <Form.Check type="checkbox" label="Neurology" id="spec-neurology" className="mb-2" />
            <Form.Check type="checkbox" label="Dentist" id="spec-dentist" className="mb-2" />
            <Form.Check type="checkbox" label="Orthopedic" id="spec-ortho" className="mb-2" />
            <Form.Check type="checkbox" label="Cardiologist" id="spec-cardio" />
        </div>

        <div className="d-grid">
            <Button variant="primary" className="fw-bold py-2 btn-primary">
                <FaSearch className="me-2" /> Search
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DoctorFilter;
