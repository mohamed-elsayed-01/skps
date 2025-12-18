"use client";

import { useRef } from "react";
import { SERVICES } from "@/features/landing/constants";
import Card from "@/features/landing/components/OurServices/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-5">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide "
      >
        {SERVICES.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
