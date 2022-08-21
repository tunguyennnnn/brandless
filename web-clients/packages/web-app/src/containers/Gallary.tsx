import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="card-img-actions mx-1 mt-1">
        <img
          className="card-img img-fluid"
          src="../../../../global_assets/images/placeholders/placeholder.jpg"
          alt=""
        />
        <div className="card-img-actions-overlay card-img">
          <a
            href="../../../../global_assets/images/placeholders/placeholder.jpg"
            className="btn btn-outline-white border-2 btn-icon rounded-pill"
            data-popup="lightbox"
            data-gallery="gallery1"
          >
            <i className="icon-plus3"></i>
          </a>

          <a
            href="#"
            className="btn btn-outline-white border-2 btn-icon rounded-pill ml-2"
          >
            <i className="icon-link"></i>
          </a>
        </div>
      </div>

      <div className="card-body">
        <div className="d-flex align-items-start flex-nowrap">
          <div>
            <h6 className="font-weight-semibold mr-2">Unfeeling agreeable</h6>
            <span>
              Branched is on an ecstatic directly it. Put off continue you
              denoting returned juvenile
            </span>
          </div>

          <div className="list-icons list-icons-extended ml-auto">
            <a href="#" className="list-icons-item">
              <i className="icon-download top-0"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Gallery() {
  return (
    <div className="row">
      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>
      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>
      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>

      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>
      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>
      <div className="col-sm-6 col-xl-3 col-md-4">
        <Card />
      </div>
    </div>
  );
}
