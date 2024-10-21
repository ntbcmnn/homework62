import React from 'react';
import { IProduct } from '../../types';

interface IInfo {
  product: IProduct;
}

const Info: React.FC<IInfo> = ({product}) => {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center gap-2">
      <h4 className="p-0 m-0 fs-5">{product.name}</h4>
      <p className="p-0 m-0">{product.price} KGS</p>
    </div>
  );
};

export default Info;