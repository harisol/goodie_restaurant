import { useEffect, useState } from 'react';
import { listRole } from '../services/role.service';
import { formatDate } from '../utils/helpers';

const Role = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    listRole().then((data) => {
      if (typeof data === 'string') {
        return alert(data);
      }

      setList(data.roles || []);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List Role</h1>
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
                <tr key={`list-role-${i}`}>
                  <td>{i + 1}</td>
                  <td>{row.rolename}</td>
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

export default Role;
