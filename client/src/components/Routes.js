import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/* component */
import Navigation from '../components/Navigation';
import User from '../pages/User';
import { AuthContext } from '../utils/contexts';
import { useContext } from 'react';
import { eraseCookie } from '../utils/helpers';
import { cookieKeyAuth } from '../utils/config';

const Routes = () => {
  const { setAuthed } = useContext(AuthContext);

  const signOut = (e) => {
    e.preventDefault();
    if (!window.confirm('Are you sure?')) return;

    eraseCookie(cookieKeyAuth);
    setAuthed(false);
  }

  return (
    <Router>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          Goodie
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <span className="px-3" style={{ color: '#fff' }}>
              Hello, Haris
            </span>
            <a className="nav-link px-3" href="/" onClick={signOut} style={{ display: 'inline' }}>
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <Navigation />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>
            <Switch>
              {/**
               * this is default route and must be appended with 'exact' attributes,
               * otherwise all other routes will be considered as default routes
               */}
              <Route exact path="/">
                <Redirect to="/user" />
              </Route>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/role">
                <User />
              </Route>
              {/* <Route exact path={["/list-forum", "/forums"]} component={ForumList} /> */}
              {/* <Route path="/create-forum" render={(props) => <Forum {...props} myprops={'someValue'} />} /> */}
              {/* <Route path="/forum/:id" component={Forum} /> */}
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
