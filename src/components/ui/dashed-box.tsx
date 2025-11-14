import clsx from "clsx";

export default function DashedBox({
  directions,
  size,
  w,
  h,
}: {
  w?: number;
  h?: number;
  directions?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
  size?: number;
}) {
  return (
    <div
      className={`${w ? "" : "w-[70px]"} ${
        h ? "" : "h-[70px]"
      } relative overflow-hidden`}
      style={{
        ...(w ? { width: w * 4 + "px" } : {}),
        ...(h ? { height: h * 4 + "px" } : {}),
      }}
    >
      {directions &&
        Object.entries(directions).map(([key, value]) => {
          if (!value) return null;
          
          const pos = {
            top: "top-0 left-1/2 -translate-x-1/2 w-2/5 border-t",
            bottom: "bottom-0 left-1/2 -translate-x-1/2 w-2/5 border-b",
            left: "left-0 top-1/2 -translate-y-1/2 h-2/5 border-l",
            right: "right-0 top-1/2 -translate-y-1/2 h-2/5 border-r",
          };

          return (
            <span
              key={key}
              className={clsx(
                "absolute border-dark-15 border-dashed",
                pos[key as keyof typeof pos]
              )}
            />
          );
        })}
    </div>
  );
}
