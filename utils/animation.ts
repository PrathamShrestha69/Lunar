import gsap from "gsap";
import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const OPEN_DURATION_S = 0.7;
const CLOSE_DURATION_S = 0.6;

const animation = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo], { xPercent: 0, pointerEvents: "auto" })
      .to(
        bannerOne,
        { xPercent: -100, duration: OPEN_DURATION_S, ease: "[0.5, 2, 0.1, 1]" },
        0
      )
      .to(
        bannerTwo,
        { xPercent: 100, duration: OPEN_DURATION_S, ease: "[0.5, 2, 0.1, 1]" },
        0
      )
      .set([bannerOne, bannerTwo], { pointerEvents: "none" });
  }
};

export const animationPageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();

    tl.set(bannerOne, { xPercent: -100 })
      .set(bannerTwo, { xPercent: 100 })
      .set([bannerOne, bannerTwo], { pointerEvents: "auto" })
      .to(
        bannerOne,
        {
          xPercent: 0,
          duration: CLOSE_DURATION_S,
          ease: "[0.5, 2, 0.1, 1]",
          onComplete: () => {
            router.push(href);
          },
        },
        0
      )
      .to(
        bannerTwo,
        { xPercent: 0, duration: CLOSE_DURATION_S, ease: "[0.5, 2, 0.1, 1]" },
        0
      );
  }
};

export default animation;
