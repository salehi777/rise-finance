import { useEffect, useState } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GlobalStore {
  drawer: string;
  toggleDrawer: (newState?: string) => void;
}

const initialState = {
  drawer: "open",
  toggleDrawer: () => {},
};

const store = (set, get) => ({
  ...initialState,

  toggleDrawer: (newState) => {
    const drawer = get().drawer;

    if (newState) {
      set({
        drawer: newState,
      });
    } else {
      set({
        drawer: get().drawer === "open" ? "close" : "open",
      });
    }
  },
});

// useRealGlobalStore always has persisted values
export const useRealGlobalStore = create<GlobalStore>()(
  devtools(persist(store, { name: "global" }))
);

// useGlobalStore has initialState in first render and real values after that
const useGlobalStore = (f) => {
  const [state, setState] = useState(() => f(initialState));

  const zustandState = useRealGlobalStore(f);

  useEffect(() => {
    setState(() => zustandState);
  }, [zustandState]);

  return state;
};

export default useGlobalStore;
