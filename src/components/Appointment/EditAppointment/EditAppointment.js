import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAppFetch from "../ViewAppointment/useAppFetch";
import "./EditAppointment.css";

const EditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: fetchedData,
    isPending,
    error,
  } = useAppFetch(`http://localhost:5000/datas/` + id);

  const [reason, setReason] = useState("");
  const [apptDate, setApptDate] = useState("");
  const url = `http://localhost:5000/datas/`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const datas = { reason, apptDate };

    fetch(url + fetchedData.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(datas),
    }).then(() => {
      alert("Your appointment has been updated.");
      navigate("/viewappointment");
    });
  };

  useEffect(() => {
    if (!fetchedData) {
      setReason("");
      setApptDate("");
    } else {
      setReason(fetchedData.reason);
      setApptDate(fetchedData.apptDate);
    }
  }, [fetchedData]);

  const handleDelete = () => {
    fetch(url + fetchedData.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/viewappointment");
    });
  };

  return (
    <div className="edit-appointment-container">
      <h2>Edit appointment - {id}</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {fetchedData && (
        <div>
          <form onSubmit={handleSubmit} className="form">
            <label>Reason for appointment:</label>
            <textarea
              className="textarea"
              rows="4"
              cols="50"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>

            <label>Choose date:</label>
            <input
              className="input"
              type="date"
              name="date:"
              value={apptDate}
              onChange={(e) => setApptDate(e.target.value)}
            />

            <div className="edit-btn">
              <Link to="/viewappointment">
                <button className="cancel">Cancel</button>
              </Link>
              <input className="save" type="submit" value="Save" />
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditAppointment;
