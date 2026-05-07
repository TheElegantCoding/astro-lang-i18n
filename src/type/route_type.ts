import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

type AstroComponent = Promise<{ default: AstroComponentFactory }>;

type RouteType = {
  routes: string[];
  component: () => AstroComponent;
};

export type { RouteType, AstroComponent };
