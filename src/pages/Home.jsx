import React from "react";
import CalContent from "../Components/CalContent";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";
import Navbar from "../Components/Navbar";
import News from "../Components/News";
import Premium from "../Components/Premium";

function Home() {
  return (
    <>
      <Navbar />
      <CalContent />
      <Premium />
      <News />
      <Footer />
      <Footer2 />
    </>
  );
}

export default Home;
