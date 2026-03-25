"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  selected?: boolean;
  onSelect?: (id: string, selected: boolean) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  selected = false,
  onSelect,
}: ProductCardProps) {
  const [isSelected, setIsSelected] = useState(selected);

  const handleToggle = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    onSelect?.(id, newState);
  };

  return (
    <div 
      onClick={handleToggle}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-card cursor-pointer transition-all hover:shadow-float ${
        isSelected ? "ring-2 ring-lingxi-blue" : ""
      }`}
    >
      {/* Selection indicator */}
      <div
        className={`absolute top-3 right-3 z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
          isSelected
            ? "gradient-primary text-white"
            : "bg-white/80 backdrop-blur-sm border border-lingxi-border"
        }`}
      >
        {isSelected && <Check className="w-4 h-4" />}
      </div>

      {/* Image */}
      <div className="aspect-square relative bg-lingxi-bg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-2 leading-snug">
          {name}
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-lingxi-price">
            ¥{price}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ¥{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
