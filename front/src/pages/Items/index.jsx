import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAll } from "../../api/httprequest";
import { Link } from "react-router-dom";
import "./index.scss";

const Items = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allWatches = await getAll();
      setWatches(allWatches);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="items">
        <div className="item">
          <h2>Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna <br /> aliqua. Quis ipsum suspendisse
            ultrices gravida.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {watches &&
              watches.map((watch) => (
                <div className="col-xl-4 col-12 ">
                  <div className="card" key={watch._id}>
                    <img src={watch.image} alt="" />
                    <div className="texts">
                      <h3>
                        <Link
                          to={`/${watch._id}`}
                          style={{ color: "#444444", textDecoration: "none" }}
                        >
                          {watch.name}
                        </Link>
                      </h3>
                      <p>${watch.price}</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Items;
