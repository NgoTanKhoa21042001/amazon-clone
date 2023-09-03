import Image from "next/image";
import React from "react";
import { ProductProps } from "../../type";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/store/nextSlice";
const Product = ({ productData }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group shadow-lg overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              {" "}
              <Image
                src={image}
                alt="productImage"
                width={300}
                height={300}
                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />{" "}
              <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col group-hover:translate-x-0 duration-300 transition-transform translate-x-20">
                <span className="w-full h-full border-b-[1px] text-lg border-b-gray-400 flex items-center justify-center hover:bg-amazon_yellow cursor-pointer duration-300">
                  <HiShoppingCart />
                </span>
                <span className="w-full h-full border-b-[1px] text-lg border-b-gray-400 flex items-center justify-center hover:bg-amazon_yellow cursor-pointer duration-300">
                  <FaHeart />
                </span>
              </div>
              {/* Price */}
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue font-medium tracking-wide text-xs animate-bounce">
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 px-4 py-3">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              {/* tối đa 120 từ */}
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addtoCart({
                      _id: _id,
                      title: title,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      quantity: 1,
                    })
                  )
                }
                className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-amazon_blue"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Product;
