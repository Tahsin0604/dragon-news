/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Rating from "react-rating";
import moment from "moment";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, details, _id, image_url, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center gap-3">
        <Image
          style={{ height: "44px", width: "44px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="flex-grow-1">
          <h6 style={{ margin: 0 }} className="text-secondary">
            {author.name}
          </h6>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>

        <div>
          <FaRegBookmark
            style={{ height: "40px", width: "20px", cursor: "pointer" }}
          ></FaRegBookmark>
          <FaShareAlt
            style={{ height: "40px", width: "20px", cursor: "pointer" }}
            className="ms-3"
          ></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 200 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 200)}.........
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar className="text-warning"></FaStar>}
            readonly
          />
          <span></span>
        </div>
        <p>
          <FaEye
            className="me-2"
            style={{ height: "40px", width: "20px" }}
          ></FaEye>
          {total_view}
        </p>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
