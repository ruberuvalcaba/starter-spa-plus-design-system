import { Button, Input, Stack } from "@ruflas/ui";
import { useNavigate } from "@tanstack/react-router";
import { type SubmitEvent, useState } from "react";
import { useAuthStore } from "../../stores/authStore";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email) return;
    login(email);
    navigate({ to: "/" });
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="lg">
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" disabled={!email} variant="primary">
          Sign in
        </Button>
      </Stack>
    </form>
  );
}
