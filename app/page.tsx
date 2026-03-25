"use client";

import { useRef, useEffect } from "react";
import { ChatHeader } from "@/components/chat/chat-header";
import { MessageBubble, ImageMessage } from "@/components/chat/message-bubble";
import { SizeSelector } from "@/components/chat/size-selector";
import { HeroRecommendationCard } from "@/components/chat/hero-recommendation-card";
import { ProductListCard } from "@/components/chat/product-recommendation-card";
import { HorizontalProductScroll } from "@/components/chat/horizontal-product-scroll";
import { ChatInputBar } from "@/components/chat/chat-input-bar";

// Sample data matching the specification
const sampleProducts = [
  {
    id: "1",
    name: "法式蕾丝镂空长裙",
    price: 199,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "珍珠贝壳项链",
    price: 89,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "草编高跟凉鞋",
    price: 159,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop",
  },
];

const horizontalProducts = [
  { id: "h1", name: "度假风连衣裙", price: 299, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=200&fit=crop" },
  { id: "h2", name: "编织草帽", price: 79, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=200&h=200&fit=crop" },
  { id: "h3", name: "沙滩托特包", price: 169, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&h=200&fit=crop" },
  { id: "h4", name: "度假风耳环", price: 59, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop" },
];

export default function ShoppingAssistantPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  const handleSend = (message: string) => {
    console.log("Message sent:", message);
  };

  const handleVoice = () => {
    console.log("Voice input triggered");
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F7FB] max-w-md mx-auto relative overflow-hidden">
      {/* Header - 64px */}
      <ChatHeader />

      {/* Chat Area */}
      <main
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4 lingxi-scrollbar"
      >
        {/* AI Welcome Message */}
        <MessageBubble
          content="亲爱的88VIP，晚上好！我是您的专属AI导购助理。店铺目前全场满200减20，现货48小时内发货~请问有什么可以帮您？"
          isUser={false}
          timestamp="20:15"
          highlightKeywords={["88VIP", "满200减20", "48小时内发货"]}
        />

        {/* User Message */}
        <MessageBubble
          content="下周去三亚，想找一套类似图片里的度假风穿搭"
          isUser={true}
          timestamp="20:16"
        />

        {/* User Image Upload */}
        <ImageMessage
          imageUrl="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=320&h=440&fit=crop"
          isUser={true}
          timestamp="20:16"
        />

        {/* AI Response - Size Selection */}
        <MessageBubble
          content="好的呢~为了更精准推荐，请告诉我您的身高体重："
          isUser={false}
          timestamp="20:17"
          showAvatar={true}
        />

        {/* Size Selector Buttons */}
        <SizeSelector 
          sizes={["160cm/50kg", "165cm/55kg", "170cm/60kg"]}
        />

        {/* Hero Recommendation Card */}
        <div className="pt-3">
          <HeroRecommendationCard
            title="法式度假轻奢穿搭"
            tags={["海岛风", "显瘦", "氛围感"]}
            imageUrl="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop"
          />
        </div>

        {/* Product List with Bundle Price */}
        <div className="pt-3">
          <ProductListCard
            products={sampleProducts}
            bundlePrice={447}
            discount="再减20"
          />
        </div>

        {/* Horizontal Product Scroll */}
        <div className="pt-3">
          <HorizontalProductScroll
            title="度假风完整穿搭"
            products={horizontalProducts}
          />
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </main>

      {/* Input Bar */}
      <ChatInputBar onSend={handleSend} onVoice={handleVoice} />
    </div>
  );
}
