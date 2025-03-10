import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import { ToastContainer, Flip } from "react-toastify";

import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], display: "swap", variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased`}>
        <main>{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Flip}
        />
      </body>
    </html>
  );
}
