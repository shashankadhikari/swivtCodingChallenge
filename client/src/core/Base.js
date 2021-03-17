import React from "react";
import Menu from "./Menu";
import "../style.css";
import Footer from "./Footer";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "container",
  children,
}) => (
  <div>
    <Menu />
    <div className="container">
      <h2 className="display-4">{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
    <Footer/>
  </div>

);

export default Base;
