import Image from "next/image";
import React from "react";
import logo from "../../images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import cartIcon from "../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../../type";
const Header = () => {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

  console.log(favoriteData);

  return (
    <div className="w-full h-20 bg-amazon_blue text-white text-lightText sticky top-0 z-50">
      <div className="h-full w-full flex items-center mx-auto justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <Link
          href="/"
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        {/* delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black flex items-center justify-center absolute right-0 text-2xl rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/* signin */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] text-xs text-gray-100 flex flex-col justify-center">
          <p>Hello, sign in</p>
          <p className="font-bold flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        {/* favorite */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] text-xs text-gray-100 flex flex-col justify-center">
          <p>Marked</p>
          <p className="font-bold">& Favorite</p>
        </div>
        {/* cart */}
        <Link
          href="/cart"
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            src={cartIcon}
            alt="cartImg"
            className="w-auto object-cover h-8"
          />
          <p className="text-xs font-bold mt-3">Cart</p>
          <span className="absolute left-[30px] top-2 text-amazon_yellow text-sm font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
