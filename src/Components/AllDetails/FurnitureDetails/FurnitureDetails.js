import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const FurnitureDetails = () => {
  const { furnitureId } = useParams();
  const [furnitures, setFurniture] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/furnitureCollection/${furnitureId}`)
      .then((res) => res.json())
      .then((data) => setFurniture(data));
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="detail-container p-5">
      <div className="w-100 mx-auto p-5">
        <div>
          <div className="col ">
            <div className="cardbox d-flex align-items-center justify-content-center">
              <div className="col-md-6 text-center">
                <img
                  src={furnitures.image}
                  alt=""
                  className=" w-100 img-fluid"
                />
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-text ps-5">{furnitures.name}</h4>
                </div>
                <div className="card-body">
                  <h4 className="card-text ps-5">Brand: {furnitures.brand}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text ps-5">Detail: {furnitures.feature}</p>
                </div>
                <div className="card-body">
                  <h4 className="card-text ps-5">Price: ${furnitures.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetails;
