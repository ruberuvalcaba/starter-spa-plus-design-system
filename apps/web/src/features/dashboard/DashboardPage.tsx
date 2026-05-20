import { Stack } from "@acme/ui";
import { useAuthStore } from "../../stores/authStore";

export function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  return (
    <Stack gap="md">
      <h1>Dashboard</h1>
      <p>{user ? `Signed in as ${user.email}` : "You are browsing as guest."}</p>
      <p>This SPA uses TanStack Router, TanStack Query, Zustand, and the @acme/ui design system.</p>
    </Stack>
  );
}
