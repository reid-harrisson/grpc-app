"use client";

import React from "react";

interface RoundButtonProps {
  label: string;
  className?: string;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`w-full p-3 rounded-full bg-[#D3126E] text-white font-medium ${className} hover:brightness-90 active:brightness-75 focus:outline-none focus:shadow-[0_0_5px_#D3126E]`}
    >
      {label}
    </button>
  );
};
