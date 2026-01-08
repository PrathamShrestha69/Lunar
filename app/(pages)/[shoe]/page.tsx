"use client";
import React, { useMemo } from "react";
import curtain from "@/data/curtain";
import { useParams } from "next/navigation";
import Link from "next/link";

const page = () => {
  const params = useParams();
  const id = String(params?.shoe ?? "");
  const item = curtain.find((c) => String(c.id) === id);
  const images = useMemo(
    () => [item?.image?.side, item?.image?.back].filter(Boolean),
    [item]
  );
  const primaryImage = images[0];

  if (!item) {
    return (
      <div className="min-h-screen bg-white px-6 py-16 font-[DM_Sans]  ">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">Curtain not found</h1>
          <p className="mt-3 text-gray-600">
            We could not locate this product.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-28 pb-20 font-[DM_Sans] lg:px-16 lg:pt-25">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        <div className="flex-1 rounded-3xl bg-[#F5F5F5] p-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
            {primaryImage && (
              <img
                src={primaryImage}
                alt={item.name}
                className="absolute left-1/2 top-1/2 h-auto  -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            )}
          </div>
          <div className="mt-4 flex gap-3">
            <div className="flex-1 rounded-xl bg-white p-3 text-center shadow-sm">
              <p className="text-xs uppercase text-gray-500">Collection</p>
              <p className="text-sm font-semibold text-gray-900">{item.tag}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs uppercase text-white">
              {item.tag}
            </div>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              {item.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              {item.discountedPrice ? (
                <>
                  <p className="text-2xl font-bold text-red-600">
                    €{item.discountedPrice}
                  </p>
                  <p className="text-lg text-gray-500 line-through">
                    €{item.price}
                  </p>
                </>
              ) : (
                <p className="text-2xl font-bold text-gray-900">
                  €{item.price}
                </p>
              )}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{item.desc}</p>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900 transition-colors"
            >
              Add to cart
            </button>
            <Link
              href="/shop"
              className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-500 transition-colors"
            >
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
