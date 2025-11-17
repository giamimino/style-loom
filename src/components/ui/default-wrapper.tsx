import { Children } from "@/types/global";
import clsx from "clsx";
export default function DefaultWrapper({
  children,
  noBorder,
  noRounded,
  wFit,
  p,
  flex,
  flexBasis,
  dFlex,
  flexWrap,
  rel,
  noOverflow
}: Children & {
  noBorder?: { t?: boolean; r?: boolean; b?: boolean; l?: boolean };
  noRounded?:
    | { tl?: boolean; tr?: boolean; br?: boolean; bl?: boolean }
    | boolean;
    wFit?: boolean,
  p?: { px?: number; py?: number; p?: number };
  flex?: number,
  flexBasis?: string,
  dFlex?: boolean,
  flexWrap?: boolean,
  rel?: boolean,
  noOverflow?: boolean
}) {
  const borders = {
    "border-t-0": noBorder?.t,
    "border-r-0": noBorder?.r,
    "border-b-0": noBorder?.b,
    "border-l-0": noBorder?.l,
  };

  const rounds = {
    "rounded-tl-0": typeof noRounded === "object" && noRounded?.tl,
    "rounded-tr-0": typeof noRounded === "object" && noRounded?.tr,
    "rounded-bl-0": typeof noRounded === "object" && noRounded?.bl,
    "rounded-br-0": typeof noRounded === "object" && noRounded?.br,
    "rounded-none": noRounded === true,
  };
  return (
    <div
      className={clsx(
        `border-2 border-dark-15 border-dashed rounded-2xl`,
        borders,
        rounds,
        wFit ? "w-fit" : "w-full",
        dFlex && "flex",
        flexWrap && "flex-wrap",
        rel && "relative",
        noOverflow && "overflow-hidden"
      )}
      style={{
        padding: p
          ? `${
              p?.p
                ? `${p.p * 4}px`
                : `${p?.py ? `${p.py * 4}px` : "0"} ${p?.px ? `${p.px * 4}px` : "0"}`
            }`
          : "",
          flex: flex,
          flexBasis: flexBasis,
      }}
    >
      {children}
    </div>
  );
}
