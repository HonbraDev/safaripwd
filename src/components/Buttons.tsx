import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="ml-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
      {...props}
    />
  );
}
