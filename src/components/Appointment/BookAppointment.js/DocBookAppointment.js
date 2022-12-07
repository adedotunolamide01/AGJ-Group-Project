import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavDoctor from '../../Navbar/NavDoctor';
import './BookAppointment.css';

import './BookAppointment.css';

const DocBookAppointment = () => {
  const [reason, setReason] = useState('');
  const [apptDate, setApptDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const datas = { reason, apptDate };
    setIsPending(true);
    fetch(`http://localhost:8001/datas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(datas),
    }).then(() => {
      setIsPending(false);
      alert('Your booking has been sent successfully.');
      navigate('/viewappointment');
    });

    setReason('');
    setApptDate(new Date().toISOString().substring(0, 10));
  };

  return (
    <div className="booking-container">
      <NavDoctor />
      <h1 className="booking-heading">Book your appointment!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Reason for appointment:</label>
        <textarea
          className="textarea"
          rows="4"
          cols="50"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="state your reason for appointment..."
          required
        ></textarea>

        <label>Choose date:</label>
        <input
          className="input"
          type="date"
          name="date:"
          value={apptDate}
          onChange={(e) => setApptDate(e.target.value)}
          required
        />

        <div className="book-btn">
          {!isPending && (
            <input className="submit" type="submit" value="Book Now" />
          )}
          {isPending && (
            <input
              disabled
              className="submit"
              type="submit"
              value="Booking..."
            />
          )}
        </div>
      </form>
      <div className="back-button">
        <Link to="/docappointmenthome">
          <button className="btn">
            <svg
              className="appointment-back-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
            </svg>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DocBookAppointment;
