"use client";

import React, { useState } from "react";

const colors = {
  label: "#6F5883",
  text: "#5B415B",
  focused: "#1E90FF",
  invalid: "#FF0000",
  border: "#5B415B1A",
  background: "#FFFFFF",
};

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
  const [state, setState] = useState<States>({
    filled: false,
    valid: true,
    focused: false,
  });
  const [value, setValue] = useState<string>("");

  console.log(state);

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
      className={`relative w-full rounded-lg transition-border duration-200 border-solid border-2 border-[${
        state.valid === false
          ? colors.invalid
          : state.filled === true && state.focused === true
          ? colors.focused
          : colors.border
      }] bg-[${colors.background}] ${className}`}
    >
      <label
        className={`absolute font-medium transition-all duration-200 text-[${
          state.valid === false
            ? colors.invalid
            : state.filled === true && state.focused === true
            ? colors.focused
            : colors.label
        }] left-5 ${
          state.filled === true ? "text-xs top-1" : "text-base top-3"
        }`}
      >
        {label}
      </label>
      <input
        name={name}
        className={`border-none text-base w-full z-10 bg-transparent pt-5 pb-1 px-4 text-[${colors.text}]`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
