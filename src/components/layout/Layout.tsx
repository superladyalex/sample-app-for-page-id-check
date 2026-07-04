import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * Layout
 *
 * Provides a shared page layout.
 *
 * Unlike earlier iterations of this sample application,
 * Layout intentionally does NOT render additional
 * components.
 *
 * This allows each page to explicitly define its own
 * component graph, making it easier to demonstrate
 * individual analyzer capabilities.
 */
export default function Layout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}
