"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
  defaultSize?: string;
  onSelect?: (size: string) => void;
}

export function SizeSelector({ sizes, defaultSize, onSelect }: SizeSelectorProps) {
  const [selected, setSelected] = useState(defaultSize || sizes[0]);

  const handleSelect = (size: string) => {
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSelect(size)}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
            selected === size
              ? "border-lingxi-blue bg-gradient-to-r from-lingxi-purple/10 to-lingxi-blue/10 text-lingxi-blue"
              : "border-lingxi-border bg-white text-muted-foreground hover:border-lingxi-purple/50"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
