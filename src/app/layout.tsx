import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afterlanding.vercel.app"),
  title: "AfterLanding - Connect with Airline Crews Worldwide",
  description:
    "The social network for pilots and flight attendants to meet and organize activities around the world",
  applicationName: "AfterLanding",
  themeColor: "#0ea5e9",
  openGraph: {
    title: "AfterLanding - Connect with Airline Crews Worldwide",
    description:
      "The social network for pilots and flight attendants to meet and organize activities around the world",
    siteName: "AfterLanding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterLanding - Connect with Airline Crews Worldwide",
    description:
      "The social network for pilots and flight attendants to meet and organize activities around the world",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
