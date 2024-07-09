import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

function CustomNavbar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showEnquireDropdown, setShowEnquireDropdown] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
          <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => updateExpanded(false)}
          >
            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/project"
            onClick={() => updateExpanded(false)}
          >
            <AiOutlineFundProjectionScreen
              style={{ marginBottom: "2px" }}
            />{" "}
            Projects
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/resume"
            onClick={() => updateExpanded(false)}
          >
            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
  <Nav.Link
    as={Link}
    to="/Certifications"
    onClick={() => updateExpanded(false)}
  >
    <FaCertificate style={{ marginBottom: "2px", color: "gold" }} /> Certifications
  </Nav.Link>
</Nav.Item>

        <Nav.Item>
  <Nav.Link
    onClick={() => setShowEnquireDropdown(!showEnquireDropdown)}
  >
    <FaComment style={{ marginBottom: "2px" }} /> Enquire
  </Nav.Link>
  <Dropdown
    show={showEnquireDropdown}
    onMouseEnter={() => setShowEnquireDropdown(true)}
    onMouseLeave={() => setShowEnquireDropdown(false)}
  >
    <Dropdown.Menu>
      <Dropdown.Item
        href="https://rb.gy/thgal0"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </Dropdown.Item>
      <Dropdown.Item
        href="https://forms.gle/6aUQBRZFT4bNVNa96"
        target="_blank"
        rel="noreferrer"
      >
        Contact Form
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Dixith-ai/portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;