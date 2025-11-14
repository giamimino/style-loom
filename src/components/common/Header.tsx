"use client";
import { usePathname, useRouter } from "next/navigation";
import DashedBox from "../ui/dashed-box";
import DefaultButton from "../ui/default-button";

const navs = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
];

export default function Header() {
  const router = useRouter()
  const pathname = usePathname();
  return (
    <header className="w-full px-15 fixed top-0 left-0 flex gap-4 items-end">
      <DashedBox directions={{ right: true, bottom: true }} />
      <div className="border-b border-dashed py-5 border-b-dark-15 w-full flex justify-between items-center">
        <nav className="flex gap-3.5">
          {navs.map((nav) => (
            <DefaultButton
              key={nav.label}
              active={pathname === nav.url}
              label={nav.label}
              onClick={() => router.push(nav.url)}
            />
          ))}
        </nav>
        <h1 className="text-white font-medium text-xl text-center">Style.Loom</h1>
        <div className="flex gap-3.5 items-center">
          <DefaultButton
            colors={{ bg: "dark-10", text: "white" }}
            p={{ p: 3 }}
            noBoder
            icon="mdi:cart"
          />
          <DefaultButton
            colors={{ bg: "brawn-60", text: "dark-06" }}
            noBoder
            label="Contact"
          />
        </div>
      </div>
      <DashedBox directions={{ left: true, bottom: true }} />
    </header>
  );
}
