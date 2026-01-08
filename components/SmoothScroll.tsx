"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
