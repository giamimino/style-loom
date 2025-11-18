import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function DefaultInput({
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
    className="text-white p-2 border border-dashed border-dark-15 rounded-lg"
      {...rest}
    />
  );
}
