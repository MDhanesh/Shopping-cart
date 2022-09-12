import React, { useState } from "react";
import Footer from "./foooter";
import Header from "./header";
import Navigation from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [initialValue, setInitial] = useState(0);
  //console.log(initialValue);
  const change1 = (a) => {
    //console.log(a);
    if (a.target.innerHTML === "Add to cart") {
      console.log(a.target.innerHTML);
      setInitial(initialValue + 1);
      a.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      a.target.innerHTML = "Add to cart";
    }
  };
  const change2 = (b) => {
    if (b.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      b.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      b.target.innerHTML = "Add to cart";
    }
  };
  const change3 = (c) => {
    if (c.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      c.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      c.target.innerHTML = "Add to cart";
    }
  };
  const change4 = (d) => {
    if (d.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      d.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      d.target.innerHTML = "Add to cart";
    }
  };
  const change5 = (e) => {
    if (e.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      e.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      e.target.innerHTML = "Add to cart";
    }
  };
  const change6 = (f) => {
    if (f.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      f.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      f.target.innerHTML = "Add to cart";
    }
  };
  const change7 = (g) => {
    if (g.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      g.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      g.target.innerHTML = "Add to cart";
    }
  };

  const change8 = (h) => {
    if (h.target.innerHTML === "Add to cart") {
      setInitial(initialValue + 1);
      h.target.innerHTML = "Remove from cart";
    } else {
      setInitial(initialValue - 1);
      h.target.innerHTML = "Add to cart";
    }
  };
  return (
    <div>
      {/* <!-- Navigation--> */}
      <Navigation initialValue={initialValue} />

      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder ">Iphone 12</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfStroke} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white">$1299</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center ">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(a) => change1(a)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Iphone13</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfStroke} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white"> $1399.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(b) => change2(b)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Iphone13 Pro Max</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white">$1655.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(c) => change3(c)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://m.media-amazon.com/images/I/61VK5q8L-oL._SL1024_.jpg"
                  alt=""
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Iphone14 Pro Max</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white">$1700</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(d) => change4(d)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Air Tag</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white">$25.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(e) => change5(e)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2021_11/story_4346/assets/1.jpeg?time=1637746818"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Macbook Air</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfStroke} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white"> $1999.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(f) => change6(f)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Macbook Pro 13</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white"> $1299.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(g) => change7(g)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 bg-info">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
                  alt="..."
                  style={{ height: "300px" }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Macbook Pro 14</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    {/* <!-- Product price--> */}
                    <h4 className="text-white"> $1399.00</h4>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={"#"}
                      onClick={(h) => change8(h)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}

export default App;
