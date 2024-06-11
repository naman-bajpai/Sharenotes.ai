import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const maprope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ShareNotes.ai",
  description: "Create, Share, Monitize your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={maprope.className}>{children}</body>
    </html>
  );
}
