import React from "react";
import "./premium.css";
import Pre1 from "../../public/image-visual/premium-1.png";
import Pre2 from "../../public/image-visual/premium-2.png";
import Pre3 from "../../public/image-visual/premium-3.png";
import Pre4 from "../../public/image-visual/premium-4.png";
import HotPre from "../../public/image-visual/hot-premium.png";
import ImgPrice from "../../public/image-visual/pre-price.png";
import PremiumItems from "./premiumItem/PremiumItems";

function Premium() {
  const dataPre = [
    {
      Img: Pre1,
      Hotpre: HotPre,
      PreName: "GRS2 Kriss S.V SUPER PACK",
      ImgPrice: ImgPrice,
      Price: "3,400",
    },
    {
      Img: Pre2,
      Hotpre: HotPre,
      PreName: "SC-2010 PBIQ2020",
      ImgPrice: ImgPrice,
      Price: "890",
    },
    {
      Img: Pre3,
      Hotpre: HotPre,
      PreName: "Pindad SS2 V5 PBIQ2020",
      ImgPrice: ImgPrice,
      Price: "800",
    },
    {
      Img: Pre4,
      Hotpre: HotPre,
      PreName: "Kriss S.V PBIQ2020",
      ImgPrice: ImgPrice,
      Price: "850",
    },
  ];
  return (
    <div className="pre__bg">
      <div className="container">
        <div className="premium-main py-5">
          <div className="premium-inner">
            <div className="premium-title">
              <h2 className="premium-content">
                Premium <h2 className="text-danger d-inline fs-4">shop</h2>
              </h2>
            </div>
            <div className="premium-content">
              <a href="#" className="btn btn-danger">
                more
              </a>
            </div>
          </div>
          <div className="prenium__main">
            <PremiumItems data={dataPre} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
