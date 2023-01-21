import React from "react";

function PremiumItems({ data }) {
  return (
    <div className="premium-grid">
      {data.map((item, index) => (
        <div className="premium-items" key={index}>
          <div className="premium-imgs">
            <img src={item.Img} alt="" />
          </div>
          <div className="imgs-hot">
            <img src={item.Hotpre} alt="" />
            <p>hot</p>
          </div>
          <div className="premium-name">
            <p>{item.PreName}</p>
          </div>
          <div className="premium-price">
            <img src={item.ImgPrice} alt="" />
            <p>{item.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PremiumItems;
