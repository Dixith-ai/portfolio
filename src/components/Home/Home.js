  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import homeLogo from "../../Assets/home-main.svg";
  import profilePic from "../../Assets/pp.png";
  import Particle from "../Particle";
  import Home2 from "./Home2";
  import Type from "./Type";

  function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hey visitor!{" "}
                  Want to know more about me?{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I am
                  <strong className="main-name"> ADITHYA</strong>
                  <img
                      src={profilePic}
                      alt="profile pic"
                      className="img-fluid profile-pic"
                      style={{
                        borderRadius: "25%",
                        width: "150px", // Increased width from 100px to 150px
                        height: "210px", // Added height to maintain aspect ratio
                        marginBottom: "-25px",
                        marginLeft: "50px",
                        marginTop: "25px",
                        marginRight: "100px"
                      }}
  />
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" ,
                    marginTop: "65px"}}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    );
  }

  export default Home;
