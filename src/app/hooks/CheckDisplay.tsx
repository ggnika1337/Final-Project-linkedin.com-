"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>();
  useEffect(() => {
    if (localStorage.getItem("display") === "device") {
      setDark(true);
    } else if (localStorage.getItem("display") === "dark") {
      setDark(true);
    }
    if (localStorage.getItem("display") === "light") {
      setDark(false);
    }
  }, []);
  console.log(dark);
  return dark;
}
