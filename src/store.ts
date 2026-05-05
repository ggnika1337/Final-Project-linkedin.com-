import { create } from "zustand";

type counterStore = { count: number };

export const useCounterStore = create<counterStore>(() => {
  count: 0;
});
