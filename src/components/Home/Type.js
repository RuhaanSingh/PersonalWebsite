import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Android Developer",
          "AI/ML Expert",
          "Critical Thinker",
          "Dancer",
          "Problem Solver",
          "Tech Enthusiast",
          "Innovator"


        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
