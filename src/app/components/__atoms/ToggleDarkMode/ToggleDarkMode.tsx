import React, { useState, useEffect } from "react";

function ToggleDarkMode({ backClick }: { backClick: () => void }) {
  const [selected, setSelected] = useState("device");

  useEffect(() => {
    const saved = localStorage.getItem("display");
    if (saved) {
      setSelected(saved);
    }
  }, []);

  const handleChange = (value: string) => {
    setSelected(value);
    localStorage.setItem("display", value);
  };

  return (
    <div className="flex flex-col w-full gap-2 p-[20px] bg-white rounded-[10px]">
      <button
        onClick={backClick}
        className="cursor-pointer items-center flex h-[20px] text-start gap-2 text-[13px] text-[gray]"
      >
        <svg fill="gray" className="rotate-180" width={17} height={17}>
          <path d="M9.41 14l-1.29-1.29L11.83 9H2V7h9.83L8.12 3.29 9.41 2l5.29 5.29a1 1 0 010 1.41z"></path>
        </svg>
        Back
      </button>

      <div className="flex flex-col">
        <h1 className="font-bold">Dark mode</h1>

        <span className="font-semibold">
          Choose how your LinkedIn experience looks for this device.
        </span>

        <div className="mt-4 flex flex-col gap-3">
          <label className="flex gap-2 text-[12px] cursor-pointer">
            <input
              type="radio"
              name="display"
              checked={selected === "device"}
              onChange={() => handleChange("device")}
            />
            <h1>Device Settings</h1>
          </label>

          <label className="flex gap-2 text-[12px] cursor-pointer">
            <input
              type="radio"
              name="display"
              checked={selected === "dark"}
              onChange={() => handleChange("dark")}
            />
            <h1>Always on</h1>
          </label>

          <label className="flex gap-2 text-[12px] cursor-pointer">
            <input
              type="radio"
              name="display"
              checked={selected === "light"}
              onChange={() => handleChange("light")}
            />
            <h1>Always off</h1>
          </label>
        </div>

        <span className="text-[10px] mt-6 text-[gray]">
          If you choose Device settings, this app will use the mode that’s
          already selected in this device’s settings.
        </span>
      </div>
    </div>
  );
}

export default ToggleDarkMode;
