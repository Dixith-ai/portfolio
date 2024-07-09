import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Development Rookie",
          "AI Enthusiast",
          "Innovator in IoT",
          "Robotics Enthusiast",
          "Tech Explorer",
          "Passionate Learner",
          "Future Innovator",
          "Knows Too Much to Summarize 😜",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
