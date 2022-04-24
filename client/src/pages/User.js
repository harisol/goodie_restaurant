import { useEffect, useState } from "react";
import { listUser } from "../services/user.service";
import { formatDate } from "../utils/helpers";

const User = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    listUser().then(data => {
      if (typeof data === 'string') {
        return alert(data);
      }

      setList(data.users || []);
    })
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List User</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row, i) => (
              <tr key={`list-user-${i}`}>
                <td>{i + 1}</td>
                <td>{row.username}</td>
                <td>{row.Role.rolename}</td>
                <td>{formatDate(row.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
