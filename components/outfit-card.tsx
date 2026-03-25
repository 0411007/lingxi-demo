"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface OutfitCardProps {
  title: string;
  imageUrl: string;
  tags: string[];
  onViewDetails?: () => void;
}

export function OutfitCard({ title, imageUrl, tags, onViewDetails }: OutfitCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-float animate-float">
      <div className="aspect-[4/5] relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-lingxi-purple/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold mb-3 text-balance">{title}</h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <button
            onClick={onViewDetails}
            className="w-full py-3 px-4 rounded-3xl gradient-cta text-white text-sm font-medium glow-cta flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            查看穿搭详情
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
