import { Suspense, lazy } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const TanStackRouterDevtools =
  import.meta.env.MODE === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <Suspense>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </Suspense>
  ),
});
