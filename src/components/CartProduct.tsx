import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface CartProductsProps {
  item: Item;
}
const CartProduct = ({ item }: CartProductsProps) => {
  return (
    <div className="bg-gray-100 rounded-lg flex items-center px-2 gap-4">
      <Image
        src={item.image}
        width={150}
        height={150}
        className=""
        alt="productImage"
      />
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-sm text-gray-600">
          Unit price:{" "}
          <span className="font-semibold text-amazon_blue">
            <span>
              <FormattedPrice amount={item.price} />
            </span>
          </span>
        </p>
        <div className="flex items-center gap-6">
          {/* Plus - Minus quantity */}
          <div className="flex mt-1 items-center justify-between border border-gray-300 px-4 rounded-full w-28 shadow-lg">
            <span className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300">
              {" "}
              <LuPlus />
            </span>
            <span>{item.quantity}</span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300">
              {" "}
              <LuMinus />
            </span>
          </div>
          {/* Plus - Minus quantity */}
          <div className="flex items-center text-sm hover:text-red-600 cursor-pointer duration-300 text-gray-400 font-medium">
            <IoMdClose className="mt-[2px]" /> <p>remove</p>
          </div>
        </div>
      </div>
      <span className="text-lg font-semibold text-amazon_blue">
        <FormattedPrice amount={item.price * item.quantity} />
      </span>
    </div>
  );
};

export default CartProduct;
