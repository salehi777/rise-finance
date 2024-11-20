import axios from "axios";
import { toast } from "react-toastify";
import { useRealAuthStore } from "@/store/useAuthStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use((config) => {
  const user = useRealAuthStore.getState().user;
  if (user?.access_token)
    config.headers.Authorization = `Bearer ${user.access_token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (!error.response) {
      toast.error("Network issue");
    }
    // handle invalid access and refresh token
    else if (
      error.response?.status === 401 &&
      error.response?.data?.code === "token_invalid"
    ) {
      // if access is invalid, get new refresh and call api again
      if (error.config.url !== "auth/refresh/") {
        const refresh = useRealAuthStore.getState().refresh;
        await refresh();
        return api(error.config);
      }
      // if refresh is invalid, logout
      else {
        const logout = useRealAuthStore.getState().logout;
        logout();
      }
    }

    return Promise.reject(error);
  }
);

export default api;
