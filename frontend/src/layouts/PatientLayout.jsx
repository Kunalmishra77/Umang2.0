import React from 'react';
import { Container, Row, Col, Card, Nav, Image } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaColumns, FaCalendarCheck, FaUserCog, FaLock, FaSignOutAlt, FaUser } from 'react-icons/fa';

const PatientLayout = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/patients', icon: FaColumns, label: 'Dashboard' },
    { path: '/patients/appointments', icon: FaCalendarCheck, label: 'Appointments' },
    { path: '/patients/profile', icon: FaUserCog, label: 'Profile Settings' },
    { path: '/patients/change-password', icon: FaLock, label: 'Change Password' },
    { path: '/logout', icon: FaSignOutAlt, label: 'Logout' },
  ];

  return (
    <div className="main-wrapper bg-light min-vh-100 pb-5 pt-5">
      <Container>
        <Row>
          {/* Sidebar */}
          <Col md={5} lg={4} xl={3} className="theiaStickySidebar">
            <Card className="profile-sidebar border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              <div className="widget-profile pro-widget-content p-4 text-center border-bottom">
                <div className="profile-info-widget mb-3">
                  <Link to="#" className="booking-doc-img d-inline-block position-relative">
                    <Image src="https://via.placeholder.com/150" roundedCircle style={{ width: '120px', height: '120px', border: '5px solid #f8f9fa' }} />
                  </Link>
                  <div className="profile-det-info mt-3">
                    <h5 className="fw-bold mb-1">Richard Wilson</h5>
                    <div className="patient-details text-muted small">
                      <h6 className="mb-0">24 Jul 1983, 38 years</h6>
                      <h6 className="mb-0"><i className="fas fa-map-marker-alt me-1"></i> New York, USA</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget p-3">
                <Nav className="flex-column">
                  {menuItems.map((item, idx) => (
                    <Nav.Item key={idx} className="mb-1">
                      <Link 
                        to={item.path} 
                        className={`nav-link d-flex align-items-center py-3 px-3 rounded-3 text-muted fw-medium transition-all ${location.pathname === item.path ? 'bg-primary-light text-primary active' : 'hover-bg-light'}`}
                      >
                        <item.icon className="me-3" size={16} />
                        <span>{item.label}</span>
                      </Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </Card>
          </Col>

          {/* Main Content */}
          <Col md={7} lg={8} xl={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PatientLayout;
