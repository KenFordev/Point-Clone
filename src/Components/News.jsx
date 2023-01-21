import React from "react";
import "./news.css";
import NewsContent from "./newContent/NewsContent";
import NewsImg1 from "../../public/newsImg/news1.jpg";
import NewsImg2 from "../../public/newsImg/news2.png";
import NewsImg3 from "../../public/newsImg/news3.jpg";
import NewsImg4 from "../../public/newsImg/news4.jpg";

function News() {
  const dataNews = [
    {
      imgNews: NewsImg1,
      boxsName: "โปรโมชั่น",
      bgBoxs: "#c00",
      colorBoxs: "#ffcccc",
      headNews: "PBIC2023 International Pass : PBIC Series Collection",
      titleNews:
        "ทำภารกิจให้สำเร็จตามที่กำหนด จะได้รับซีรี่ย์ PBIC2023 ตามจำนวนที่ผู้เล่นทำได้ สูงสุด 30 วัน",
    },
    {
      imgNews: NewsImg2,
      boxsName: "อีเวนท์",
      bgBoxs: "#7308c8",
      colorBoxs: "#eeccee",
      headNews: "Mission Card Chinese New Year : บัตรภารกิจสุดคุ้ม",
      titleNews: "ผู้เล่นทำภารกิจที่ได้รับมอบหมาย รับไปเลยอาวุธสุดคุ้ม",
    },
    {
      imgNews: NewsImg3,
      boxsName: "แพตข์",
      bgBoxs: "#206c0e",
      colorBoxs: "#cceebb",
      headNews: "การอัปเดตเวอร์ชั่นใหม่ ประจำวันที่ 17 มกราคม 2566",
      titleNews: "พบกับกิจกรรมต้อนรับเทศกาลตรุษจีน สุดคุ้ม",
    },
    {
      imgNews: NewsImg4,
      boxsName: "อีสปอร์ต",
      bgBoxs: "#0044bb",
      colorBoxs: "#99ccff",
      headNews:
        "กฏการแข่งขันรายการ POINTBLANK INTERNATIONAL CHAMPIONSHIP 2023 ",
      titleNews: "กฏการแข่งขันอย่างเป็นทางการ PBIC 2023",
    },
  ];
  return (
    <div className="news__bg">
      <div className="container">
        <div className="news__main">
          <div className="news__title">
            <h2>ข่าว</h2>
            <a href="#" className="btn btn-primary d-flex align-items-center">
              มากกว่า
            </a>
          </div>
          <div className="news__content">
            <NewsContent data={dataNews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
