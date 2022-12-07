import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DeleteModal from "../../DeleteModal.js/DeleteModal";
import Patiencenav from "../../Navbar/Patiencenav";
import useAppFetch from "../ViewAppointment/useAppFetch";
import "./EditAppointment.css";

const EditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: fetchedData,
    isPending,
    error,
  } = useAppFetch(`http://localhost:8001/datas/` + id);

  const [reason, setReason] = useState("");
  const [apptDate, setApptDate] = useState("");
  const url = `http://localhost:8001/datas/`;
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUpdate = () => {
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

  return (
    <div>
      {openModal && <DeleteModal setOpenModal={setOpenModal} />}
      <div className="edit-appointment-container">
        <Patiencenav />
        <h2>Edit appointment</h2>
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
                <button onClick={handleUpdate} className="save" type="submit">
                  Save
                </button>
                <button
                  className="delete-btn"
                  onClick={() => setOpenModal(true)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAppointment;
