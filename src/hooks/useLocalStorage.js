import { useState, useEffect } from "react";
export default function useLocalStorage(key, defaultValue) {
  const getValue = () => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue) {
      console.log(jsonValue, "value ok");
      return JSON.parse(jsonValue);
    } else {
      return defaultValue;
    }
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue];
}
