import React from "react";
import { products } from "../product";

const Cart = () => {
  // console.log(products.slice(0,3));
  const slicedProducts = products.slice(0,3);
  
  return (
    <>
      <main className="border min-h-full p-6">
        <h2>My Cart Preview</h2>
        <div className="flex lg:flex-col gap-10 flex-wrap">

        {slicedProducts.map((product)=>{
          return(
            <div key={product.id} className="flex items-center gap-6">
              <div>

              <img src={product.image} alt="" className="w-30"/>
              </div>
              <div>
                <h2> {product.title} </h2>
                <div>

                <p># {product.price} </p>
                <div>
                  <button>remove</button>
                </div>
                </div>

              </div>
            </div>
          )
        })}
        </div>
      
      </main>
    </>
  );
};

export default Cart;
