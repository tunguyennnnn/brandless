import React from 'react';

export default function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark navbar-static">
      <div className="d-flex flex-1 d-lg-none">
        <button
          type="button"
          className="navbar-toggler sidebar-mobile-main-toggle"
        >
          <i className="icon-transmission"></i>
        </button>
        <button
          data-target="#navbar_search"
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
        >
          <i className="icon-search4"></i>
        </button>
      </div>

      <div className="collapse navbar-collapse order-2 order-lg-1">
        <div className="navbar-search d-flex align-items-center py-3 py-lg-0">
          <div className="form-group-feedback form-group-feedback-left flex-grow-1">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="form-control-feedback">
              <i className="icon-search4 text-white opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
