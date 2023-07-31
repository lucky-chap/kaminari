import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

import localFont from "next/font/local";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Kaminari",
  description: "Next.js Tailwind CSS Starter Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
