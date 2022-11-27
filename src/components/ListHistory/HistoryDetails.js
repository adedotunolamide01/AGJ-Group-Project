import { useParams } from 'react-router-dom';
import useFetch from '../Fetch/useFetch';
import Doctornav from '../Navbar/Doctornav';
import './historydetails.css';

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
        <h2>history details - {id}</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {datas && (
          <article>
            <h2>Date:{datas.date}</h2>
            <p>Complain:{datas.complain}</p>
            <p>Assement:{datas.assement}</p>
            <p>Issue:{datas.issue}</p>
            <p>treatment:{datas.treatment}</p>
            <p>Status:{datas.status}</p>
          </article>
        )}
      </div>
    </div>
  );
};

export default HistoryDetails;
