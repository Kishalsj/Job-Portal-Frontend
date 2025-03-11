import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ setShow, show }) => {
  return (
    <section className="hero">
      <h1>Find Your Dream Job Today</h1>
      <h4>
        Connecting Talent with Opportunities Across the Nation for Every Skill
        Level
      </h4>
      <Link to={"/jobs"} onClick={() => setShow(!show)} className="box">
        View New Job Opportunities
      </Link>
    </section>
  );
};

export default Hero;
