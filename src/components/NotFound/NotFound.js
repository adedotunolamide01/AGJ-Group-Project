import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="Not-found-container">
      <h2 className="not-found-heading">404 Error!</h2>
      <p>Page not found!</p>
      <Link className="back-to-home" to="/home">
        Click to go back to front page
      </Link>
    </div>
  );
};

export default NotFound;
