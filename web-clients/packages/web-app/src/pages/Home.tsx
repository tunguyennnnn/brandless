import React from 'react';
import Gallery from '../containers/Gallary';
import SideBar from '../containers/SideBar';

function Home() {
  return (
    <div>
      <div className="order-2">
        <div className="navbar-search d-flex align-items-center py-3 py-lg-0">
          <div className="form-group-feedback form-group-feedback-left flex-grow-1">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="form-control-feedback">
              <i className="icon-search4 text-white opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <SideBar />
        <div className="content-wrapper"></div>
        <div className="content">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
