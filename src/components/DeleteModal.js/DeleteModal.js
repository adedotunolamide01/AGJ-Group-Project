import { useNavigate, useParams } from "react-router-dom";
import useAppFetch from "../Appointment/ViewAppointment/useAppFetch";
import "./DeleteModal.css";

const DeleteModal = ({ setOpenModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:8001/datas/`;
  const { data: fetchedData } = useAppFetch(url + id);

  const handleDelete = () => {
    fetch(url + fetchedData.id, {
      method: "DELETE",
    }).then(() => {
      alert("appointment deleted");
      navigate("/viewappointment");
    });
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="close-modal">
          <button className="close" onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <div className="modal-title">Confirm Delete?</div>
        <div>
          <p className="modal-body">
            Are you sure you want to delete appointment?
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={() => setOpenModal(false)} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleDelete} className="modal-delete">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
