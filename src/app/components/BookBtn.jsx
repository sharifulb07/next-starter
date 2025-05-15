'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useThemeDetector } from './useDetectorTheme';

const BookBtn = ({ children }) => {
  const isDarkTheme = useThemeDetector();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Avoid hydration mismatch
  if (!hasMounted) return null;

  return (
    <div suppressHydrationWarning className={`uppercase flex items-center gap-2 px-4 py-2 border-2 border-[#CB3A1A] ${isDarkTheme ? "text-white" : "text-black"}`}>
      <span>{children}</span>
      <FaArrowRightLong className="text-[#CB3A1A]" />
    </div>
  );
};

export default BookBtn;
