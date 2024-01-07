import React from "react";
import aboutImg from "../assets/artist-photo.jpg";
import serviceImg from "../assets/service.png";
import { Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div>
        <Row>
          <h1 style={{margin: "3rem"}}>About Artist</h1>
        </Row>
        <Row>
        <Col md={6}>
          <img className="about-image"
            src={aboutImg}
            alt="profile_picture"
          />
        </Col>
        <Col md={6}>
          <h5 className="about-text">
            Ken Lange is a digital artist, guitarist, poet, singer/songwriter.
            <br></br>
            He has an Associate of Arts in Music, and Bachelor of Arts in
            Linguistics and follows a creative life charged with art, music, <br></br>and
            the pursuit of any medium possible to convey his personal vision and
            live the principle that life itself is art.
            <br />
            <br /> He not only writes music and poetry, but also paints and does
            photography, graphic design and web design.Ken was born in San
            Diego, <br></br>and has been creating art for as long as he can remember. In
            the 3rd grade, he had a fascination with drawing mazes. <br></br>The theme of
            patterns and lines continued into his high school drawings, but
            became more complex during that time. <br></br>This is also when he started
            painting with tempra and watercolors.In recent years,<br></br> he has been
            making digital art collages, combining Facebook photos of friends,
            his own photos and paintings, and various Photoshop effects to
            create visually unique and stunning pieces.
            <br />
            <br />
            Ken currently lives in the San Bay Area and works in the
            tech industry, and travels the world to find inspiration.
          </h5>
        </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
