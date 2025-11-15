import Image from "next/image";
import React from "react";
import DefaultButton from "../ui/default-button";
import ShopButton from "../ui/shop-button";
import DefaultTitle from "../ui/default-title";
import DefaultWrapper from "../ui/default-wrapper";

const highlights = [
  { stats: "1,500 +", context: "Fashion Products", borders: { b: true, r: true } },
  { stats: "50 +", context: "New arrivals every month.", borders: { r: true, b: true } },
  { stats: "30%", context: "OFF on select items.", borders: { r: true } },
  { stats: "95%", context: "Customer Satisfaction Rate", borders: { r: true } },
]

export default function HeroWelcome() {
  return (
    <div className="w-full rounded-lg overflow-hidden flex flex-col">
      <Image
        src={"/welcome-image-girl.webp"}
        width={1596}
        height={624}
        className="w-full flex-2 fadeDown"
        alt="imge"
      />
      <div
        className="w-full border-3 
      border-dark-15 border-dashed border-t-0 h-100 flex flex-1 relative"
      >
        <div className="flex-1 flex flex-col gap-3.5 p-20 max-lg:p-15 max-md:p-10 max-sm:p-5">
          <div className="flex gap-3.5">
            {["All", "Mens", "Womens", "Kids"].map((item) => (
              <DefaultButton key={item} label={item} />
            ))}
          </div>
          <DefaultTitle title="Elevate Your Style with StyleLoom" text={48} font="500" />
          <p className="text-grey-40 font-normal">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
        <span className="absolute -top-1/14 left-1/2 -translate-x-1/2">
          <ShopButton />
        </span>
        <div className="flex-1 flex flex-wrap">
          {highlights.map(h => (
            <DefaultWrapper p={{ p: 10 }} key={`${h.stats}-${h.context}`} flex={1} wFit noBorder={h.borders} noRounded flexBasis="50%">
              <div className="w-full h-full flex justify-center flex-col gap-2.5">
                <DefaultTitle title={h.stats} text={42} font="500" />
                <p className="text-grey-40 text-nowrap text-sm max-2xl:text-xs max-xl:text-[10px] max-lg:[8px]">{h.context}</p>
              </div>
            </DefaultWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
