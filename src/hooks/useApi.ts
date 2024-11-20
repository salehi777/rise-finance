import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface useApiReturn {
  data: any;
  isLoading: boolean;
  mutate: (...args) => any;
}

interface optionsAttr {
  onSuccess?: (res) => void;
}

export default function useApi(
  api,
  { onSuccess }: optionsAttr = {}
): useApiReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const mutate = async (...args) => {
    setIsLoading(true);
    try {
      const res = await api(...args);
      setData(res.data);
      onSuccess?.(res);
      setIsLoading(false);
      return res;
    } catch (error: any) {
      setIsLoading(false);
      if (error?.response?.status === 500) {
        toast.error("Internal Server Error");
      } else if (error?.response?.data?.message) {
        const message = error.response?.data?.message;
        if (message instanceof Array) toast.error(message.join("\n"));
        else toast.error(message);
      }
    }
  };

  return {
    data,
    isLoading,
    mutate,
  };
}
