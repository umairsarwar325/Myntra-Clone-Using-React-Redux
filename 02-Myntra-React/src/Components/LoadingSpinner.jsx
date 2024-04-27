import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
    <center className={`d-flex justify-content-center `} style={{height:"3rem",width:"3rem"}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
    </div>
  );
};

export default LoadingSpinner;
