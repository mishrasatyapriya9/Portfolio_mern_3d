import React, { useContext } from "react";
import { PlanContext } from "../context/PlanContext.js";
import "./Pricing.css";

const Pricingcard = ({ scrollToComponent }) => {
  const { setSelectedPlan } = useContext(PlanContext);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(`I am interested in the ${plan} plan`);
    scrollToComponent("contactus");
  };

  return (
    <div id="pricing">
      <section className="section pt-5 pb-5" id="pricing-plans">
        <div className="top" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h1 className="primary__title" style={{ fontFamily: "Cinzel" }}>
                  Plans
                </h1>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Choose the perfect plan for your needs</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* ***** Silver Plan Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title1">SILVER</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="price">₹15,999/-</span>
                    <br />
                    <p
                      className="price"
                      style={{ fontSize: "15px", marginTop: "0px" }}
                    >
                      Inclusive of all taxes
                    </p>
                  </div>
                  <ul className="list">
                    <li className="active">Website Design & Development</li>
                    <li className="active">Basic SEO Optimization</li>
                    <li className="active">Domain & Hosting Setup</li>
                    <li className="active">Deployment on VPS</li>
                    <li className="active">Basic Support for 1 Month</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line silverb"
                    onClick={() => handleSelectPlan("Silver")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Silver Plan End ***** */}

            {/* ***** Gold Plan Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title2">GOLD</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="price">₹25,999/-</span>
                    <br />
                    <p
                      className="price"
                      style={{
                        fontSize: "15px",
                        marginTop: "0px",
                        marginBottom: "4px",
                        paddingBottom: "4px",
                      }}
                    >
                      Inclusive of all taxes
                    </p>
                  </div>
                  <ul className="list">
                    <li className="active">Everything in Silver Plan</li>
                    <li className="active">Enhanced SEO Optimization</li>
                    <li className="active">Custom Email Setup</li>
                    <li className="active">Deployment on VPS or AWS</li>
                    <li className="active">Premium Support for 3 Months</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line goldb"
                    onClick={() => handleSelectPlan("Gold")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Gold Plan End ***** */}

            {/* ***** Platinum Plan Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title3">PLATINUM</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="price">₹35,999/-</span>
                    <br />
                    <p
                      className="price"
                      style={{ fontSize: "15px", marginTop: "0px" }}
                    >
                      Inclusive of all taxes
                    </p>
                  </div>
                  <ul className="list">
                    <li className="active">Everything in Gold Plan</li>
                    <li className="active">Advanced Customizations</li>
                    <li className="active">E-commerce Integration</li>
                    <li className="active">
                      Deployment on AWS with Load Balancing
                    </li>
                    <li className="active">Priority Support for 6 Months</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line goldb"
                    onClick={() => handleSelectPlan("Platinum")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Platinum Plan End ***** */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricingcard;
