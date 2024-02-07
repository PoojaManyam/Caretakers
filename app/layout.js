import { Inter } from "next/font/google";
import "./globals.css";
import "../css/animate.css";

// Corrected import path using forward slashes
import "../vendor/fontawesome/css/font-awesome.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
