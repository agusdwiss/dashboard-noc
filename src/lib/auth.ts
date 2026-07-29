import api from "./api";
import { LoginResponse } from "@/types/auth";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/login", {
    username,
    password,
  });

  return data;
};