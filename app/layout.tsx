import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./QueryProvider";
import logo from "@/public/E 1.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EM-Note",
  description:
    "A sleek and intuitive note-taking app designed to capture ideas, organize thoughts, and boost productivity. With powerful features like real-time sync, rich text formatting, and seamless organization, NoteWise keeps your notes accessible and secure, anytime, anywhere. Perfect for students, professionals, and creatives alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={logo.src} sizes="any" />
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
