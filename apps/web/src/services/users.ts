import { http } from "./http";
import type { User } from "../types/user";

export const usersApi = {
  list: () => http<User[]>("/users"),
  get: (id: number) => http<User>(`/users/${id}`),
};
