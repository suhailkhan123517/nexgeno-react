import React, { useEffect, useState } from "react";
import "./CursorG.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursorP"
        style={{ left: position.x, top: position.y }}
      ></div>
    </>
  );
};

export default Cursor;
