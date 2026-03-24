"use client";

import { Heart, ShoppingCart, Star, Sparkles, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  sales: string;
  tags?: string[];
}

interface ProductRecommendationCardProps {
  products: Product[];
  title?: string;
}

export function ProductRecommendationCard({
  products,
  title = "为您精选推荐",
}: ProductRecommendationCardProps) {
  return (
    <div className="max-w-[90%] mr-auto">
      {/* AI Avatar */}
      <div className="flex items-start gap-2.5 mb-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-full lingxi-gradient-primary flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="bg-card border border-border/60 rounded-2xl rounded-bl-md shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-hsl(var(--lingxi-purple-light)) to-hsl(var(--lingxi-mint-light)) lingxi-gradient-purple border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium text-sm text-foreground">{title}</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-3 space-y-2.5">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                {/* Product Image */}
                <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-destructive text-destructive-foreground text-[10px] font-medium rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}%OFF
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{product.brand}</p>
                    <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
                      {product.name}
                    </h4>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-destructive">
                          ¥{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          {product.sales}已售
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button className="w-7 h-7 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                        <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors shadow-sm">
                        <ShoppingCart className="w-3.5 h-3.5 text-primary-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="px-4 py-2.5 border-t border-border/30">
            <button className="w-full flex items-center justify-center gap-1.5 text-xs text-primary font-medium hover:text-primary/80 transition-colors">
              查看更多推荐
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground ml-10">14:32</span>
    </div>
  );
}
