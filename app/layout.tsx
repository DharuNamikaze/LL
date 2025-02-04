"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll"; // Locomotive Scroll Hook
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader"; // Import the Preloader component

const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true); // Show preloader on navigation start
    const handleComplete = () => setTimeout(() => setIsLoading(false), 0); // Hide preloader

    handleStart();
    const startTime = Date.now();

    const simulateLoading = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsedTime); // Ensure preloader lasts 3s
      setTimeout(() => handleComplete(), remainingTime);
    }, 800);

    return () => clearTimeout(simulateLoading); // Cleanup on unmount
  }, [pathname]);

  const isCoursePage = pathname === "/CoursePage";

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {isLoading && <Preloader />} {/* Show preloader during navigation */}
        {!isLoading &&
          (isCoursePage ? children : <SmoothScroll>{children}</SmoothScroll>)}
      </body>
    </html>
  );
}
