"use client";

import { ShoppingCart } from "lucide-react";

interface TotalCTAProps {
  selectedCount: number;
  totalPrice: number;
  onCheckout?: () => void;
}

export function TotalCTA({ selectedCount, totalPrice, onCheckout }: TotalCTAProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-card">
      <div>
        <p className="text-xs text-muted-foreground mb-1">
          已选 {selectedCount} 件商品
        </p>
        <p className="text-xl font-bold">
          <span className="text-sm font-normal text-muted-foreground mr-1">合计</span>
          <span className="text-lingxi-price">¥{totalPrice.toLocaleString()}</span>
        </p>
      </div>
      <button
        onClick={onCheckout}
        disabled={selectedCount === 0}
        className={`h-11 px-6 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
          selectedCount > 0
            ? "gradient-cta text-white glow-cta hover:scale-105 active:scale-95"
            : "bg-lingxi-input text-muted-foreground cursor-not-allowed"
        }`}
      >
        <ShoppingCart className="w-4 h-4" />
        加入购物车
      </button>
    </div>
  );
}
