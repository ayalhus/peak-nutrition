import React from 'react';

const Service = () => {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/s44.svg" alt="High-Quality Product Range"/>
                </div>
                <div className="detail-box">
                  <h5>High-Quality Product Range</h5>
                  <p>
                    Multivitamins: Comprehensive multivitamin formulas for overall health.<br />
                    Specific Vitamins: Targeted vitamins such as Vitamin C, Vitamin D, and Vitamin B complexes.<br />
                    Mineral Supplements: Essential minerals like calcium, magnesium, and zinc.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/s22.svg" alt="Quality Assurance"/>
                </div>
                <div className="detail-box">
                  <h5>Quality Assurance</h5>
                  <p>
                    Third-Party Testing: Ensuring all products meet high-quality standards through rigorous testing.<br />
                    GMP Certification: Adherence to Good Manufacturing Practices for safety and efficacy.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/s33.svg" alt="Convenient Distribution"/>
                </div>
                <div className="detail-box">
                  <h5>Convenient Distribution</h5>
                  <p>
                    Pharmacy Partnerships: Wide availability of products in pharmacies across Morocco.<br />
                    Online Sales: E-commerce platform for easy purchasing and home delivery.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/s11.svg" alt="Research and Development"/>
                </div>
                <div className="detail-box">
                  <h5>Research and Development</h5>
                  <p>
                    Innovative Product Development: Ongoing research to create new and improved supplement formulations.<br />
                    Clinical Trials: Participation in or sponsorship of clinical studies to validate product efficacy.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;


