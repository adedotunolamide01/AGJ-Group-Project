import React from "react";
import "./historylist.css";
const Prescriptionlist = ({
  datas,
  date,
  complain,
  assement,
  issue,
  treatment,
  status,
}) => {
  return (
    <div className="phistory">
      <h2>Presciption History</h2>
      {datas.map((list) => (
        <div className="blog-preview" key={list.id}>
          <h2>Date: {list.date}</h2>
          {<p> {list.treatment}</p>}
        </div>
      ))}
    </div>
  );
};

export default Prescriptionlist;
