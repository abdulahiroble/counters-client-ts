const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>
              Navbar{" "}
              <span className="badge rounded-pill bg-primary">
                Active counters: {props.totalCounters}
              </span>
              <span className="badge rounded-pill bg-primary m-2">
                Liked counters: {props.totalLikes}
              </span>
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
