import { createLazyFileRoute } from "@tanstack/react-router";

import Core from "../modules/Core";

export const Route = createLazyFileRoute("/")({
  component: Core,
});
