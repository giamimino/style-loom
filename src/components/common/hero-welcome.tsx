import Image from "next/image";
import React from "react";
import DefaultButton from "../ui/default-button";

export default function HeroWelcome() {
  return (
    <div className="w-full rounded-lg overflow-hidden flex flex-col">
      <Image
        src={"/welcome-image-girl.webp"}
        width={1596}
        height={624}
        className="w-full flex-2"
        alt="imge"
      />
      <div className="w-full border-3 p-20 max-lg:p-15 max-md:p-10 max-sm:p-5 border-dark-15 border-dashed border-t-0 h-100 flex flex-1">
        <div className="flex-1 flex flex-col gap-3.5">
          <div className="flex gap-3.5">
            {["All", "Mens", "Womens", "Kids"].map((item) => (
              <DefaultButton
                key={item}
                label={item}
              />
            ))}
          </div>
          <h1 className="font-medium text-white text-5xl">
            Elevate Your Style with StyleLoom
          </h1>
          <p className="text-grey-40 font-normal">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
        <div className="flex-1">
          
        </div>
      </div>
    </div>
  );
}
