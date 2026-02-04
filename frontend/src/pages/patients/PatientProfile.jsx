import React, { useState } from 'react';
import { Card, Form, Row, Col, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PatientProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Header className="bg-white border-bottom p-4">
            <h4 className="card-title mb-0 fw-bold text-dark">Profile Settings</h4>
        </Card.Header>
        <Card.Body className="p-4">
            <Form>
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="change-avatar d-flex align-items-center mb-4">
                            <div className="profile-img me-3">
                                <Image src="/assets/images/specific/personal-care.jpg" rounded className="shadow-sm" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            </div>
                            <div className="upload-img">
                                <div className="change-photo-btn btn btn-primary px-4 py-2 mb-2">
                                    <span><i className="fa fa-upload me-2"></i> Upload Photo</span>
                                    <input type="file" className="upload" style={{ position: 'absolute', left: 0, top: 0, opacity: 0, cursor: 'pointer', width: '100%' }} />
                                </div>
                                <p className="text-muted small mb-0">Allowed JPG, GIF or PNG. Max size of 2MB</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">First Name</Form.Label>
                            <Form.Control type="text" defaultValue="Richard" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Last Name</Form.Label>
                            <Form.Control type="text" defaultValue="Wilson" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Date of Birth</Form.Label>
                            <Form.Control type="text" defaultValue="24-07-1983" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Blood Group</Form.Label>
                            <Form.Select className="py-2 bg-light border-0 shadow-none">
                                <option>A-</option>
                                <option>A+</option>
                                <option>B-</option>
                                <option>B+</option>
                                <option>AB-</option>
                                <option>AB+</option>
                                <option>O-</option>
                                <option>O+</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Email ID</Form.Label>
                            <Form.Control type="email" defaultValue="Umanghospitalgurugram@gmail.com" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Mobile</Form.Label>
                            <Form.Control type="text" defaultValue="+1 202-555-0125" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Address</Form.Label>
                            <Form.Control type="text" defaultValue="806 Twin Pines av" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">City</Form.Label>
                            <Form.Control type="text" defaultValue="New York" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">State</Form.Label>
                            <Form.Control type="text" defaultValue="New York" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Zip Code</Form.Label>
                            <Form.Control type="text" defaultValue="10001" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold small text-muted">Country</Form.Label>
                            <Form.Control type="text" defaultValue="United States" className="py-2 bg-light border-0 shadow-none" />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="submit-section">
                    <Button variant="primary" className="btn-primary px-5 py-3 fw-bold text-uppercase shadow">Save Changes</Button>
                </div>
            </Form>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default PatientProfile;
