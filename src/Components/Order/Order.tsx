import React from 'react';
import { IProduct } from '../../types';
import './Order.css';

interface IOrder {
  product: IProduct;
  onRemove: (name: string) => void;
}

const Order: React.FC<IOrder> = ({product, onRemove}) => {
  return (
    <div className="container d-flex flex-column align-items-start border-bottom border-white mt-3">
      <p className="fw-bold">{product.name}</p>
      <div className="d-flex gap-2 align-items-center justify-content-between">
        <p className="fw-bold">x{product.count}</p>
        <button type="button" className="remove-btn" onClick={() => onRemove(product.name)}></button>
      </div>
      <p className="fw-bold">= {product.price * product.count} KGS</p>
    </div>
  );
};

export default Order;