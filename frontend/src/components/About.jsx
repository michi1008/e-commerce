import React from "react";
import aboutImg from "../assets/artist-photo.jpg";
import serviceImg from "../assets/service.png";
import { Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div>
        <Row>
          <h1>About Artist</h1>
        </Row>
        <Row>
          <img
            src={aboutImg}
            alt="profile_picture"
            style={{ width: "40rem", margin: "3rem" }}
          />
        </Row>
        <Row>
          <h5>
            Ken Lange is a digital artist, guitarist, poet, singer/songwriter.
            He has an Associate of Arts in Music, and Bachelor of Arts in
            Linguistics and follows a creative life charged with art, music, and
            the pursuit of any medium possible to convey his personal vision and
            live the principle that life itself is art.
            <br />
            <br /> He not only writes music and poetry, but also paints and does
            photography, graphic design and web design.Ken was born in San
            Diego, and has been creating art for as long as he can remember. In
            the 3rd grade, he had a fascination with drawing mazes. The theme of
            patterns and lines continued into his high school drawings, but
            became more complex during that time. This is also when he started
            painting with tempra and watercolors.In recent years, he has been
            making digital art collages, combining Facebook photos of friends,
            his own photos and paintings, and various Photoshop effects to
            create visually unique and stunning pieces.
            <br />
            <br />
            Ken currently lives in the San Francisco Bay Area and works in the
            tech industry, and travels the world to find inspiration.
          </h5>
        </Row>
      </div>
      <div style={{marginTop: "2rem"}}>
        <Row>
          <h1>About Service</h1>
        </Row>
        <Row>
          <Col md={1}>
          <img
            src={serviceImg}
            alt="service"
            style={{ width: "4rem", color: "#8a949e"}}
          />
          </Col>
          
       <Col md={11}>
          <h5>
            {" "}
            Print out the digital art in your favorite size and get it delivered
            to your home!!
          </h5>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
