import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const FashionDetails = () => {
  const { fashionId } = useParams();
  const [fashions, setFashion] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/fashionCollection/${fashionId}`)
      .then((res) => res.json())
      .then((data) => setFashion(data));
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="detail-container">
      <div className="w-75 mx-auto">
        <div>
          <div className="col ">
            <div className="cardbox d-md-flex align-items-center justify-content-center">
              <div className="col-md-6 text-center">
                <img
                  src={fashions.image}
                  alt=""
                  className=" w-100 img-fluid p-5"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-text px-5" style={{ color: "tomato" }}>
                    {fashions.name}
                  </h3>
                </div>
                {/* <div className="card-body">
                  <h4 className="card-text px-5">
                    Color: {fashions.feature.color}
                  </h4>
                </div>
                <div className="card-body">
                  <h4 className="card-text px-5">
                    Material: {fashions.feature.material}
                  </h4>
                </div>
                <div className="card-body">
                  <h4 className="card-text px-5">
                    Composition: {fashions.feature.composition}
                  </h4>
                </div> */}
                <div className="card-body">
                  <h4 className="card-text px-5">Price: ${fashions.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionDetails;
