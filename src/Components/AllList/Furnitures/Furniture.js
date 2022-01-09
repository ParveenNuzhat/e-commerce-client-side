import React from "react";
import { Link } from "react-router-dom";
import "./Furniture.css";

const Furniture = (props) => {
  const { _id, name, image, brand, price, feature } = props.furniture;
  const { handleDelete } = props;
  return (
    <div>
      <div className="col h-100">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="cardbox w-100 card furniture-card"
        >
          <div className="card-body text-center mt-2">
            <h4 className="card-text">{name}</h4>
          </div>
          <div>
            <img
              src={image}
              alt=""
              className="w-100 p-5 img-fluid furniture-img"
            />
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
                <span className="ps-1"> DELETE</span>
              </button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
              to={`furnitureOrder/${_id}`}
            >
              <button className="btn btn-success ">
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="ps-1"> ORDER</span>
              </button>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className="link d-flex justify-content-center"
              to={`furnituredetails/${_id}`}
            >
              <button className="btn btn-info ">
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="ps-1"> Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
