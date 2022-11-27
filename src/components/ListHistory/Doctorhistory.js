import useFetch from '../Fetch/useFetch';
// import { useParams } from 'react-router-dom';
import './Doctorlist.css';

const Doctorhistory = () => {
  // const { id } = useParams();
  const {
    data: datas,
    isPending,
    error,
  } = useFetch('http://localhost:8000/datas');

  // const handleClick = () => {
  //   fetch('http://localhost:8000/datas' + datas.id, {
  //     method: 'DELETE',
  //   }).then(() => {});
  // };
  return (
    <div className="table">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {datas && (
        <div className="table">
          <form onSubmit={''}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Complain</th>
                  <th>Assement</th>
                  <th>Issue</th>
                  <th>Treatment</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                {datas.map((list) => (
                  <tr key={list.id}>
                    <td>{list.date}</td>
                    <td>{list.complain}</td>
                    <td>{list.assement}</td>
                    <td>{list.issue}</td>
                    <td>{list.treatment}</td>
                    <td>{list.status}</td>
                    <td>
                      <div className="action">
                        <div>
                          {
                            <input
                              className="edit"
                              type="submit"
                              value="Edit"
                            ></input>
                          }
                        </div>
                        <div>
                          {
                            <input
                              className="delet"
                              type="submit"
                              value="Delet"
                              // onClick={datas && handleClick(datas.id)}
                            ></input>
                          }
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </thead>
            </table>
          </form>
        </div>
      )}
    </div>
  );
};

export default Doctorhistory;
