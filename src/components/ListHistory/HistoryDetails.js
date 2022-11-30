import { useParams } from 'react-router-dom';
import useFetch from '../Fetch/useFetch';
import Doctornav from '../Navbar/Doctornav';
import './historydetails.css';
import { Link } from 'react-router-dom';

const HistoryDetails = () => {
  const { id } = useParams();
  const {
    data: datas,
    error,
    isPending,
  } = useFetch('http://localhost:8000/datas/' + id);

  return (
    <div className="history-details">
      <div className="create">
        <Doctornav />
      </div>
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {datas && (
          <article>
            <h2>
              <strong>Date: </strong> {datas.date}
            </h2>
            <p>
              <strong>Complain: </strong> {datas.complain}
            </p>
            <p>
              <strong>Assement: </strong> {datas.assement}
            </p>
            <p>
              <strong>Issue: </strong> {datas.issue}
            </p>
            <p>
              <strong>Treatment: </strong> {datas.treatment}
            </p>
            <p>
              <strong>Status: </strong> {datas.status}
            </p>
            <Link to="../medicalhistory">
              <li>
                <a href="../medicalhistory">
                  <button>{'< < BACK'} </button>
                </a>
              </li>
            </Link>
          </article>
        )}
      </div>
    </div>
  );
};

export default HistoryDetails;
