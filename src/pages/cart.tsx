/* eslint-disable react-hooks/rules-of-hooks */
import Cartpayment from "@/components/Cartpayment";
import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import React from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../type";

const cart = () => {
  // lấy product trong cart
  const { productData } = useSelector((state: StateProps) => state.next);
  console.log(productData);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid xl:grid-cols-5 gap-10 py-4">
      <div className="bg-white col-span-4 rounded-lg p-4">
        <div className="flex items-center justify-between border-b-gray-400 border-b-[1px] pb-1">
          <p className="text-2xl font-semibold text-amazon_blue">
            Shopping Cart
          </p>
          <p className="text-lg font-semibold text-amazon_blue">Subtotal</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          {productData.map((item: StoreProduct) => (
            <div key={item._id}>
              <CartProduct item={item} />
            </div>
          ))}
          <ResetCart />
        </div>
      </div>
      {/* item right */}
      <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
        <Cartpayment />
      </div>
    </div>
  );
};

export default cart;
