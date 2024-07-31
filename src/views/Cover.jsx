import React from "react";
import { useNavigate } from "react-router-dom";

function Cover(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid">
        <div className="item">
          <button onClick={() => navigate("/Homeview")}>⬅</button>
        </div>
        <div className="item">
          <button onClick={() => navigate("/Homeview/Port/*")}>⬅</button>
        </div>
        <div className="item">
          <button onClick={() => navigate("/Homeview/intro/*")}>⬅</button>
        </div>
        <div className="item">
          <button onClick={() => navigate("/Homeview/intro/*")}>⬅</button>
        </div>
      </div>
    </>
  );
}

export default Cover;
