import React, { useState } from "react";
const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const validateInput = inputValue.trim().length > 0;
  const inValidInput = !validateInput && inputTouched;

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const onBlur = () => {
    setInputTouched(true);
  };
  const onSubmit = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return [inputValue, inValidInput, validateInput, onChange, onBlur, onSubmit];
};

export default useInput;
