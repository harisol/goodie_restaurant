import { useEffect, useState } from 'react';
import { listOutlet } from '../services/outlet.service';
import { formatDate } from '../utils/helpers';

const Outlet = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    listOutlet().then((data) => {
      if (typeof data === 'string') {
        return alert(data);
      }

      setList(data.outlets || []);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List Outlet</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No Data
                </td>
              </tr>
            ) : (
              list.map((row, i) => (
                <tr key={`list-outlet-${i}`}>
                  <td>{i + 1}</td>
                  <td>{row.name}</td>
                  <td>{formatDate(row.created_at)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Outlet;
