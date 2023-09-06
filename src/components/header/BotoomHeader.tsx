import { removeUser } from "@/store/nextSlice";
import { signOut } from "next-auth/react";
import { userInfo } from "os";
import React, { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import SideNav from "./SideNav";

interface RefEventProp {}

const BotoomHeader = () => {
  const ref = useRef();
  const { userInfo } = useSelector((state: StateProps) => state.next);
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    // ấn vào bên ngoài thì đóng menu
    document.body.addEventListener("click", (event: any) => {
      if (event.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, []);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut();
    dispatch(removeUser());
  };
  return (
    <>
      <ul className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
        <li
          onClick={() => setSideBar(true)}
          className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300"
        >
          <LuMenu className="text-xl" /> All
        </li>
        <li className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Todays Deals
        </li>
        <li className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Customer Service
        </li>
        <li className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Registry
        </li>
        <li className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Gift Cards
        </li>
        <li className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Sell
        </li>
        {userInfo && (
          <button
            onClick={handleLogout}
            className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
          >
            Sign Out
          </button>
        )}
      </ul>
      {/* Side Nav */}
      {sideBar && (
        <div className="w-full h-screen text-black fixed left-0 top-0 bg-amazon_blue bg-opacity-50 z-50">
          <div className="w-full h-full relative scroll-au">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[350px] h-full bg-white border-black border"
            >
              {/* top sidebar */}
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <RiAccountCircleFill />
                <h3 className="font-semibold text-lg tracking-wide">
                  Hello Sign In
                </h3>
              </div>
              <SideNav
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNav
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNav
                title="Program & Features"
                one="Gift Card"
                two="Amazon Lives"
                three="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                one="Your Accounts"
                two="Customer Services"
                three="Contact Us"
              />
              <span
                onClick={() => setSideBar(false)}
                className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <AiOutlineClose />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* Side Nav */}
    </>
  );
};

export default BotoomHeader;
