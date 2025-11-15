import { Icon } from "@iconify/react";
import React from "react";

export default function ShopButton() {
  return (
    <button className="px-5.5 py-2.75 bg-dark-12 
    border border-dashed border-dark-25 text-white rounded-xl cursor-pointer
    relative hover:[&_>span]:w-1/2 hover:[&_>span]:h-1/2 transition-all duration-500
    max-lg:px-4 max-md:px-3 max-sm:px-2
    max-md:py-2 max-lg:text-sm max-md:text-xs">
      <p className="flex gap-1 items-center">
        <span>
          Shop Now
        </span>
        <Icon icon={"fluent:arrow-up-right-24-regular"} />
      </p>
      <span className="transition-all duration-400 border border-brawn-60 rounded-tl-xl order-2 grow-0 z-2 flex-none border-b-0 border-r-0 absolute top-[0.5px] left-[0.5px] w-[16.5px] h-[16.5px]"></span>
      <span className="transition-all duration-400 border border-brawn-60 rounded-tr-xl order-2 grow-0 z-2 flex-none border-b-0 border-l-0 absolute top-[0.5px] right-[0.5px] w-[16.5px] h-[16.5px]"></span>
      <span className="transition-all duration-400 border border-brawn-60 rounded-bl-xl order-2 grow-0 z-2 flex-none border-t-0 border-r-0 absolute bottom-[0.5px] left-[0.5px] w-[16.5px] h-[16.5px]"></span>
      <span className="transition-all duration-400 border border-brawn-60 rounded-br-xl order-2 grow-0 z-2 flex-none border-t-0 border-l-0 absolute bottom-[0.5px] right-[0.5px] w-[16.5px] h-[16.5px]"></span>
    </button>
  );
}
