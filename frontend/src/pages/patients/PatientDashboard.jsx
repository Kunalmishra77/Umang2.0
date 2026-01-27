import React from 'react';
import { Card, Table, Tabs, Tab, Button, Image, Badge } from 'react-bootstrap';
import { FaEye, FaPrint, FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PatientDashboard = () => {
  const appointments = [
    { id: 1, doctor: 'Dr. Ruby Perrin', date: '14 Nov 2026', time: '10:00 AM', amount: '$160', status: 'Confirm', image: 'https://doccure.dreamstechnologies.com/react/template/80517726715f3ecda881.jpg' },
    { id: 2, doctor: 'Dr. Darren Elder', date: '12 Nov 2026', time: '01:00 PM', amount: '$150', status: 'Pending', image: 'https://doccure.dreamstechnologies.com/react/template/8963283f58e0a139049a.jpg' },
    { id: 3, doctor: 'Dr. Deborah Angel', date: '11 Nov 2026', time: '04:00 PM', amount: '$100', status: 'Cancelled', image: 'https://doccure.dreamstechnologies.com/react/template/8e5470438b4d8e578f14.jpg' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Body className="p-0">
          <Tabs defaultActiveKey="appointments" id="patient-dashboard-tabs" className="custom-tabs border-bottom px-4 pt-3">
            <Tab eventKey="appointments" title="Appointments" className="p-4">
              <div className="table-responsive">
                <Table className="table-center mb-0 custom-table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 py-3">Doctor</th>
                      <th className="border-0 py-3">Appt Date</th>
                      <th className="border-0 py-3">Booking Date</th>
                      <th className="border-0 py-3">Amount</th>
                      <th className="border-0 py-3">Status</th>
                      <th className="border-0 py-3 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt) => (
                      <tr key={appt.id}>
                        <td className="py-3">
                          <div className="d-flex align-items-center">
                            <Image src={appt.image} roundedCircle className="me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                            <div>
                                <h6 className="mb-0 fw-bold">{appt.doctor}</h6>
                                <small className="text-muted">Dental</small>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 small">{appt.date} <span className="d-block text-primary">{appt.time}</span></td>
                        <td className="py-3 small">10 Nov 2026</td>
                        <td className="py-3 small">{appt.amount}</td>
                        <td className="py-3">
                          <Badge bg={appt.status === 'Confirm' ? 'success-light' : appt.status === 'Pending' ? 'warning-light' : 'danger-light'} 
                                 className="rounded-pill px-3 py-2 fw-medium text-capitalize">
                            {appt.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-end">
                          <div className="table-action">
                            <Button variant="outline-info" size="sm" className="me-2 rounded-circle p-2 d-inline-flex shadow-none border-0 bg-info-light">
                                <FaPrint size={12} />
                            </Button>
                            <Button variant="outline-primary" size="sm" className="rounded-circle p-2 d-inline-flex shadow-none border-0 bg-primary-light">
                                <FaEye size={12} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab eventKey="prescriptions" title="Prescriptions" className="p-4">
                <div className="text-center py-5 text-muted">No prescriptions found.</div>
            </Tab>
            <Tab eventKey="medical-records" title="Medical Records" className="p-4">
                <div className="text-center py-5 text-muted">No records found.</div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default PatientDashboard;
