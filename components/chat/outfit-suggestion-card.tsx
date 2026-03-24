"use client";

import { Sparkles, Heart, Share2, ShoppingBag, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface OutfitItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface OutfitSuggestionCardProps {
  title?: string;
  occasion: string;
  style: string;
  items: OutfitItem[];
  totalPrice: number;
  matchScore: number;
}

export function OutfitSuggestionCard({
  title = "穿搭灵感",
  occasion,
  style,
  items,
  totalPrice,
  matchScore,
}: OutfitSuggestionCardProps) {
  return (
    <div className="max-w-[90%] mr-auto">
      {/* AI Avatar */}
      <div className="flex items-start gap-2.5 mb-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-full lingxi-gradient-primary flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4 text-white" />
        </div>

        <div className="bg-card border border-border/60 rounded-2xl rounded-bl-md shadow-sm overflow-hidden">
          {/* Header with gradient */}
          <div className="relative px-4 py-3 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-b border-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                  <p className="text-[10px] text-muted-foreground">{occasion} · {style}</p>
                </div>
              </div>
              
              {/* Match Score */}
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/30 border border-secondary/40">
                <Sparkles className="w-3 h-3 text-secondary-foreground" />
                <span className="text-[10px] font-medium text-secondary-foreground">
                  匹配度 {matchScore}%
                </span>
              </div>
            </div>
          </div>

          {/* Outfit Items Grid */}
          <div className="p-3">
            <div className="grid grid-cols-4 gap-2">
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Item Image */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted mb-1.5 group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    
                    {/* Item number badge */}
                    <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-primary/90 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Item Info */}
                  <p className="text-[10px] text-muted-foreground text-center truncate w-full">
                    {item.category}
                  </p>
                  <p className="text-xs font-medium text-destructive">¥{item.price}</p>
                </div>
              ))}
            </div>

            {/* Divider with pattern */}
            <div className="flex items-center gap-2 my-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-[10px] text-muted-foreground">搭配详情</span>
              <div className="flex-1 h-px bg-gradient-to-r from-border via-transparent to-transparent" />
            </div>

            {/* Summary Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground">整套价格</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-destructive">¥{totalPrice}</span>
                  <span className="text-[10px] text-muted-foreground">共{items.length}件</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium shadow-md lingxi-glow transition-all flex items-center gap-1">
                  一键购买
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground ml-10">14:35</span>
    </div>
  );
}
