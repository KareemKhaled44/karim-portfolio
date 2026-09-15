import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karim Khaled | Developer & Oracle Technology Learner",
  description: "Portfolio of Karim Khaled, a junior web developer building useful products with Django and React while growing his Oracle and cloud technology knowledge.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
