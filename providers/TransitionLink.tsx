"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { animationPageOut } from "@/utils/animation";

interface Props {
  href: string,
  label?: string,
  children?: React.ReactNode,
  className?: string
}

const TransitionLink = ({ children, href, className }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow normal behavior for new-tab/window, downloads, etc.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();

    if (pathname === href) return;

    animationPageOut(href, router);
  }
  return (
    <a href={href} className={className || "text-xl text-neutral-900 hover:text-neutral-700"} onClick={handleClick}>{children}</a>
  )
}

export default TransitionLink;