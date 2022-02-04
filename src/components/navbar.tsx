import React from 'react';

type Props = {
  totalCounters: number,
  totalLikes: number,
};

const Navbar:React.FC<Props> = ({totalCounters,totalLikes}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>
              Navbar{" "}
              <span className="badge rounded-pill bg-primary">
                Active counters: {totalCounters}
              </span>
              <span className="badge rounded-pill bg-primary m-2">
                Liked counters: {totalLikes}
              </span>
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
