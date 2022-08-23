import React from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from '../graphql/product';

function Card(props: any) {
  const { name, images, link } = props;

  return (
    <div className="card">
      <div className="card-img-actions mx-1 mt-1">
        <img className="card-img img-fluid" src={images[0]} alt="" />
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
            <h6 className="font-weight-semibold mr-2">{name}</h6>
            <span>
              Branched is on an ecstatic directly it. Put off continue you
              denoting returned juvenile
            </span>
          </div>

          <div className="list-icons list-icons-extended ml-auto">
            <a
              href={link}
              className="list-icons-item"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-link top-0"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface GalleryProps {
  filter: {
    type: 'product' | 'brand';
    brandId?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  productId: string;
  images: string[];
  createdAt: string;
  link: string;
  brand: {
    id: string;
    name: string;
  };
}

export default function Gallery(props: GalleryProps) {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
    variables: {
      brandId: '1',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    productData: { edges, pageInfo },
  } = data;

  const products = edges.map((edge: any) => {
    return edge.node;
  });

  return (
    <div className="row">
      {products.map((product: Product) => {
        return (
          <div
            className="col-sm-6 col-xl-3 col-md-4"
            key={`product-${product.id}`}
          >
            <Card
              name={product.name}
              images={product.images}
              link={product.link}
            />
          </div>
        );
      })}
    </div>
  );
}
