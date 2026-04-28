import { useEffect } from "react";

export const useLocalStorageSync = (key, value) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
};
