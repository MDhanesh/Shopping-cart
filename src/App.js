import React, { useState } from "react";
import "./App.css";
import Footer from "./foooter";
import Header from "./header";
import Navigation from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [initialValue, setInitial] = useState(0);
  const change1 = (a) => {
    console.log(a);
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
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $40.00 - $80.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(a) => change1(a)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Special Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(b) => change2(b)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Sale Item</h5>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(c) => change3(c)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Popular Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    $40.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(d) => change4(d)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Sale Item</h5>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(e) => change5(e)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $120.00 - $280.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(f) => change6(f)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Special Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(g) => change7(g)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Popular Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    $40.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={(h) => change8(h)}
                    >
                      Add to cart
                    </button>
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
