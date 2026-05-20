import { Stack } from "@ruflas/ui";
import { useUsers } from "../../hooks/useUsers";

export function UsersPage() {
  const { data, isLoading, error } = useUsers();
  if (isLoading) return <p>Loading users…</p>;
  if (error) return <p>Failed to load users.</p>;
  return (
    <Stack gap="md">
      <h1>Users</h1>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </Stack>
  );
}
