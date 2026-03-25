"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  selected?: boolean;
}

interface ProductListCardProps {
  products: Product[];
  bundlePrice: number;
  discount?: string;
  onBuyAll?: () => void;
}

export function ProductListCard({
  products,
  bundlePrice,
  discount = "再减20",
  onBuyAll,
}: ProductListCardProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(products.map(p => p.id))
  );

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  return (
    <div className="max-w-[90%] ml-10">
      <div className="bg-white rounded-2xl lingxi-shadow overflow-hidden">
        {/* Product List */}
        <div className="divide-y divide-border/50">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 p-3"
            >
              {/* Selection Circle */}
              <button
                onClick={() => toggleSelect(product.id)}
                className={cn(
                  "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                  selectedItems.has(product.id)
                    ? "bg-[#5B6BFF] border-[#5B6BFF]"
                    : "border-[#E5E8F0] bg-white"
                )}
              >
                {selectedItems.has(product.id) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </button>

              {/* Product Image */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-snug mb-2">
                  {product.name}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-[#FF4D4F]">
                    ¥{product.price}
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    ¥{product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Price Section */}
        <div className="flex items-center justify-between p-4 bg-muted/30 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">套餐价</span>
            <span className="text-xl font-bold text-[#FF4D4F]">¥{bundlePrice}</span>
          </div>
          
          <button 
            onClick={onBuyAll}
            className="h-11 px-5 rounded-[22px] lingxi-gradient text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            一键加购整套 · {discount}
          </button>
        </div>
      </div>
    </div>
  );
}
