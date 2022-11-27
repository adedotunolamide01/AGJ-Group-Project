import Prescriptionlist from "../ListHistory/Prescriptionlist ";
import useFetch from "../Fetch/useFetch";

const Prescription = () => {
  const {
    data: datas,
    isPending,
    error,
  } = useFetch("http://localhost:8000/datas");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {datas && <Prescriptionlist datas={datas} />}
    </div>
  );
};

export default Prescription;
