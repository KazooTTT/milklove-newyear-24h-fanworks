import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Footer } from "~/components/footer";
import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "MUV家元旦24H限定食堂 - 汇总" },
    { charset: "utf-8" },
    {
      viewport:
        "width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no",
    },
    {
      name: "description",
      content: "本网站汇总了MUV家元旦24H限定食堂的相关信息。",
    },
    {
      name: "keywords",
      content:
        "milklove,milk pansa, loverrukk, 元旦, 限定食堂, 2025, 汇总，同人",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
