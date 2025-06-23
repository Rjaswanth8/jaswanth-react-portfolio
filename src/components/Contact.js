import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const contactDetails = [
    {
      title: "address point",
      icon: '<i class="fa-solid fa-map-location-dot"></i>',
      contact: "2/7, Ranipuram, S.R.Puram, Chittoor, AP - 517167",
    },
    {
      title: "mail me",
      icon: '<i class="fa-solid fa-envelope-open-text"></i>',
      contact: "raminenijaswanth26@gmail.com",
    },
    {
      title: "call me",
      icon: '<i class="fa-solid fa-mobile"></i>',
      contact: "+91 86880 86646",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on change
    setSuccess(""); // Clear success on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, user_email, subject, message } = formData;

    if (!name || !user_email || !subject || !message) {
      setError("❗ All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", user_email: "", subject: "", message: "" });
      } else {
        setError("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      setError("❌ Server error. Please try later.");
    }
  };

  return (
    <div>
      <div
        className="head-container"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos="fade-down"
      >
        <h1 className="main-head">
          Get In <span className="me">touch</span>
        </h1>
        <span className="resume">Contact</span>
      </div>
      <div className="container contact">
        <div className="row">
          <div
            className="col-lg-4 col-sm-12 col-xs-12"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="fade-right"
          >
            <h2 className="pb-3 about-sub-head">don't be shy !</h2>
            <p className="mb-4">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            {contactDetails.map((item) => (
              <div className="contact-content-div">
                <p className="contact-text">
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span className="d-block contact-span">{item.title}</span>

                  {item.contact}
                </p>
              </div>
            ))}

            <ul className="icons-head">
              <li
                data-aos-duration="2000"
                data-aos-delay="300"
                data-aos="fade-right"
              >
                <a
                  href="https://www.facebook.com/kittuchowdary.ravini"
                  target="__blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li
                data-aos-duration="1800"
                data-aos-delay="250"
                data-aos="fade-right"
              >
                <a
                  href="https://www.instagram.com/_.kittuchowdary._/"
                  target="__blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li
                data-aos-duration="1500"
                data-aos-delay="220"
                data-aos="fade-right"
              >
                <a
                  href="https://www.linkedin.com/in/jaswanth-r-9285b2239/"
                  target="__blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li
                data-aos-duration="1200"
                data-aos-delay="190"
                data-aos="fade-right"
              >
                <a href="https://wa.me/8688086646" target="__blank">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-8 col-sm-12 col-xs-12"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="fade-left"
          >
            <form className="contactform" onSubmit={handleSubmit}>
              <div className="row">
                {/* Inputs */}
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="YOUR EMAIL *"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 form-group ">
                  <input
                    type="text"
                    name="subject"
                    placeholder="YOUR SUBJECT *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 form-group">
                  <textarea
                    name="message"
                    placeholder="YOUR MESSAGE *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Feedback messages */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                {/* Submit button */}
                <div className="download-cv">
                  <button type="submit" className="button">
                    <span>send message</span>
                    <span className="fa-solid fa-paper-plane download-icon send"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
