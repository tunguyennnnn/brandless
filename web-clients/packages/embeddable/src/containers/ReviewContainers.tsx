import React from 'react';

interface Review {
  id: string;
  createdAt: string;
  content: string;
  media?: string;
}

const ReviewRow = (props: { review: Review }): JSX.Element => {
  const { content, createdAt } = props.review;
  return (
    <li className="media flex-column flex-lg-row">
      <div className="mr-lg-3 mb-2 mb-lg-0">
        <a href="#">
          <img
            src="../../../../global_assets/images/placeholders/placeholder.jpg"
            className="rounded-circle"
            width="38"
            height="38"
            alt=""
          />
        </a>
      </div>

      <div className="media-body">
        <div className="media-title">
          <a href="#" className="font-weight-semibold">
            William Jennings
          </a>
          <span className="text-muted ml-3">Just now</span>
        </div>

        <p>{content}</p>
      </div>
    </li>
  );
};

export const ReviewContainer = (props: {
  reviews: Array<{
    node: Review;
    cursor: string;
  }>;
}) => {
  console.log(props.reviews);
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <ul className="media-list">
            {props.reviews.map(({ node }) => (
              <ReviewRow key={node.id} review={node} />
            ))}
          </ul>
        </div>

        <hr className="m-0" />

        <div className="card-body">
          <h6 className="mb-3">Add comment</h6>
          {/* <div className="mb-3"></div>

          <div className="text-right">
            <button type="button" className="btn btn-primary">
              <i className="icon-plus22 mr-1"></i> Add comment
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
