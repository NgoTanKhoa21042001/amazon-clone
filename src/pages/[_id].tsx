/* eslint-disable jsx-a11y/alt-text */
import FormattedPrice from "@/components/FormattedPrice";
import { addtoCart } from "@/store/nextSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DynamicPage = () => {
  const [product, setProduct] = useState<any>({});
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // đi theo cái query tương ứng với product
    setProduct(router.query);
  }, [router.query]);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:py-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-100 rounded-lg">
        {/* Image */}
        <div className="flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden">
          <Image src={product.image} width={500} height={500} />
        </div>
        {/* Image */}
        {/* Content */}
        <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
          <p className="text-xs md:text-sm text-amazon_blue font-semibold mb-3">
            {product.category}_{product.brand}
          </p>
          <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
            {product.title}
          </h1>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Price:
              <span className="text-amazon_blue font-semibold">
                <FormattedPrice amount={product.price} />
              </span>
              <span className="ml-1 line-through">
                <FormattedPrice amount={product.oldPrice} />
              </span>
            </p>
            <p className="text-sm text-gra flex items-center gap-1">
              You saved:
              <span>
                <FormattedPrice amount={product.oldPrice - product.price} />
              </span>
            </p>
          </div>
          <button
            onClick={() =>
              dispatch(
                addtoCart({
                  _id: product._id,
                  brand: product.brand,
                  category: product.category,
                  description: product.description,
                  image: product.image,
                  isNew: product.isNew,
                  oldPrice: product.oldPrice,
                  price: product.price,
                  title: product.title,
                  quantity: 1,
                })
              )
            }
            className="w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow hover:text-amazon_blue duration-300 rounded-lg mt-5 text-base font-semibold"
          >
            add to cart
          </button>
        </div>
        {/* Content */}
      </div>
    </div>
  );
};

export default DynamicPage;
