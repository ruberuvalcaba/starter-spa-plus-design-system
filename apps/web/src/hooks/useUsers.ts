import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../services/users";

export function useUsers() {
  return useQuery({ queryKey: ["users"], queryFn: usersApi.list });
}
