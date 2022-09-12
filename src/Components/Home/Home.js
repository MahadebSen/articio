import React, { useEffect, useState } from "react";
import Banner from "./HomeParts/Banner";
import MidSection from "./HomeParts/MidSection";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <MidSection></MidSection>
    </div>
  );
};

export default Home;
