"use client";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let locomotiveScroll: any;

    let isMounted = true;
    const init = async () => {
      if (typeof window === "undefined") return;
      const mod = await import("locomotive-scroll");
      if (!isMounted) return;
      const LocomotiveScroll = (mod as any).default ?? mod;
      locomotiveScroll = new LocomotiveScroll();
    };

    init();

    return () => {
      isMounted = false;
      if (locomotiveScroll && typeof locomotiveScroll.destroy === "function") {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
