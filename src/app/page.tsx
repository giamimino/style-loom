"use client";
import HeroWelcome from "@/components/common/hero-welcome";
import DefaultButton from "@/components/ui/default-button";
import DefaultTitle from "@/components/ui/default-title";
import DefaultWrapper from "@/components/ui/default-wrapper";
import IconWrapper from "@/components/ui/icon-wrapper";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const whyus = [
  {
    icon: "solar:star-bold",
    title: "Passionate Craftsmanship",
    context:
      "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
    noBorder: { t: true, l: true },
  },
  {
    icon: "mdi:checkbox-multiple-blank-circle",
    title: "Fashion Forward",
    context:
      "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
    noBorder: { t: true, l: true },
  },
  {
    icon: "ph:mask-happy-fill",
    title: "Customer-Centric Approach",
    context:
      "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
    noBorder: { t: true, l: true, r: true },
  },
  {
    icon: "ix:trophy-filled",
    title: "Global Inspiration",
    context:
      "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
    noBorder: { t: true, l: true, b: true },
  },
  {
    icon: "fa7-solid:magic-wand-sparkles",
    title: "Empowering Your Style",
    context:
      "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
    noBorder: { t: true, l: true, b: true },
  },
  {
    icon: "streamline-flex:brightness-4-remix",
    title: "Sustainable Practices",
    context:
      "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
    noBorder: { t: true, l: true, b: true, r: true },
  },
];

const process = [
  {
    title: "Discover Trends",
    context:
      "Explore our curated collection of over 1000 styles, spanning global fashion trends.",
    noBorder: { l: true, b: true, t: true },
  },
  {
    title: "Effortless Navigation",
    context:
      "Intuitive filters and categories help you find the perfect pieces tailored to your style.",
    noBorder: { l: true, b: true, t: true },
  },
  {
    title: "Secure Checkout",
    context:
      "Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.",
    noBorder: { l: true, b: true, t: true },
  },
  {
    title: "Unbox Happiness",
    context:
      "Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.",
    noBorder: { l: true, b: true, r: true, t: true },
  },
];

export default function Home() {
  const [lastestProducts, setLastestProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState([
    { cat: "All", isActive: false },
    { cat: "Mens", isActive: false },
    { cat: "Womens", isActive: true },
    { cat: "Kids", isActive: false },
  ]);

  function changeActivity(cat: string) {
    setCategories((prev) =>
      prev.map((item) =>
        item.cat === cat
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }

  return (
    <div className="py-14 max-lg:py-12 max-md:py-10 max-sm:py-6 px-38 max-lg:px-28 max-md:px-18 max-sm:px-8 flex flex-col gap-16">
      <HeroWelcome />
      <DefaultWrapper>
        <div className="flex flex-col gap-3.5 p-14">
          <DefaultTitle
            title="Crafting Trends, Inspiring Confidence"
            font="500"
            text={38}
          />
          <p className="text-grey-40">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability.
          </p>
        </div>
        <DefaultWrapper noBorder={{ r: true, b: true, l: true }} noRounded>
          <div className="grid grid-cols-3">
            {whyus.map((w) => (
              <DefaultWrapper
                key={w.title}
                wFit
                noRounded
                noBorder={w.noBorder}
                p={{ p: 7.5 }}
              >
                <IconWrapper icon={w.icon} />
                <div className="flex flex-col gap-4">
                  <DefaultTitle title={w.title} text={24} font="500" />
                  <p className="text-grey-40">{w.context}</p>
                </div>
              </DefaultWrapper>
            ))}
          </div>
        </DefaultWrapper>
      </DefaultWrapper>
      <DefaultWrapper rel noOverflow>
        <div className="flex flex-col gap-3.5 p-14">
          <DefaultTitle
            title="Navigating the StyleLoom Fashion Journey."
            text={38}
            font="500"
          />
          <p className="text-grey-40">
            At StyleLoom, we've designed a straightforward shopping experience
            to make fashion accessible.
          </p>
        </div>
        <Icon
          icon={"material-symbols:asterisk"}
          className="absolute -top-18 -right-26 text-[20rem] text-brown-70"
        />
        <Icon
          icon={"material-symbols:asterisk"}
          className="absolute -top-18 -right-26 rotate-22 text-[20rem] text-brown-70"
        />
        <DefaultWrapper
          noBorder={{ b: true, l: true, r: true }}
          noRounded
          dFlex
        >
          {process.map((p, i) => (
            <DefaultWrapper
              noBorder={p.noBorder}
              noRounded
              key={p.title}
              p={{ p: 8 }}
            >
              <h1 className="text-grey-40 text-lg leading-1/3 mb-2.5">
                Step 0{i + 1}
              </h1>
              <div className="flex flex-col gap-3.5">
                <DefaultTitle title={p.title} text={24} font="500" />
                <p className="text-grey-40">{p.context}</p>
              </div>
            </DefaultWrapper>
          ))}
        </DefaultWrapper>
      </DefaultWrapper>
      <DefaultWrapper rel noOverflow>
        <div className="flex flex-col gap-3.5 p-14">
          <DefaultTitle
            title="Elevate Your Style with Our Latest Collection"
            text={38}
            font="500"
          />
          <p className="text-grey-40">
            Each piece is crafted to enhance your fashion statement.
          </p>
          <div className="flex gap-3.5 mt-1.5">
            {categories.map((item) => (
              <DefaultButton
                key={item.cat}
                label={item.cat}
                {...(item.isActive
                  ? {
                      colors: { bg: "brown-70", text: "dark-06" },
                      noBoder: true,
                    }
                  : {})}
                  onClick={() => changeActivity(item.cat)}
              ></DefaultButton>
            ))}
          </div>
        </div>
        <Icon
          icon={"iconoir:spark-solid"}
          className="absolute -top-27 -right-27 text-[20rem] text-brown-70"
        />

        <Icon
          icon={"iconoir:spark-solid"}
          className="absolute -top-27 -right-27 rotate-46 text-[20rem] text-brown-70"
        />
      </DefaultWrapper>
    </div>
  );
}
