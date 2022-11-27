import "./HealthInfo.css";
import { Link } from "react-router-dom";

const HealthInformation = () => {
  return (
    <div className="healthinfo-container">
      <h1 className="healthinfo-heading">Health Information page</h1>
      <div className="healthinfo-quote">
        <q>
          When you have your health, you have everything. When you do not have
          your health, nothing else matters at all.
        </q>
        <blockquote>Augusten Burroughs</blockquote>
      </div>
      <div className="healthinfo-details">
        <div className="healthinfo-info">
          <Link className="link" to="/diabetes">
            Diabetes
            <svg
              className="healthinfo-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H96V32H64zm64 0V480H448V32H128zM512 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H480V480h32zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V288H208c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16h48V176z" />
            </svg>
          </Link>
        </div>
        <div className="healthinfo-info">
          <Link className="link" to="/cancer">
            Cancer
            <svg
              className="healthinfo-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
          </Link>
        </div>
        <div className="healthinfo-info">
          <Link className="link" to="/stroke">
            Stroke
            <svg
              className="healthinfo-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zM112 144c0-8.8 7.2-16 16-16h48V80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240v48c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16V192H128c-8.8 0-16-7.2-16-16V144z" />
            </svg>
          </Link>
        </div>
      </div>
      <p className="healthinfo-bottom-note">
        Click to learn more about these medical health conditions, and how you
        can live healthy.
      </p>

      <div className="healthinfo-button">
        <Link>
          <button className="btn">
            <svg
              className="healthinfo-back-svg"
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

export default HealthInformation;
