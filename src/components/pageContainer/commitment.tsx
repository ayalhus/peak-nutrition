import React from 'react';

const Commitment = () => {
  return (
    <section className="track_section layout_padding">
      <div className="track_bg_box">
        <img src="images/file1.png" alt="Background"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="heading_container">
              <h2>Our Commitment</h2>
            </div>
            <p>
              At Peak Nutrition Health & Wellness, our goal is to make superior nutrition accessible to everyone. We are committed to providing you with the best products at unbeatable prices, backed by exceptional customer service. Whether you're looking to boost your immunity, enhance your athletic performance, or support your overall well-being, we are here to help you every step of the way.
              <br /><br />
              Thank you for choosing Peak Nutrition as your trusted partner in health. Together, we can achieve a healthier, happier future.
            </p>
            <form action="">
              <input type="text" placeholder="Subscribe to our Newsletter" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
