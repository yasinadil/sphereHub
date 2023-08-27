import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sphere Hub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={`${manrope.className} relative`}>
        <div className="absolute w-full h-full bg-white dark:bg-black -z-20"></div>
        <div className="absolute w-full h-full bg-[length:64px] bg-repeat bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-10 -z-10"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

{
  /* <div style="width:100%;height:100%;background-size:64px;background-repeat:repeat;background-image:url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png');opacity:0.08;border-radius:0"></div> */
}
