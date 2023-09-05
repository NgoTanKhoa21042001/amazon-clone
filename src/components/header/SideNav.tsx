import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

interface SideProp {
  title: string;
  one: string;
  two: string;
  three: string;
}

const SideNav = ({ title, one, two, three }: SideProp) => {
  return (
    //   top side bar
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-semibold mb-1 px-6">{title}</h3>
      <ul>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
          <span>
            <MdKeyboardArrowRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}{" "}
          <span>
            <MdKeyboardArrowRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}{" "}
          <span>
            <MdKeyboardArrowRight />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
