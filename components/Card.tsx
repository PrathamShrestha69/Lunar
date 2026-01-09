"use client";

import React from "react";
import { type CurtainType } from "@/data/curtain";
import TransitionLink from "@/providers/TransitionLink";

const Card = ({ curtain }: { curtain: CurtainType }) => {
  const words = curtain.name.trim().split(/\s+/);
  const firstWord = words[0] ?? "";
  const emphasizedWord = words[1] ?? "";
  const rest = words.slice(2).join(" ");

  const title = (
    <h3 className="text-[22px] font-medium leading-tight">
      {firstWord}
      {emphasizedWord ? (
        <>
          {" "}
          <span className="underline underline-offset-4">
            {emphasizedWord}
          </span>
        </>
      ) : null}
      {rest ? ` ${rest}` : ""}
    </h3>
  );

  const ctaLabel = emphasizedWord
    ? `EXPLORE ${emphasizedWord.toUpperCase()} COMFORT →`
    : "EXPLORE COMFORT →";

  return (
    <article className="bg-white">
      <div className="group relative overflow-hidden bg-neutral-100">
        <TransitionLink href={`/${curtain.id}`} className="block">
          <div className="aspect-4/5 w-full">
            <img
              src={curtain.image.side}
              alt={curtain.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </TransitionLink>

        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <div className="absolute inset-0 bg-black/45 " />
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            {title}
            <p className="mt-2 text-sm leading-relaxed text-white/90 line-clamp-3">
              {curtain.desc}
            </p>

            <div className="mt-4 pointer-events-auto">
              <TransitionLink
                href={`/${curtain.id}`}
                className="inline-flex items-center justify-center bg-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-2xl transition-colors hover:bg-white/25"
              >
                {ctaLabel}
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
