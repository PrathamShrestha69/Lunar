"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import animation from "@/utils/animation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Play the opening animation after every navigation (and on first mount).
    animation();
  }, [pathname]);

  return (
    <>
      {/* Transition curtains */}
      <div
        id="banner-1"
        className="fixed inset-y-0 left-0 z-[999] w-1/2 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/img/curtain1.png)" }}
      />
      <div
        id="banner-2"
        className="fixed inset-y-0 right-0 z-[999] w-1/2 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/img/curtain2.png)" }}
      />

      {children}
    </>
  );
}
