import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaRegClock, FaMoneyBillAlt, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DoctorCard = ({ doctor }) => {
  const name = doctor.user ? doctor.user.name : doctor.name;
  const speciality = doctor.speciality ? (typeof doctor.speciality === 'object' ? doctor.speciality.name : doctor.speciality) : 'General Physician';
  const reviews = doctor.reviews_count !== undefined ? doctor.reviews_count : (doctor.reviews || 0);
  const rating = doctor.rating || 0;
  const fee = doctor.fee || 100;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-100"
    >
      <Card className="doctor-card border-0 shadow-lg rounded-4 overflow-hidden h-100 position-relative">
        <div className="position-absolute top-0 start-0 bg-primary opacity-10" style={{width: '100px', height: '100px', borderRadius: '0 0 100px 0'}}></div>
        <div className="position-relative">
          <Link to={`/doctor/${doctor.id}`}>
            {doctor.image && doctor.image.startsWith('http') ? (
              <Card.Img variant="top" src={doctor.image} alt={name} className="img-fluid object-fit-cover" style={{ height: '220px', width: '100%' }} />
            ) : (
              <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '220px', fontSize: '5rem' }}>
                <img src={`https://doccure.dreamstechnologies.com/react/template/80517726715f3ecda881.jpg`} alt={name} className="img-fluid" />
              </div>
            )}
          </Link>
          <div className="position-absolute top-0 end-0 p-3">
             <Button variant="light" size="sm" className="rounded-circle shadow-sm" style={{ width: '32px', height: '32px', padding: 0 }}>
                <i className="far fa-heart text-muted"></i>
             </Button>
          </div>
        </div>
        
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-1">
            <h5 className="card-title fw-bold mb-0 me-1">
                <Link to={`/doctor/${doctor.id}`} className="text-decoration-none text-dark hover-primary">
                    {name}
                </Link>
            </h5>
            <FaCheckCircle className="text-success small" title="Verified" />
          </div>
          <p className="card-text text-muted small mb-2">{speciality}</p>
          
          <div className="d-flex align-items-center mb-3">
               <div className="text-warning small me-2 d-flex">
                   {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(rating) ? "text-warning" : "text-gray-300"} />
                   ))}
               </div>
               <span className="text-muted extra-small">({reviews} Reviews)</span>
          </div>

          <ul className="list-unstyled small text-muted mb-4 d-flex flex-column gap-2">
              <li className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2 text-primary" /> {doctor.location || 'Florida, USA'}
              </li>
              <li className="d-flex align-items-center">
                  <FaRegClock className="me-2 text-primary" /> Available on Fri, 22 Mar
              </li>
              <li className="d-flex align-items-center">
                  <FaMoneyBillAlt className="me-2 text-primary" /> ${fee} - $1000 <FaInfoCircle className="ms-1 extra-small" />
              </li>
          </ul>
          
          <div className="d-grid gap-2">
              <Button as={Link} to={`/doctor/${doctor.id}`} variant="outline-primary" className="fw-bold py-2">
                  View Profile
              </Button>
              <Button as={Link} to={`/booking/${doctor.id}`} variant="primary" className="fw-bold py-2 text-white">
                  Book Now
              </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;