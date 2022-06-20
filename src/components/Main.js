import React, { useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <Link className="link" to={"/"}>History</Link>
      <Link className="link" to={"/vision"}>Vision</Link>
      <Link className="link" to={"/goals"}>Goals</Link>
    </div>
  );
};

export default Main;
