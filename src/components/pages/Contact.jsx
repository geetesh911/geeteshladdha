import React, { useEffect } from "react";
import home from "../../assets/json/home.json";
import AOS from "aos";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className="contact">
      <div className="contact-heading">Contact Me!</div>
      <div className="contact-content">
        <p data-aos="fade-up">I am available for freelance work.</p>
        <p data-aos="fade-up">Drop me a line if you fancy a chat.</p>
      </div>
      <div className="email" data-aos="fade-up">
        <a href={`mailto:${home.email}?Subject=Hello`}>{home.email}</a>
      </div>
    </div>
  );
};
