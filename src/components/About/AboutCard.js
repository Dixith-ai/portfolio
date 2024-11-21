import React from "react";
import Card from "react-bootstrap/Card";
import { ImBooks, ImCompass2, ImHeadphones, ImEarth } from "react-icons/im"; // Importing ImBooks, ImCompass2, ImHeadphones, ImEarth icons
import { FaMountain } from "react-icons/fa"; // Importing FaMountain icon for mountains

function AboutCard() {
  const playlistLink = "https://music.youtube.com/playlist?list=PLf02ZPGW086pNUIBzBXLMqGteOIOjUoia&si=vw9Iupr1MRGLh75E";

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Greetings! I am <span className="purple">M DIXITH ADITHYA</span> from <span className="purple">Bengaluru, India</span>.
            <br />
            <br />
            Here's a bit about my educational journey and current pursuits:
          </p>
          <ul>
            <li className="about-activity">
              <ImBooks style={{ color: "purple", marginRight: "10px" }} /> Currently a second-year CST student at <span className="purple">Dayanand Sagar University, Bengaluru</span>.
            </li>
            <li className="about-activity">
              <ImBooks style={{ color: "purple", marginRight: "10px" }} /> Completed a 3-year diploma in Computer Engineering & IT Infrastructure from <span className="purple">NTTF, Bengaluru</span>.
            </li>
            <li className="about-activity">
              <ImBooks style={{ color: "purple", marginRight: "10px" }} /> Completed schooling till 10th grade at <span className="purple">The Oxford Senior Secondary School, Bengaluru</span>, under the CBSE curriculum.
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
            Apart from my academic pursuits, I am actively engaged in various enriching activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImCompass2 style={{ color: "purple", marginRight: "10px" }} /> Innovating in <span className="purple">IoT Projects</span> that push technological boundaries.
            </li>
            <li className="about-activity">
              <ImCompass2 style={{ color: "purple", marginRight: "10px" }} /> Participating in insightful workshops exploring diverse tech concepts, both online and offline.
            </li>
            <li className="about-activity">
              <ImCompass2 style={{ color: "purple", marginRight: "10px" }} /> Attending <span className="purple">Tech Summits and Start-Up events</span> to stay updated with industry trends.
            </li>
            <li className="about-activity">
              <ImCompass2 style={{ color: "purple", marginRight: "10px" }} /> Crafting compelling narratives about <span className="purple">TIME</span> that provoke thought and reflection.
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "1.5rem", fontSize: "1.1em" }}>
            When I'm not immersed in tech, you'll find me:
          </p>
          <ul style={{ lineHeight: "1.8" }}>
            <li className="about-activity">
              <ImHeadphones style={{ color: "#6f42c1", marginRight: "10px" }} /> Listening to a diverse mix of music genres and categories from around the globe.{" "}
              <span role="img" aria-label="music" style={{ color: "#6f42c1", fontSize: "1.2em" }}>
                🎶
              </span>{" "}
              Check out my <a href={playlistLink} className="purple" target="_blank" rel="noopener noreferrer">current playlist</a> that I'm vibing to.
            </li>
            <li className="about-activity">
              <FaMountain style={{ color: "#6f42c1", marginRight: "10px" }} /> Travelling solo, especially to forests and mountains, to connect with nature and seek solitude.
            </li>
            <li className="about-activity">
              <ImCompass2 style={{ color: "#6f42c1", marginRight: "10px" }} /> Exploring new destinations through travel: Whether it's immersing myself in diverse cultures and landscapes or seeking solitude in forests and mountains, I find inspiration and tranquility in my solo adventures. It's a time where I can also engage with people, sharing experiences and thoughts, which enriches my journey even further.
            </li>
            <li className="about-activity">
              <ImBooks style={{ color: "#6f42c1", marginRight: "10px" }} /> Studying <span className="purple">Indian history</span> and its influence on the rest of the world.
            </li>
            <li className="about-activity">
              <ImBooks style={{ color: "#6f42c1", marginRight: "10px" }} /> Developing an interest in <span className="purple">reading books</span>.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1.5rem" }}>
            "My mission is to create innovations that enhance everyday life."
          </p>
          <footer className="blockquote-footer">M DIXITH ADITHYA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
