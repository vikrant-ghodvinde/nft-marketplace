import React from "react";
import Banner from "./components/Banner/Banner";
import HotBids from "./components/HotBids/HotBids";
import TopCollections from "./components/TopCollections/TopCollections";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <HotBids />
      <TopCollections />
    </React.Fragment>
  );
};

export default Home;
