import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeartbeat, FaBrain, FaBone, FaLungs, FaSyringe, FaUserMd, FaStethoscope, FaMicroscope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const specialities = [
  { name: 'Cardiac Care', icon: FaHeartbeat },
  { name: 'Gastroenterology', icon: FaSyringe },
  { name: 'Neuro Sciences', icon: FaBrain },
  { name: 'Orthopaedics', icon: FaBone },
  { name: 'Pulmonology', icon: FaLungs },
  { name: 'General Surgery', icon: FaUserMd },
  { name: 'Nephrology', icon: FaMicroscope },
  { name: 'Urology', icon: FaStethoscope },
];

const Specialities = () => {
  return (
    <section className="section-specialities py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="fw-bold"
          >
            Clinic and Specialities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted"
          >
            Access to our specialized clinics for all your healthcare needs in Gurugram.
          </motion.p>
        </div>

        <Row className="justify-content-center">
          {specialities.map((item, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                className="specality-item text-center p-4 bg-white shadow-lg rounded-4 h-100 border border-light position-relative overflow-hidden cursor-pointer"
                style={{ cursor: 'pointer' }}
              >
                <div className="position-absolute top-0 end-0 bg-primary opacity-5" style={{width: '80px', height: '80px', borderRadius: '0 0 0 80px'}}></div>
                 <div
                    className="specality-img mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center bg-gradient-primary position-relative"
                    style={{
                      width: '90px',
                      height: '90px',
                      background: 'linear-gradient(135deg, #09e5ab 0%, #15ccbb 100%)',
                      boxShadow: '0 10px 30px rgba(9, 229, 171, 0.3)'
                    }}
                 >
                   <item.icon size={35} className="text-white" />
                   <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-white opacity-20 animate-pulse"></div>
                 </div>
                 <h5 className="mb-0 text-dark fw-bold fs-6 lh-base">{item.name}</h5>
                 <div className="position-absolute bottom-0 start-0 bg-success opacity-5" style={{width: '60px', height: '60px', borderRadius: '0 60px 0 0'}}></div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Specialities;
