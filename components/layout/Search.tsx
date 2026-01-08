"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface SearchProps {
  onClose: () => void;
}

const Search = ({ onClose }: SearchProps) => {
  return (
    <div className="fixed inset-0 z-[15] flex items-start justify-center bg-black/40 backdrop-blur-sm">
      <div className="mt-20 w-full max-w-3xl px-4">
        <div className="relative rounded-lg bg-white shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-4 border-b border-[#e5ddd0] p-6">
            <Icon
              icon="fa-solid:search"
              width={20}
              height={20}
              className="text-[#573720]"
            />
            <input
              type="text"
              placeholder="Search for products, categories..."
              autoFocus
              className="flex-1 bg-transparent text-lg text-[#573720] placeholder:text-[#9b8a75] focus:outline-none"
            />
            <button
              onClick={onClose}
              aria-label="Close search"
              className="cursor-pointer text-[#573720] transition hover:text-[#3d2715]"
            >
              <Icon icon="mdi:close" width={28} height={28} />
            </button>
          </div>

          {/* Search Suggestions/Results */}
          <div className="max-h-[60vh] overflow-y-auto p-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9b8a75]">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Linen Curtains", "Blackout", "Sheer", "Velvet Drapes"].map((term) => (
                    <button
                      key={term}
                      className="rounded-full border border-[#e5ddd0] px-4 py-2 text-sm text-[#573720] transition hover:border-[#573720] hover:bg-[#faf8f5]"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;