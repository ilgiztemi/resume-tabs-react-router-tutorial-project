import React from "react";

const History = ({tabs}) => {
  return (
    <section className="main">
      <h3>{tabs[0].title}</h3>
      <p>{tabs[0].info}</p>
    </section>
  );
};

export default History;
