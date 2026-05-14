"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>();
  useEffect(() => {
    if (localStorage.getItem("display") === "device") {
      setDark(true);
      document.body.style.backgroundColor = "#000101";
    } else if (localStorage.getItem("display") === "dark") {
      setDark(true);
      document.body.style.backgroundColor = "#000101";
    }
    if (localStorage.getItem("display") === "light") {
      setDark(false);
      document.body.style.backgroundColor = "#f3f3ee";
    }
  }, []);
  return dark;
}
