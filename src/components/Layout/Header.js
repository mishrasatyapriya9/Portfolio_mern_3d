import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Mehar hospitality Logo-01.svg";
import satyalogo from "../../assets/Logo.gif"
import "./Header.css";
import { motion, spring } from "framer-motion";
// import list from "../../assets/list.jpeg"
function Header({ scrollToComponent }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "sticky" : ""}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary background navbar"
        bg="primary"
        variant="dark"
      >
        <Container fluid>
          <img
            src={satyalogo}
            alt="Mehar Hospitality Services"
            className="icon"
          />
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              <motion.h5
                style={{ color: "black" }}
                className="textmehar"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: spring, stiffness: 100 }}
                whileHover={{ y: -4 }}
              >
                SATYAPRIYA MISHRA
              </motion.h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-between w-100">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  <motion.h6
                    style={{ color: "black" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, type: spring, stiffness: 100 }}
                    whileHover={{ y: -2 }}
                  >
                    Home
                  </motion.h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("services")}
                >
                  <motion.h6
                    style={{ color: "black" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 2, scale: 1 }}
                    transition={{ duration: 2, type: spring, stiffness: 100 }}
                    whileHover={{ y: -2 }}
                  >
                    Services
                  </motion.h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("pricing")}
                >
                  <motion.h6
                    style={{ color: "black" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.5, type: spring, stiffness: 100 }}
                    whileHover={{ y: -2 }}
                  >
                    Pricing
                  </motion.h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="#"
                  onClick={() => scrollToComponent("about")}
                >
                  <motion.h6
                    style={{ color: "black" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, type: spring, stiffness: 100 }}
                    whileHover={{ y: -2 }}
                  >
                    About Us
                  </motion.h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("contact")}
                >
                  <motion.h6
                    style={{ color: "black" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3.5, type: spring, stiffness: 100 }}
                    whileHover={{ y: -2 }}
                  >
                    Contact Us
                  </motion.h6>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
          {/* <SIdebar /> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
