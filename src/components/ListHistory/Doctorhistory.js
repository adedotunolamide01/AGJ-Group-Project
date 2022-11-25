import Doctorlist from './Doctorlist';
import useFetch from '../Fetch/useFetch';

const Doctorhistory = () => {
  const {
    data: datas,
    isPending,
    error,
  } = useFetch('http://localhost:8000/datas');
  return (
    <div className="table">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {datas && <Doctorlist datas={datas} />}
    </div>
  );
};

export default Doctorhistory;
