import { authLoginApi, authRefreshApi } from "@/services/auth";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthStore {
  user: any;
  login: (formData) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
}

const initialState = {
  user: null,
  login: async (formData) => {},
  logout: () => {},
  refresh: async () => {},
};

const store = (set, get) => ({
  ...initialState,

  login: async (mutate) => {
    // try {
    const res = await mutate();
    set({ user: res?.data || null });
    // } catch (error) {
    //   set({ user: null });
    //   throw error;
    // }
  },

  logout: () => {
    set({ user: null });
  },

  refresh: async () => {
    try {
      const user = get().user;
      const res = await authRefreshApi({ refresh: user?.refresh_token });
      set({
        user: {
          ...user,
          ...res.data,
        },
      });
    } catch (error) {
      throw error;
    }
  },
});

// useRealAuthStore always has persisted values
export const useRealAuthStore = create<AuthStore>()(
  devtools(persist(store, { name: "auth" }))
);

// useAuthStore has initialState in first render and real values after that
const useAuthStore = (f) => {
  const [state, setState] = useState(() => f(initialState));

  const zustandState = useRealAuthStore(f);

  useEffect(() => {
    setState(() => zustandState);
  }, [zustandState]);

  return state;
};

export default useAuthStore;
