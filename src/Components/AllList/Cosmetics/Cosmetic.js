import React from "react";
import { Link } from "react-router-dom";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { _id, name, image, brand, price, feature } = props.cosmetic;
  const { handleDelete } = props;

  return (
    <div className="electronic-container">
      <div className="d-flex">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="col-md-7 cardbox card collection-card border-0"
        >
          <div className="text-center">
            <img src={image} alt="" className="collection-img p-3" />
          </div>

          <div className="card-footer bg-transparent border-0 d-flex justify-content-between p-3">
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
              to={`cosmeticOrder/${_id}`}
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
              to={`cosmeticdetails/${_id}`}
            >
              <button className="btn btn-info ">
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  class="fa fa-cart-plus"
                ></i>
                <span className="ps-1">Details</span>
              </button>
            </Link>
          </div>
        </div>

        <div
          className="col-md-5 card cardbox collection-card border-0 justify-content-center"
          style={{ backgroundColor: "rgb(200,235,241)" }}
        >
          <div>
            <h4 className="card-text ps-3">{name}</h4>
            <p className="card-text ps-3">Brand: {brand}</p>
            <p className="card-text ps-3">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
