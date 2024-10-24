import '../../App.css';
import { useState } from 'react';

import Add from '../../Components/Add/Add.tsx';
import Info from '../../Components/Info/Info.tsx';
import Order from '../../Components/Order/Order.tsx';

import { IProduct } from '../../types';

import tea from '../../assets/tea.jpg';
import coffee from '../../assets/coffee.svg';
import juice from '../../assets/juice.jpg';
import hamburger from '../../assets/hamburger.jpg';
import cheeseburger from '../../assets/cheeseburger.jpg';
import fries from '../../assets/fries.jpg';
import BackLink from '../../Components/BackLink/BackLink.tsx';

const FastFood = () => {
  const [price, setPrice] = useState<number>(0);

  const [products, setProducts] = useState<IProduct[]>([
    {name: 'Tea', count: 0, price: 100, image: tea},
    {name: 'Hamburger', count: 0, price: 210, image: hamburger},
    {name: 'Coffee', count: 0, price: 170, image: coffee},
    {name: 'Cheeseburger', count: 0, price: 220, image: cheeseburger},
    {name: 'Juice', count: 0, price: 120, image: juice},
    {name: 'Fries', count: 0, price: 180, image: fries}
  ]);

  const addProduct = (name: string): void => {
    const copyProducts: IProduct[] = products.map(product => {
      if (product.name === name) {
        return {
          ...product, count: product.count + 1
        };
      }
      return product;
    });

    setProducts(copyProducts);

    const currentProduct: IProduct | undefined = products.find(i => i.name === name);
    if (currentProduct) {
      setPrice(prevState => prevState + currentProduct.price);
    }
  };

  const removeProduct = (name: string): void => {
    const copyProducts: IProduct[] = products.map(product => {
      if (product.name === name && product.count !== 0) {
        return {
          ...product, count: product.count - 1
        };
      }
      return product;
    });

    setProducts(copyProducts);

    const currentProduct: IProduct | undefined = products.find(i => i.name === name);
    if (currentProduct && currentProduct.count > 0) {
      setPrice(prevState => prevState - currentProduct.price);
    }
  };

  const orderedProducts: IProduct[] = products.filter(prod => prod.count > 0);

  return (
    <>
      <div className="container mt-5 mb-4">
        <BackLink page="projects"/>
      </div>

      <div className="container d-flex justify-content-around align-items-xxl-start my-5">
        <div className="d-flex flex-column align-items-start p-3 bg-dark text-white w-50 rounded-3">
          {orderedProducts.length > 0 ? (
            orderedProducts.map((product) => {
              return product ? (
                <Order key={product.name} product={product} onRemove={() => removeProduct(product.name)}/>
              ) : null;
            })
          ) : (
            <h3>Order is empty! Add something from the menu</h3>
          )}
          {price > 0 ? (<h2 className="mt-4">Total: {price} KGS</h2>) : null}
        </div>

        <div className="menu-container">
          {products.map((product) => {
            return product ? (
              <div className="d-flex gap-2 bf-white p-2 rounded-4" key={product.name}>
                <Add product={product} onAdd={() => addProduct(product.name)}/>
                <Info product={product}/>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default FastFood;