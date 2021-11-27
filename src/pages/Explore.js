import React from "react";
import ExploreMentor from "../components/Explore/ExploreMentor";
import Hero from "../components/Hero/Hero";

const Explore = () => {
  return (
    <div className="explore">
      <Hero page="explore" />
      <ExploreMentor />
    </div>
  );
};

export default Explore;
