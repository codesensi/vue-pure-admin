import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  code: number;
  data: {
    /** 头像 */
    avatar: string;
    /** 用户名 */
    username: string;
    /** 昵称 */
    nickname: string;
    /** 当前登录用户的角色 */
    roles: Array<string>;
    /** 按钮级别权限 */
    perms: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: number;
  };
  message: string;
};

export type LogoutResult = {
  code: number;
  message: string;
};

export type RefreshTokenResult = {
  code: number;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: number;
  };
  message: string;
};

export type UserInfo = {
  /** 头像 */
  avatar: string;
  /** 用户名 */
  username: string;
  /** 昵称 */
  nickname: string;
  /** 邮箱 */
  email: string;
  /** 联系电话 */
  phone: string;
  /** 简介 */
  description: string;
};

export type UserInfoResult = {
  code: number;
  data: UserInfo;
  message: string;
};

type ResultTable = {
  code: number;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
  message: string;
};

/** 登录 */
export const doLoginAcoount = (data?: object) => {
  return http.request<UserResult>("post", baseUrlApi("/login/account"), {
    data
  });
};

/** 登出 */
export const doLogout = (data?: object) => {
  return http.request<LogoutResult>("post", baseUrlApi("/logout"), { data });
};

/** 刷新`token` */
export const doTokenRefresh = (data?: object) => {
  return http.request<RefreshTokenResult>(
    "post",
    baseUrlApi("/token/refresh"),
    { data }
  );
};

/** 账户设置-个人信息 */
export const getMine = (data?: object) => {
  return http.request<UserInfoResult>("get", baseUrlApi("/sys/user/getMine"), {
    data
  });
};

/** 账户设置-个人安全日志 */
export const getMineLogs = (data?: object) => {
  return http.request<ResultTable>("get", "/mine-logs", { data });
};
