import React, { useState } from "react";
import Navigations from "./navigation";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  const [initialValue, setInitialValue] = useState(0);
  return (
    <div>
      {/* <!-- Navigation--> */}
      <Navigations initialValue={initialValue} />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}
      <Card setInitialValue={setInitialValue} initialValue={initialValue} />
      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}
