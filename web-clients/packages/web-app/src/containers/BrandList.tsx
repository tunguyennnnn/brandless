import React from 'react';
import { useQuery } from '@apollo/client';

import { BRANDS_QUERY } from '../graphql/brands';

export interface BrandListProps {
  type?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export function Brand(props: Brand) {
  const { id, name, logo } = props;
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <a href="#">
              <img
                src={logo}
                className="rounded-circle"
                width="32"
                height="32"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="#" className="text-body font-weight-semibold">
              {name}
            </a>
            <div className="text-muted font-size-sm">
              <span className="badge badge-mark border-success mr-1"></span>
              15:00 - 16:00
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default function BrandList(props: BrandListProps) {
  const { loading, error, data } = useQuery(BRANDS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    brandData: { pageInfo, edges },
  } = data;

  const brands = edges.map((edge: any) => {
    return edge.node;
  });

  console.log('brands', brands);
  return (
    <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg align-self-start">
      <div className="sidebar-content">
        <div className="sidebar-section">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            <li className="nav-item">
              <a href="index.html" className="nav-link active">
                <i className="icon-home4"></i>
                <span>Names</span>
              </a>
            </li>
            <li className="nav-item nav-item-submenu">
              <table className="table text-nowrap">
                <tbody>
                  {brands.map((brand: Brand) => {
                    return (
                      <Brand
                        key={`brand-${brand.id}`}
                        id={brand.id}
                        name={brand.name}
                        logo={brand.logo}
                      />
                    );
                  })}
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
