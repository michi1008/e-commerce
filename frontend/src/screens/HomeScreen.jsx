import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import About from "../components/About";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsAPISlice";
import { Image, Row, Col } from "react-bootstrap";
import featuredImg from "../assets/Halong-Bay-Reinvisioned.jpg"

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <div style={{marginTop:"3rem"}}>
        <Row>
        <Col md={8}>
           <Image src={featuredImg} alt="profile_picture" style={{width:"100%"}}/>
        </Col>
        <Col md={4}>
          <div>
          <h1>Digital Collage</h1>
          <p> These unique and eclectic artworks are created by assembling a collection of images, graphics and text into a visually compelling composition.</p>
          <p> Print out the digital art in "18 x 24" inches ("45.72 x 60.96" cm) and get it delivered to your home!!</p>
        </div>
        </Col>
        </Row>
        </div>
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div style={{marginTop: "5rem"}} >
          <h1  >Latest Products</h1>
          <Row className="d-flex align-items-stretch" >
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
      <About />
    </>
  );
};

export default HomeScreen;
