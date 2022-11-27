import Historylist from './historylist';
import useFetch from '../Fetch/useFetch';

const History = () => {
  const {
    data: datas,
    isPending,
    error,
  } = useFetch('http://localhost:8000/datas');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {datas && <Historylist datas={datas} />}
    </div>
  );
};

export default History;
