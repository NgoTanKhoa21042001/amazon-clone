import React from "react";
import { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../type";
import FormattedPrice from "./FormattedPrice";
const Cartpayment = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details....
        </p>
      </div>
      {/* total */}
      <div className="flex items-center justify-between px-2 font-semibold">
        Total:
        <span className="font-bold text-lg">
          <FormattedPrice amount={totalAmount} />
        </span>
      </div>
      {/* button */}
      <button className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300">
        Proceed to Buy
      </button>
    </div>
  );
};

export default Cartpayment;
