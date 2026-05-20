import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  shell: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  nav: {
    display: "flex", gap: "16px", padding: "12px 20px",
    borderBottom: "1px solid #e5e7eb", backgroundColor: "#fff",
  },
  brand: { fontWeight: 700, marginRight: "auto" },
  link: { textDecoration: "none", color: "#0b0f17", fontWeight: 500 },
  active: { color: "#2563eb" },
  main: { padding: "24px", maxWidth: "960px", width: "100%", margin: "0 auto" },
});

export const Route = createRootRoute({
  component: () => (
    <div {...stylex.props(styles.shell)}>
      <nav {...stylex.props(styles.nav)}>
        <span {...stylex.props(styles.brand)}>Acme</span>
        <Link to="/" {...stylex.props(styles.link)} activeProps={{ style: { color: "#2563eb" } }}>Dashboard</Link>
        <Link to="/users" {...stylex.props(styles.link)} activeProps={{ style: { color: "#2563eb" } }}>Users</Link>
        <Link to="/login" {...stylex.props(styles.link)} activeProps={{ style: { color: "#2563eb" } }}>Login</Link>
      </nav>
      <main {...stylex.props(styles.main)}>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
