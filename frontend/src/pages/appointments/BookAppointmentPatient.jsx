import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Row, Col, Form, Button, ProgressBar, Badge, Alert, Image } from 'react-bootstrap';
import { FaUserMd, FaCalendarAlt, FaClock, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import api from '../../services/api';
import { doctors as allDoctors } from '../../utils/doctorsData';

const BookAppointmentPatient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    speciality: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    notes: '',
  });
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(false);
  const [message, setMessage] = useState(null);

  const totalSteps = 4;

  useEffect(() => {
    fetchSpecialities();
  }, []);

  useEffect(() => {
    if (formData.speciality) {
      fetchDoctorsBySpeciality(formData.speciality);
    }
  }, [formData.speciality]);

  useEffect(() => {
    if (formData.doctor && formData.date) {
      fetchAvailableSlots(formData.doctor, formData.date);
    }
  }, [formData.doctor, formData.date]);

  const fetchSpecialities = async () => {
    try {
      // Updated to match available doctor data keys
      const mockSpecialities = [
        { id: 'cardiac', name: 'Cardiology' },
        { id: 'neuro', name: 'Neurology' },
        { id: 'ortho', name: 'Orthopedics' },
        { id: 'surgery', name: 'General Surgery' },
        { id: 'ent', name: 'E.N.T' },
        { id: 'general-medicine', name: 'General Medicine' },
      ];
      setSpecialities(mockSpecialities);
    } catch (error) {
      console.error('Error fetching specialities:', error);
    }
  };

  const fetchDoctorsBySpeciality = async (specialityId) => {
    setLoading(true);
    try {
      // Filter doctors from the real data
      const filteredDoctors = allDoctors.filter(doc => doc.specialtyId === specialityId);
      setDoctors(filteredDoctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableSlots = async (doctorId, date) => {
    try {
      // Mock data - replace with API call
      const mockSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM'
      ];
      setAvailableSlots(mockSlots);
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setBooking(true);
    try {
      // Use temp endpoint for development (no auth required)
      const response = await api.post('/appointments', formData);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setMessage({ type: 'success', text: 'Appointment booked successfully!' });
      setTimeout(() => {
        // Reset form and redirect
        setFormData({
          speciality: '',
          doctor: '',
          date: '',
          time: '',
          reason: '',
          notes: '',
        });
        setCurrentStep(1);
        setMessage(null);
      }, 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to book appointment. Please try again.' });
    } finally {
      setBooking(false);
    }
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return formData.speciality;
      case 2: return formData.doctor;
      case 3: return formData.date && formData.time;
      case 4: return formData.reason;
      default: return false;
    }
  };

  const stepVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h4 className="mb-4">Select Speciality</h4>
            <Row>
              {specialities.map((speciality) => (
                <Col md={6} lg={4} className="mb-3" key={speciality.id}>
                  <Card
                    className={`cursor-pointer border-2 transition-all ${
                      formData.speciality === speciality.id.toString()
                        ? 'border-primary bg-primary bg-opacity-10'
                        : 'border-light hover-border-primary'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, speciality: speciality.id.toString() }))}
                  >
                    <Card.Body className="text-center p-4">
                      <FaUserMd className="text-primary mb-3" size={32} />
                      <h6 className="mb-0 fw-bold">{speciality.name}</h6>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h4 className="mb-4">Choose Doctor</h4>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading doctors...</span>
                </div>
              </div>
            ) : (
              <Row>
                {doctors.map((doctor) => (
                  <Col md={6} className="mb-3" key={doctor.id}>
                    <Card
                      className={`cursor-pointer border-2 transition-all ${
                        formData.doctor === doctor.id.toString()
                          ? 'border-primary bg-primary bg-opacity-10'
                          : 'border-light hover-border-primary'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, doctor: doctor.id.toString() }))}
                    >
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center">
                          <Image
                            src={doctor.image}
                            roundedCircle
                            width={60}
                            height={60}
                            className="me-3"
                          />
                          <div className="flex-grow-1">
                            <h6 className="mb-1 fw-bold">{doctor.name}</h6>
                            <p className="mb-1 text-muted small">{doctor.exp} experience</p>
                            <div className="d-flex align-items-center">
                              <Badge bg="warning" text="dark" className="me-2">
                                ★ {doctor.rating}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h4 className="mb-4">Select Date & Time</h4>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className="fw-medium">
                    <FaCalendarAlt className="me-2" />
                    Preferred Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="form-control-lg"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className="fw-medium">
                    <FaClock className="me-2" />
                    Available Time Slots
                  </Form.Label>
                  <div className="d-flex flex-wrap gap-2">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant={formData.time === slot ? 'primary' : 'outline-primary'}
                        size="sm"
                        onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                        className="px-3 py-2"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h4 className="mb-4">Appointment Details</h4>
            <Card className="border-0 bg-light mb-4">
              <Card.Body className="p-4">
                <h6 className="fw-bold mb-3">Appointment Summary</h6>
                <Row>
                  <Col md={6}>
                    <p className="mb-2"><strong>Speciality:</strong> {specialities.find(s => s.id.toString() === formData.speciality)?.name}</p>
                    <p className="mb-2"><strong>Doctor:</strong> {doctors.find(d => d.id.toString() === formData.doctor)?.name}</p>
                  </Col>
                  <Col md={6}>
                    <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
                    <p className="mb-2"><strong>Time:</strong> {formData.time}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Reason for Visit *</Form.Label>
              <Form.Control
                as="textarea"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={3}
                placeholder="Please describe your symptoms or reason for the appointment"
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-medium">Additional Notes (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={2}
                placeholder="Any additional information you'd like to share"
                className="form-control-lg"
              />
            </Form.Group>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-4">Book Appointment</h2>
        <p className="text-muted">Schedule an appointment with your preferred doctor</p>
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Alert variant={message.type === 'success' ? 'success' : 'danger'} className="mb-4">
            {message.text}
          </Alert>
        </motion.div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-muted small">Step {currentStep} of {totalSteps}</span>
          <span className="text-muted small">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <ProgressBar
          now={(currentStep / totalSteps) * 100}
          className="mb-4"
          style={{ height: '8px' }}
        />
      </div>

      {/* Step Content */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>
        </Card.Body>
      </Card>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="outline-secondary"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4"
        >
          <FaArrowLeft className="me-2" />
          Previous
        </Button>

        {currentStep < totalSteps ? (
          <Button
            variant="primary"
            onClick={nextStep}
            disabled={!canProceedToNext()}
            className="px-4"
          >
            Next
            <FaArrowRight className="ms-2" />
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={handleSubmit}
            disabled={!canProceedToNext() || booking}
            className="px-4"
          >
            {booking ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Booking...
              </>
            ) : (
              <>
                <FaCheck className="me-2" />
                Confirm Booking
              </>
            )}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default BookAppointmentPatient;
