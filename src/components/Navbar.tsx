import React from "react";
import NextLink from "next/link";
import { app } from "../data/app";

export const Navbar = () => {
  return (
    <div className="w-full fixed z-50 bg-gradient-to-r from-black via-gray-900 to-gray-700">
      <nav className=" max-w-6xl mx-auto text-sm font-medium px-2 py-4 flex items-center justify-between">
        <NextLink href="/">
          <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 md:mr-40 whitespace-nowrap uppercase">
            {app.name}
          </a>
        </NextLink>

        <div className="space-x-2">
          <NextLink href="/posts">
            <a className="text-white text-sm font-bold leading-relaxed inline-block ">
              Posts
            </a>
          </NextLink>
          <NextLink href="/csr">
            <a className="text-white text-sm font-bold leading-relaxed inline-block ">
              CSR
            </a>
          </NextLink>
          <NextLink href="/ssr">
            <a className="text-white text-sm font-bold leading-relaxed inline-block ">
              SSR
            </a>
          </NextLink>
          <a
            href="/api/hello"
            className="text-white text-sm font-bold leading-relaxed inline-block "
          >
            Hello API
          </a>
          <a
            href="/api/posts"
            className="text-white text-sm font-bold leading-relaxed inline-block "
          >
            Posts API
          </a>
        </div>
      </nav>
    </div>
  );
};
