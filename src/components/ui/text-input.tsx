"use client";

import React, { useState } from "react";

interface TextInputProps {
  label: string;
  name: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  className,
  name,
}) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<{
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  }>({
    isFilled: value ? true : false,
    isValid: true,
    isFocused: false,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState({
      isValid: event.target.value == "invalid" ? false : true,
      isFilled: !!event.target.value,
      isFocused: false,
    });
  };

  const handleFocus = () => {
    setState({ ...state, isFocused: true, isFilled: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, isFilled: true });
    setValue(event.target.value);
  };

  return (
    <div
      className={`
        relative w-full rounded-lg transition-border
        border-solid border-2
        ${
          state.isFilled && state.isFocused
            ? "border-[#1E90FF]"
            : state.isValid == false
            ? "border-[#FF0000]"
            : "border-[#5B415B1A]"
        }
        bg-white
        ${className || ""}
      `}
    >
      <label
        className={`absolute font-medium transition-all ${
          state.isFilled && state.isFocused
            ? "text-[#1E90FF]"
            : state.isValid === false
            ? "text-[#FF0000]"
            : "text-[#6F5883]"
        } left-5 ${state.isFilled ? "text-xs top-1" : "text-base top-3"}`}
      >
        {label}
      </label>
      <input
        name={name}
        className={`border-none text-base w-full z-10 bg-transparent pt-5 pb-1 px-4 text-[#5B415B]`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
