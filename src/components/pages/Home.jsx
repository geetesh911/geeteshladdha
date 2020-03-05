import React, { Fragment, useEffect } from "react";
import profile from "../../assets/images/profile.jpg";
import home from "../../assets/json/home.json";
import ReactHtmlParser from "react-html-parser";
import AOS from "aos";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <Fragment>
      <header className="showcase">
        <div className="container showcase-inner">
          <div className="profile">
            <img src={profile} alt="" className="profile-image" />
            <div className="overlay">
              <span>
                <strong>Geetesh</strong>
                <strong>Laddha</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="intro">{ReactHtmlParser(home.about)}</div>
        <div className="email" data-aos="fade-up">
          <a href={`mailto:${home.email}?Subject=Hello`}>{home.email}</a>
        </div>
      </header>
    </Fragment>
  );
};
