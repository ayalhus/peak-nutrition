import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset messages
    setErrorMessage('');
    setSuccessMessage('');

    // Check if name has more than 2 letters
    if (name.trim().length <= 2) {
      setErrorMessage('Name must contain more than two letters.');
      return false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    // If both checks pass, show success message
    setSuccessMessage('Form submitted successfully!');
    return true;
  };

  return (
    <section id="contacts" className="contact_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="form_container contact-form">
              <form onSubmit={validateForm}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="btn_box">
                  <button type="submit">SEND</button>
                </div>
                {errorMessage && <p className="error_message">{errorMessage}</p>}
                {successMessage && <p className="success_message">{successMessage}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;




 
// const Contact = () => {
//   return (
//     <section id="contacts" className="contact_section">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-4 col-md-5 offset-md-1">
//             <div className="heading_container">
//               <h2>Contact Us</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-4 col-md-5 offset-md-1">
//             <div className="form_container contact-form">
//               <form action="">
//                 <div>
//                   <input type="text" placeholder="Your Name" />
//                 </div>
//                 <div>
//                   <input type="text" placeholder="Phone Number" />
//                 </div>
//                 <div>
//                   <input type="email" placeholder="Email" />
//                 </div>
//                 <div>
//                   <input type="text" className="message-box" placeholder="Message" />
//                 </div>
//                 <div className="btn_box">
//                   <button>SEND</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="col-lg-7 col-md-6 px-0">
//             <div className="map_container">
//               <div className="map">
//                 <div id="googleMap"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

