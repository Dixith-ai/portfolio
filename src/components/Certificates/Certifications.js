import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import cert1 from "../../Assets/Certifications/M Dixith adithya - (Freedom With AI) Certificate (1)_page-0001.jpg";
import cert2 from "../../Assets/Certifications/M. DIXITH ADITHYA-1_page-0001 (1).jpg";
import cert3 from "../../Assets/Projects/coming-soon.jpg";

function Certifications() {
  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert1}
              title="Freedom With AI"
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert2}
              title="Be 10x AI Workshop"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="vcertification-vcard">
            <CertificationCard
              imgPath={cert3}
              title="A4"
            />
          </Col>
          <Col md={4} className="vcertification-vcard">
            <CertificationCard
              imgPath={cert3}
              title="A4"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert1}
              title="Freedom With AI"
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert2}
              title="Be 10x AI Workshop"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="vcertification-vcard">
            <CertificationCard
              imgPath={cert3}
              title="A4"
            />
          </Col>
          <Col md={4} className="vcertification-vcard">
            <CertificationCard
              imgPath={cert3}
              title="A4"
            />
          </Col>
          
        </Row>
        
      </Container>
    </Container>
  );
}

export default Certifications;