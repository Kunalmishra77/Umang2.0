import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Row, Col, Badge, Button, Modal, Table, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTimes, FaCheck } from 'react-icons/fa';
import api from '../services/api';

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      // Use temp endpoint for development (no auth required)
      const response = await api.get('/appointments-temp');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      // Fallback to mock data if API fails
      setAppointments([
        {
          id: 1,
          doctor: 'Dr. Sarah Johnson',
          speciality: 'Cardiology',
          hospital: 'City General Hospital',
          date: '2026-01-30',
          time: '10:00 AM',
          status: 'upcoming',
          type: 'Consultation',
          notes: 'Regular checkup',
        },
        {
          id: 2,
          doctor: 'Dr. Michael Chen',
          speciality: 'Dermatology',
          hospital: 'Skin Care Clinic',
          date: '2026-01-25',
          time: '2:30 PM',
          status: 'completed',
          type: 'Follow-up',
          notes: 'Skin condition review',
        },
        {
          id: 3,
          doctor: 'Dr. Emily Davis',
          speciality: 'Neurology',
          hospital: 'Brain Health Center',
          date: '2026-01-20',
          time: '11:15 AM',
          status: 'cancelled',
          type: 'Consultation',
          notes: 'Headache evaluation',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      upcoming: { bg: 'primary', text: 'Upcoming' },
      completed: { bg: 'success', text: 'Completed' },
      cancelled: { bg: 'danger', text: 'Cancelled' },
      pending: { bg: 'warning', text: 'Pending' },
    };
    const config = variants[status] || { bg: 'secondary', text: status };
    return <Badge bg={config.bg}>{config.text}</Badge>;
  };

  const handleCancelAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };

  const confirmCancelAppointment = async () => {
    try {
      // API call to cancel appointment
      // await api.delete(`/appointments/${selectedAppointment.id}`);

      // Update local state
      setAppointments(appointments.map(apt =>
        apt.id === selectedAppointment.id
          ? { ...apt, status: 'cancelled' }
          : apt
      ));

      setShowCancelModal(false);
      setSelectedAppointment(null);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-4">My Appointments</h2>
        <p className="text-muted">Manage your upcoming and past appointments</p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-4">
        <div className="d-flex gap-2 flex-wrap">
          {['all', 'upcoming', 'completed', 'cancelled'].map(status => (
            <Button
              key={status}
              variant={filter === status ? 'primary' : 'outline-primary'}
              size="sm"
              onClick={() => setFilter(status)}
              className="text-capitalize"
            >
              {status === 'all' ? 'All Appointments' : status}
            </Button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <Row>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment, index) => (
            <Col lg={6} className="mb-4" key={appointment.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-1 fw-bold text-dark">{appointment.doctor}</h5>
                        <p className="mb-1 text-primary fw-medium">{appointment.speciality}</p>
                        <p className="mb-0 text-muted small">{appointment.hospital}</p>
                      </div>
                      {getStatusBadge(appointment.status)}
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <FaCalendarAlt className="text-muted me-2" size={14} />
                        <span className="text-muted small">{appointment.date} at {appointment.time}</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaMapMarkerAlt className="text-muted me-2" size={14} />
                        <span className="text-muted small">{appointment.hospital}</span>
                      </div>
                      <p className="mb-0 text-muted small">
                        <strong>Type:</strong> {appointment.type}
                      </p>
                      {appointment.notes && (
                        <p className="mb-0 text-muted small">
                          <strong>Notes:</strong> {appointment.notes}
                        </p>
                      )}
                    </div>

                    {appointment.status === 'upcoming' && (
                      <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm">
                          Reschedule
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleCancelAppointment(appointment)}
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="info" className="text-center">
              <FaCalendarAlt size={48} className="mb-3" />
              <h5>No appointments found</h5>
              <p className="mb-0">You don't have any {filter !== 'all' ? filter : ''} appointments.</p>
            </Alert>
          </Col>
        )}
      </Row>

      {/* Cancel Appointment Modal */}
      <Modal
        show={showCancelModal}
        onHide={() => setShowCancelModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cancel Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to cancel your appointment with <strong>{selectedAppointment?.doctor}</strong> on <strong>{selectedAppointment?.date}</strong> at <strong>{selectedAppointment?.time}</strong>?</p>
          <Alert variant="warning">
            <small>Cancellation policy: Appointments can be cancelled up to 24 hours in advance.</small>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
            Keep Appointment
          </Button>
          <Button variant="danger" onClick={confirmCancelAppointment}>
            <FaTimes className="me-2" />
            Cancel Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};

export default PatientAppointments;