import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CosmeticDetails = () => {
  const { cosmeticId } = useParams();
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/CosmeticCollection/${cosmeticId}`)
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="detail-container">
      <div className="w-75 mx-auto">
        <div className="text-center p-5">
          <h1 style={{ color: "salmon" }}>
            Detail Information about {cosmetics?.name}
          </h1>
        </div>

        <div>
          <div className=" d-md-flex align-items-center justify-content-center">
            <div className="col-md-6 col-sm-1 cardbox text-center">
              <img
                src={cosmetics.image}
                alt=""
                className="w-75 img-fluid p-3"
              />
            </div>

            <div className="col-md-6 col-sm-1 cardbox">
              <div className="card-body">
                <h4 className="card-text">{cosmetics.name}</h4>
              </div>
              <div className="card-body">
                <h4 className="card-text">{cosmetics.feature}</h4>
              </div>
              <div className="card-body">
                <h4 className="card-text">Price: ${cosmetics.price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticDetails;
