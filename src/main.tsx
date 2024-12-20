import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { routeTree } from "./routeTree.gen";

import "./index.css";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("app")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <Suspense
        fallback={
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-slate-200">
            Loading...
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
    ,
  </GoogleOAuthProvider>,
);
