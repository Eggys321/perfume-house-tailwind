import React from "react";
import { products } from "../product";

const Products = () => {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {products.map((product) => {
          const { title, image, id, price } = product;
          return (
              <div key={id} className="card bg-base-100 shadow-lg">
                <figure>
                  <img src={image} alt={title} className="w-full"  loading="lazy" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{title} </h2>
                  <p className="text-[#8D34FF]">#{price}</p>
                  <div className="card-actions">
                    <button className="btn bg-[#8D34FF] text-[#FEFEFF] w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </main>
    </>
  );
};

export default Products;
