"use client";
import React, { useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const YellowLine = () => {
  const autoScroll = React.useRef<ReturnType<typeof AutoScroll> | null>(null);
  if (!autoScroll.current) {
    autoScroll.current = AutoScroll({
      speed: 1.25,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    });
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [autoScroll.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    autoScroll.current?.play?.();
  }, [emblaApi]);

  const baseItems = [
    {
      label: "Secure Checkout",
      icon: <MdOutlineSecurity className="h-5 w-5 lg:h-6 lg:w-6" />,
    },
    {
      label: "Worldwide Support",
      icon: <BiWorld className="h-5 w-5 lg:h-6 lg:w-6" />,
    },
    {
      label: "Free Return",
      icon: (
        <Icon
          icon="icon-park-outline:return"
          className="h-5 w-5 lg:h-6 lg:w-6"
        />
      ),
    },
  ];

  const items = [
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
  ];

  return (
    <div className="embla w-full bg-[#D2FF1F] px-3 py-2 lg:py-3 text-xs font-bold font-[DM_Sans] whitespace-nowrap lg:text-sm">
      <div ref={emblaRef} className="embla__viewport overflow-hidden">
        <div className="embla__container flex items-center gap-5 lg:gap-10">
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="embla__slide flex-none"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YellowLine;
