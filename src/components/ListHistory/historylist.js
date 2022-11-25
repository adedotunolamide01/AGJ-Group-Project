import React from "react";
import "./historylist.css";
const Historylist = ({
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
      <h2>Medical History</h2>
      {datas.map((list) => (
        <div className="blog-preview" key={list.id}>
          <h2>Date: {list.date}</h2>
          {<p>Complain: {list.complain}</p>}
          {<p>Status: {list.status}</p>}
        </div>
      ))}
    </div>
  );
};

export default Historylist;
