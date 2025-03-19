import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

type Result = {
  code: number;
  data: Array<any>;
};

export const getUserRoutes = () => {
  return http.request<Result>("get", baseUrlApi("/sys/user/getRoutes"));
};
