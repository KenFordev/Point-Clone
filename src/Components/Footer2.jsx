import React from "react";
import ImgZepto from "../../public/imgFoots/logo-zepto.png";
import "./footer2.css";

function Footer2() {
  return (
    <div className="foot2__bg">
      <div className="container">
        <div className="foot2__main">
          <div className="foot2-top">
            <img src={ImgZepto} alt="" />
          </div>
          <div className="foot2-bottom">
            <p>
              หากมีคำถามติดต่อ <a href="#">cs@zepetto.co.th</a>
            </p>
            <p>Copyright Zepetto (Thailand) co.,l.td. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
