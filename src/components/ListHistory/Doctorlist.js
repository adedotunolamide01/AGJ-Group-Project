import React from 'react';
import './Doctorlist.css';

const Doctorlist = ({
  datas,
  date,
  complain,
  assement,
  issue,
  treatment,
  status,
}) => {
  return (
    <div className="table">
      <form onSubmit={''}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Complain</th>
              <th>Assement</th>
              <th>Issue</th>
              <th>Treatment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {datas.map((list) => (
              <tr key={list.id}>
                <td>{list.date}</td>
                <td>{list.complain}</td>
                <td>{list.assement}</td>
                <td>{list.issue}</td>
                <td>{list.treatment}</td>
                <td>{list.status}</td>
                <td>
                  <div className="action">
                    <div>
                      {
                        <input
                          className="edit"
                          type="submit"
                          value="Edit"
                        ></input>
                      }
                    </div>
                    <div>
                      {
                        <input
                          className="delet"
                          type="submit"
                          value="Delet"
                        ></input>
                      }
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </form>
    </div>
  );
};

export default Doctorlist;
