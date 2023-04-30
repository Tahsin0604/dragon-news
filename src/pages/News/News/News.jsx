/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { image_url, details, category_id, title } = news;
  console.log(news);
  return (
    <div>
      <Card style={{ border: 0 }}>
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title className="my-4">{title}</Card.Title>
          <Card.Text className="mb-4">{details}</Card.Text>

          <Link to={`/categories/${category_id}`} className=" btn-danger btn">
            <FaArrowLeft></FaArrowLeft> all news in this categories
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
