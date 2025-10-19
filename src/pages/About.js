// About.js

import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import Header from "../components/Layout/Header copy";
import Footer from "../components/Layout/Footer copy";
import leftphoto from "../assets/PS5_2037.JPG";

const AboutSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 0;
`;

const JoinSection = styled.section`
  background-color: #800020;
  color: white;
  padding: 60px 0;
  text-align: center;
  border-radius: 5%;
`;

const Title = styled.h2`
  color: black;
  font-size: 2.8rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  color: #800020;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #264653;
`;

const JoinTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const JoinText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 20px auto;
`;

// const Terms = styled.div`
//   background-color: #264653;
//   color: #ffffff;
//   padding: 30px;
//   margin-top: 40px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

const About = ({ scrollToComponent }) => {
  return (
    <div>
      <Header scrollToComponent={scrollToComponent} />
      <AboutSection>
        <MDBContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>About Us</Title>
            <MDBRow>
              <MDBCol md="6">
                <motion.img
                  src={leftphoto}
                  alt="Hospitality Service"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCard
                  style={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    borderRadius: "5%",
                  }}
                >
                  <MDBCardBody>
                    <MDBCardTitle
                      className="text-center"
                      style={{
                        color: "#800020",
                        fontSize: "2rem",
                        paddingLeft: "0%",
                        marginLeft: "0%",
                        fontWeight: "bold",
                      }}
                    >
                      services
                    </MDBCardTitle>
                    <MDBCardText
                      style={{
                        color: "#264653",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      Where Your Journey to Incredible India Begins.
                      <br />
                      <br />
                    </MDBCardText>
                    <MDBCardText style={{ color: "#264653", fontSize: "16px" }}>
workings
               </MDBCardText>
                    <SubTitle>Our Mission</SubTitle>
                    <Text>
                     mision                   </Text>
                    <SubTitle>Our Vision</SubTitle>
                    <Text>
                      vision                    </Text>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            {/* <Terms>
              <p
                className="termshead"
                style={{ color: "#e76f51", fontSize: "20px" }}
              >
                Terms and Conditions
              </p>
              <Text style={{ color: "white" }}>
                No refund and No Cancellation policy, blackout dates are
                applicable.
              </Text>
            </Terms> */}
          </motion.div>
        </MDBContainer>
      </AboutSection>
      <JoinSection>
        <MDBContainer>
          <JoinTitle>Join the Family</JoinTitle>
          <JoinText>
            family          </JoinText>
        </MDBContainer>
      </JoinSection>
      <Footer />
    </div>
  );
};

export default About;
