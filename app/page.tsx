"use client";

import { useState } from "react";
import { ChatHeader } from "@/components/chat-header";
import { ChatInput } from "@/components/chat-input";
import { ChatBubble } from "@/components/chat-bubble";
import { SizeSelector } from "@/components/size-selector";
import { OutfitCard } from "@/components/outfit-card";
import { ProductCard } from "@/components/product-card";
import { TotalCTA } from "@/components/total-cta";

// Demo product data
const products = [
  {
    id: "1",
    name: "法式复古碎花吊带连衣裙 度假风",
    price: 299,
    originalPrice: 599,
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "白色防晒针织开衫 薄款透气",
    price: 159,
    originalPrice: 299,
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "草编手提包 海岛度假必备",
    price: 189,
    originalPrice: 359,
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "珍珠耳环 气质优雅百搭",
    price: 89,
    originalPrice: 169,
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
  },
];

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set(["1", "2"]));

  const handleProductSelect = (id: string, selected: boolean) => {
    setSelectedProducts((prev) => {
      const newSet = new Set(prev);
      if (selected) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const selectedCount = selectedProducts.size;
  const totalPrice = products
    .filter((p) => selectedProducts.has(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-lingxi-bg flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[24px] shadow-float overflow-hidden flex flex-col relative">
        {/* Header */}
        <ChatHeader />

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-4">
          {/* User message */}
          <ChatBubble type="user">
            我想要一套去海岛度假的穿搭,要有氛围感,显瘦一点
          </ChatBubble>

          {/* AI response */}
          <ChatBubble type="ai">
            <p className="mb-3">
              好的!根据您的需求,我为您推荐一套法式度假风穿搭,轻盈浪漫又能修饰身材~
            </p>
            <p className="text-muted-foreground">
              请问您平时穿什么尺码呢?
            </p>
          </ChatBubble>

          {/* Size selector */}
          <div className="mb-4 pl-0">
            <SizeSelector sizes={["XS", "S", "M", "L", "XL"]} defaultSize="M" />
          </div>

          {/* User response */}
          <ChatBubble type="user">M码</ChatBubble>

          {/* AI with outfit card */}
          <ChatBubble type="ai">
            <p>
              好的,已为您匹配M码~这套穿搭非常适合海岛度假,一起来看看吧!
            </p>
          </ChatBubble>

          {/* Outfit Card */}
          <div className="mb-4">
            <OutfitCard
              title="法式度假轻奢穿搭"
              imageUrl="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop"
              tags={["海岛风", "显瘦", "氛围感"]}
            />
          </div>

          {/* AI recommendation */}
          <ChatBubble type="ai">
            <p>这套穿搭包含以下单品,您可以选择喜欢的加入购物车:</p>
          </ChatBubble>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                selected={selectedProducts.has(product.id)}
                onSelect={handleProductSelect}
              />
            ))}
          </div>

          {/* Total CTA */}
          <div className="mb-4">
            <TotalCTA
              selectedCount={selectedCount}
              totalPrice={totalPrice}
            />
          </div>

          {/* Final AI message */}
          <ChatBubble type="ai">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-lingxi-green rounded-full animate-pulse-dot" />
              还有其他想要的风格吗?我可以继续为您推荐~
            </p>
          </ChatBubble>
        </div>

        {/* Input */}
        <ChatInput />
      </div>
    </div>
  );
}
