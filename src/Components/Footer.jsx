import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="foot__bg">
      <div className="container">
        <div className="foot__menu">
          <ul className="menu__main">
            <li>
              <a href="#">PB อีสปอร์ต</a>
            </li>
            <li>
              <a href="#">นโยบายความเป็นส่วนตัว</a>
            </li>
            <li>
              <a href="#">ข้อตกลงการอนุญาตใช้งานสำหรับผู้ใช้ปลายทาง</a>
            </li>
            <li>
              <a href="#">นโยบายการจัดการเกม</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
