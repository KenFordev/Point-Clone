import React from "react";

function NewsContent({ data }) {
  return (
    <div className="news__con-grid">
      {data.map((item, index) => (
        <a href="#">
          <div className="news__content-main" key={index}>
            <div className="new__img">
              <img src={item.imgNews} alt="" />
              <span
                style={{
                  background: `${item.bgBoxs}`,
                  color: `${item.colorBoxs}`,
                }}
              >
                {item.boxsName}
              </span>
            </div>
            <div className="news__text">
              <h2>{item.headNews}</h2>
              <p>{item.titleNews}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default NewsContent;
