import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Fashion.css";

const Fashion = (props) => {
  const { _id, name, image, price, feature } = props.fashion;
  const { handleDelete } = props;
  return (
    <div>
      <div className="col">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="cardbox fashion-card w-100 mx-auto"
        >
          <div className="card-body text-center">
            <h5 className="card-text">{name}</h5>
          </div>
          <div className="text-center">
            <img src={image} alt="" className="fashion-img img-fluid p-2" />
          </div>

          <div className="card-footer bg-transparent border-success d-flex justify-content-between px-5 py-3 border-0">
            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
            >
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger"
              >
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="">DELETE</span>
              </button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
              to={`fashionsOrder/${_id}`}
            >
              <button className="btn btn-success ">
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="">ORDER</span>
              </button>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
              to={`fashiondetails/${_id}`}
            >
              <button className="btn btn-info ">
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="">Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
