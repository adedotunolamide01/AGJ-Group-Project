import React from "react";
import { Link } from "react-router-dom";

const Historylist = ({ datas, complain, diagnose, treatment }) => {
  return (
    <div className="create">
      <h2>{"health history"}</h2>
      {datas.map((list) => (
        <div className="blog-preview" key={list.id}>
          <h2>{list.date}</h2>
          {<p>{list.complain}</p>}
        </div>
      ))}
    </div>
  );
};

export default Historylist;
