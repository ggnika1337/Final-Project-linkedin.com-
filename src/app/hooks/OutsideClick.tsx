import { useRef } from "react";

export function OutsideClick(onClickOutside: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  function handleClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside();
    }
  }

  document.addEventListener("mousedown", handleClick);

  return ref;
}
