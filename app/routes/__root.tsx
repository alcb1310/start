import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ReactNode } from "react";

import appStyles from "@/style.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Tanstack Start Starter",
      },
      {
        name: "description",
        content: "Tanstack Start Starter",
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appStyles,
      },
    ],
  }),
  component: RootComponent
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-900 text-slate-50">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
