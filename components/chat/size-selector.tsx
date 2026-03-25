"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  onSelect?: (size: string) => void;
}

export function SizeSelector({ sizes, onSelect }: SizeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (size: string) => {
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <div className="flex flex-wrap gap-2 max-w-[85%] ml-10">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSelect(size)}
          className={cn(
            "px-4 py-2 rounded-[20px] text-sm transition-all border",
            selected === size
              ? "border-[#5B6BFF] bg-[#5B6BFF]/5 text-[#5B6BFF]"
              : "border-[#E5E8F0] bg-white text-foreground hover:border-[#7C8CFF]/50"
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
