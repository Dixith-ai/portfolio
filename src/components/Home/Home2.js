import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              Let Me <span className="purple">Introduce</span> Myself
            </h1>
            <p className="home-about-body">
              From an early fascination with <span className="purple">IoT</span>, I've embarked on an unending journey of skill development in this dynamic field.
              <br />
              <br />
              As a beginner in <i><b className="purple">C++, C, JavaScript, Java,</b></i> and more,
              <br />
              <br />
              I'm also exploring <b className="purple">Python, DevOps, basic Web Development, Django, PHP, Perl,</b> and more.
              <br />
              <br />
              My primary interests lie in <i>innovative <b className="purple">projects</b> and advancements in <b className="purple">IoT</b>.</i>
              <br />
              <br />
              I stay updated with the latest in tech, including <i><b className="purple">AI, AI in IoT,</b></i> and beyond.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Find <span className="purple">Me</span> on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dixith-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dixith-adithya-b9459b213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dixithonline/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
