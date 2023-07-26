import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ url, text, icon }) {
  return (
    <>
      <Link to={url} className="button button_new">
        <span>{text}</span> <i className={icon} aria-hidden="true"></i>
      </Link>
    </>
  );
}
