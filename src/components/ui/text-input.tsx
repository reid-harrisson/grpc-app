"use client";

import React, { useState } from "react";

interface TextInputProps {
  label: string;
  name: string;
  className?: string;
}

interface States {
  filled: boolean;
  valid: boolean;
  focused: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  className,
  name,
}) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<States>({
    filled: value ? true : false,
    valid: true,
    focused: false,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState({
      valid: event.target.value == "invalid" ? false : true,
      filled: event.target.value ? true : false,
      focused: false,
    });
  };

  const handleFocus = () => {
    setState({ ...state, focused: true, filled: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, filled: true });
    setValue(event.target.value);
  };

  return (
    <div
      className={`
        relative w-full rounded-lg transition-border
        border-solid border-2
        ${
          state.filled && state.focused
            ? "border-[#1E90FF]"
            : state.valid == false
            ? "border-[#FF0000]"
            : "border-[#5B415B1A]"
        }
        bg-white
        ${className || ""}
      `}
    >
      <label
        className={`absolute font-medium transition-all ${
          state.filled && state.focused
            ? "text-[#1E90FF]"
            : state.valid === false
            ? "text-[#FF0000]"
            : "text-[#6F5883]"
        } left-5 ${state.filled ? "text-xs top-1" : "text-base top-3"}`}
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
