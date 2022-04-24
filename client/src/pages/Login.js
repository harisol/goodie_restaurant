import { useContext } from "react";
import { login } from "../services/auth.service";
import { AuthContext } from "../utils/contexts";

const Login = () => {
  const { setAuthed } = useContext(AuthContext);
  const authUser = (e) => {
    e.preventDefault();
    const username = document.getElementById('floatingInput').value;

    login(username).then(error => {
      if (error) {
        return alert(error);
      }

      setAuthed(true);
    });
  }

  return (
    <main className="form-signin text-center mt-5">
      <form onSubmit={authUser}>
        <h1 className="h3 mb-3 fw-normal">Goodie</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>

        <button className="w-100 mt-3 btn btn-lg btn-primary" type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
