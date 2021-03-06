import React, { useContext } from 'react'
import { AuthContext } from "../AuthContext";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../App.css";

import ProfileContainer from '../components/Profile/ProfileContainer';
import Navigation from '../components/Navigation/Navigation';


// import Navigation from '../components/Navigation/Navigation';
// import Footer from '../components/Footer/Footer';

function Profile(props) {

  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Navigation />
      <h1>Profile Page</h1>
      <Container fluid>
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={9}>
            <ProfileContainer />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}


export default Profile




