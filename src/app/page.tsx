import HeroWelcome from "@/components/common/hero-welcome";
import DefaultTitle from "@/components/ui/default-title";
import DefaultWrapper from "@/components/ui/default-wrapper";
import IconWrapper from "@/components/ui/icon-wrapper";

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

export default function Home() {
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
                p={{ p: 7.5}}
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
    </div>
  );
}
