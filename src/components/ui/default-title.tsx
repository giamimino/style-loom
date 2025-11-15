
export default function DefaultTitle({
  title,
  text,
  font
}: {
  title: string;
  text?: number;
  font?: string;
}) {
  const base = text || 16;

  const min = Math.round(base * 0.5)
  const max = base
  const fluid = (base / 16) * 1.2

  const style = {
    fontWeight: font || "normal",
    fontSize: `clamp(${min}px, ${fluid}vw, ${max}px)`,
  };

  return (
    <h1 className="text-white" style={style}>
      {title}
    </h1>
  );
}