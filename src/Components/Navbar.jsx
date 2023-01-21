import React, { useState } from "react";
import LogoPoint from "../../public/images/logo_poin.png";
import LogoCountry from "../../public/images/thailand.png";
import "./navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import AboutGames from "../../public/images/about-games.png";
import Download from "../../public/images/download.png";
import Installing from "../../public/images/installing.png";
import StartGame from "../../public/images/startgame.png";
import Lating1 from "../../public/images/lating-1.png";
import Lating2 from "../../public/images/lating-2.png";
import Discord from "../../public/images/discord.png";
import Facebook from "../../public/images/facebook.png";
import Youtube from "../../public/images/youtube.png";
import Instagram from "../../public/images/instar.png";
import Clan1 from "../../public/images/clan-1.png";
import Clan2 from "../../public/images/clan-2.png";
import Clan3 from "../../public/images/clan-3.png";
import Clan4 from "../../public/images/clan-4.png";
import Clan5 from "../../public/images/clan-5.png";
import Philippines from "../../public/images/lang1.png";
import Laos from "../../public/images/lang2.jpg";

function Navbar() {
  const data = [
    "เกม",
    "ข่าว",
    "อันดับ",
    "มีเดีย",
    "E-SPORTS",
    "FAQ",
    "ติดต่อ",
    "CLAN",
    "PREMIUM SHOP",
    "ATTENDANCE",
  ];

  const [OpenBurger, setOpenBurger] = useState(false);
  const [OpenUsermenu, setUsermenu] = useState(false);
  const [OpenDrop, setOpenDrop] = useState(false);
  const [DropMobileGame, setDropMobileGame] = useState(false);
  const [DropMobileRat, setDropMobileRat] = useState(false);

  const onClickOpen = () => {
    setOpenBurger(!OpenBurger);
  };
  const onClickDropMobileGame = () => {
    setDropMobileGame(!DropMobileGame);
  };
  const onClickDropMobileRat = () => {
    setDropMobileRat(!DropMobileRat);
  };
  const onUsermenu = () => {
    setUsermenu(!OpenUsermenu);
  };

  const onClickClose = () => {
    setOpenBurger(false);
  };
  const ClickForOpenDrop = () => {
    setOpenDrop(!OpenDrop);
  };

  return (
    <nav className="nav__bg">
      <div className="nav__container">
        <div className="ham__menu" onClick={onClickOpen}>
          <RxHamburgerMenu className="hambur" size="3rem" color="#fff" />
        </div>
        <div className="nav__left">
          <div className="nav__logo">
            <a href="#">
              <img src={LogoPoint} alt="" />
            </a>
          </div>
          <div
            className={
              OpenBurger || OpenUsermenu ? "bg__fade active" : "bg__fade"
            }
          ></div>
          {/* ============= ลองใส่ Container ================= */}
          <ul className={OpenBurger ? "nav__menu active" : "nav__menu"}>
            <div className="close__menu" onClick={() => setOpenBurger(false)}>
              <AiOutlineClose className="hambur" size="3rem" color="#fff" />
            </div>
            <div className="pointblank-logo">
              <img src={LogoPoint} alt="" />
            </div>

            {/* ================= เกม ======================== */}
            <li
              className={
                DropMobileGame
                  ? "dropdown__menu active"
                  : "main__drop-1 nav__menu-con dropdown__menu"
              }
            >
              <div
                className="game__header h-100"
                onClick={onClickDropMobileGame}
              >
                <a className="nav__menu-item">{data[0]}</a>
                <div className="game__bullet">
                  <FiChevronDown className="game__tranfrom" />
                </div>
              </div>

              <ul className="on__menu">
                <li>
                  <a href="#">
                    <img className="item" src={AboutGames} alt="" />
                    <p>เกี่ยวกับเกม</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Download} alt="" />
                    <p>ดาวน์โหลด</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Installing} alt="" />
                    <p>ติดตั้ง</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={StartGame} alt="" />
                    <p>เริ่มเกม</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* ================= ข่าว ======================== */}
            <li className="nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[1]}
              </a>
            </li>
            {/* ================= อันดับ ======================== */}
            <li
              className={
                DropMobileRat
                  ? "dropdown__menu active-rate"
                  : "main__drop-2 nav__menu-con dropdown__menu"
              }
            >
              <div
                className="game__header h-100"
                onClick={onClickDropMobileRat}
              >
                <a href="#" className="nav__menu-item">
                  {data[2]}
                </a>
                <div className="game__bullet">
                  <FiChevronDown className="game__tranfrom" />
                </div>
              </div>

              <ul className="on__menu">
                <li>
                  <a href="#">
                    <img className="item" src={Lating1} alt="" />
                    <p>ผู้เล่น</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Lating2} alt="" />
                    <p>กลุ่ม</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* ================= มีเดีย ======================== */}
            <li className="nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[3]}
              </a>
            </li>
            {/* ================= E-SOPRTS ======================== */}
            <li className="nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[4]}
              </a>
            </li>
            {/* ================= FAQ ======================== */}
            <li className="nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[5]}
              </a>
            </li>
            {/* ================= ติดต่อ ======================== */}
            <li className="main__drop-3 nav__menu-con">
              <a
                onClick={onClickClose}
                href="#"
                className="nav__menu-item close__contact"
              >
                {data[6]}
              </a>

              <ul className="on__menu">
                <li>
                  <a href="#" className="discord__color">
                    <img src={Discord} alt="" />
                    <p>Discord</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook__color">
                    <img src={Facebook} alt="" />
                    <p>Facebook</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Youtube} alt="" />
                    <p>Youtube</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="instar__color">
                    <img src={Instagram} alt="" />
                    <p>Instagram</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* ================= CLAN ======================== */}
            <li className="main__drop-4 nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[7]}
              </a>

              <ul className="on__menu">
                <li>
                  <a href="#">
                    <img src={Clan1} alt="" />
                    <p className="fonts-more">CLAN MAIN</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Clan2} alt="" />
                    <p className="fonts-more">CLAN RANKING</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Clan3} alt="" />
                    <p className="fonts-more">CLAN MEDAL</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Clan4} alt="" />
                    <p className="fonts-more">MY CLAN</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Clan5} alt="" />
                    <p className="fonts-more">CLAN COMMUNITY</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* ================= PREMIUM SHOP ======================== */}
            <li className="nav__menu-con">
              <a
                onClick={onClickClose}
                href="#"
                style={{ color: "#ffcc00" }}
                className="nav__menu-item nav__premium"
              >
                {data[8]}
              </a>
            </li>
            {/* ================= ATTENDANCE ======================== */}
            <li className="nav__menu-con">
              <a onClick={onClickClose} href="#" className="nav__menu-item">
                {data[9]}
              </a>
            </li>
          </ul>
        </div>
        <div className="user__menu" onClick={onUsermenu}>
          <FaUserCircle size="3rem" color="#fff" />
        </div>
        <div className={OpenUsermenu ? "nav__right active" : "nav__right"}>
          {/* ============= Dropdown Lang ====================== */}
          <div className="nav__dropdown" onClick={ClickForOpenDrop}>
            <img src={LogoCountry} alt="" />
            <p>Thailand</p>
            <BiChevronDown size="1.5rem" color="gray" />

            <ul
              className={OpenDrop ? "nav__drop-item active" : "nav__drop-item"}
            >
              <li>
                <a href="#">
                  <img src={Philippines} alt="" />
                  <p>PHILIPPINES</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Laos} alt="" />
                  <p>ປະຊາຊົນລາວ</p>
                </a>
              </li>
            </ul>
          </div>
          {/* ============= Mobile ====================== */}
          <div className="regis">
            <div className="colse__user" onClick={() => setUsermenu(false)}>
              <AiOutlineClose className="hambur" size="3rem" color="#fff" />
            </div>
            <div className="pointblank-mobile">
              <img src={LogoPoint} alt="" />
            </div>
            <ul className="nav__regis">
              <li className="register__hover">
                <a href="#">ลงทะเบียน</a>
              </li>
              <li className="signin__hover">
                <a href="#">เข้าสู่ระบบ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
