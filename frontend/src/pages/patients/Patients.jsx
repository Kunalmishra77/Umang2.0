import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaUserMd, FaCalendarCheck, FaUser, FaPlus } from 'react-icons/fa';

const Patients = () => {
  const navigate = useNavigate();

  // Auto-redirect to patient dashboard after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/patients');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const features = [
    {
      icon: FaUserMd,
      title: 'Find Doctors',
      description: 'Browse and connect with qualified healthcare professionals',
      color: 'primary',
    },
    {
      icon: FaCalendarCheck,
      title: 'Book Appointments',
      description: 'Schedule appointments with ease through our streamlined process',
      color: 'success',
    },
    {
      icon: FaUser,
      title: 'Manage Profile',
      description: 'Keep your medical information up to date and secure',
      color: 'info',
    },
    {
      icon: FaPlus,
      title: 'Access Services',
      description: 'Get access to pharmacy, emergency contacts, and more',
      color: 'warning',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <motion.h1
            className="display-4 fw-bold text-primary mb-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to Patient Portal
          </motion.h1>
          <motion.p
            className="lead text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your comprehensive healthcare management platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/patients')}
              className="px-5 py-3 me-3"
            >
              Access Dashboard
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => navigate('/login')}
              className="px-5 py-3"
            >
              Sign In
            </Button>
          </motion.div>
        </div>

        <Row className="g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className={`bg-${feature.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '80px', height: '80px' }}>
                        <Icon className={`text-${feature.color}`} size={32} />
                      </div>
                      <h5 className="fw-bold mb-3">{feature.title}</h5>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-muted">
            Redirecting to dashboard in a few seconds...
          </p>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Patients;
