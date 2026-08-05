import type { ComponentType } from "react";

export interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
}

declare const GooeyNav: ComponentType<GooeyNavProps>;
export default GooeyNav;
