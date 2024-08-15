import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import rishbh2 from "../../assets/ReviewPhotos/male1.jpg";
import amar2 from "../../assets/ReviewPhotos/female2.jpg";
import geetika2 from "../../assets/ReviewPhotos/male3.jpg";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4 primary__title" style={{ fontFamily: "Cinzel" }}>
            Reviews
          </h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            <h6 className="primary__title" style={{ fontSize: "20px" }}>
              What customer says about us
            </h6>
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={rishbh2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4" style={{ color: "white" }}>
                Rajesh Kumar
              </h4>
              <hr />
              <p className="dark-grey-text mt-4" style={{ fontSize: "15px" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Working with Satyapriya Mishra was an absolute pleasure. he
                brought our vision to life with a stunning and user-friendly
                website that exceeded our expectations. His attention to detail,
                timely communication, and expertise in web development made the
                entire process smooth and hassle-free.And his deployment work
                was very awesome and quick. I highly recommend Satyapriya for
                anyone looking for top-notch web development services.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={amar2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4" style={{ color: "white" }}>
                {" "}
                Anjali Verma
              </h4>
              <hr />
              <p className="dark-grey-text mt-4" style={{ fontSize: "15px" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Satyapriya is an incredibly talented developer who transformed
                our outdated website into a modern, responsive platform that has
                significantly improved our online presence And he did the
                deployment part very well. He was patiently, understood our
                requirements perfectly, and delivered a website that not only
                looks great but also performs flawlessly. His dedication and
                professionalism are truly commendable.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={geetika2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4" style={{ color: "white" }}>
                Vikram Singh
              </h4>
              <hr />
              <p className="dark-grey-text mt-4" style={{ fontSize: "15px" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />I approached
                Satyapriya with a challenging project, and He delivered beyond
                my expectations. The website he developed for my fitness
                coaching business is sleek, fast, and easy to navigate.
                Satyapriya's ability to integrate complex features and create a
                seamless user experience is remarkable. I’ve received so many
                compliments on the site, and it’s all thanks to their hard work
                and expertise.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
