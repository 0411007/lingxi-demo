"use client";

import { useRef, useEffect } from "react";
import { ChatHeader } from "@/components/chat/chat-header";
import { MessageBubble } from "@/components/chat/message-bubble";
import { ProductRecommendationCard } from "@/components/chat/product-recommendation-card";
import { OutfitSuggestionCard } from "@/components/chat/outfit-suggestion-card";
import { ChatInputBar } from "@/components/chat/chat-input-bar";

// Sample data for demonstration
const sampleProducts = [
  {
    id: "1",
    name: "法式优雅真丝衬衫 春季新款",
    brand: "LILY",
    price: 299,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop",
    rating: 4.9,
    sales: "2.3万",
    tags: ["爆款", "春季新品"],
  },
  {
    id: "2",
    name: "高腰阔腿牛仔裤 显瘦百搭",
    brand: "太平鸟",
    price: 259,
    originalPrice: 459,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=200&fit=crop",
    rating: 4.8,
    sales: "5.1万",
  },
];

const outfitItems = [
  {
    id: "o1",
    name: "米白色针织开衫",
    category: "外套",
    price: 199,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop",
  },
  {
    id: "o2",
    name: "法式碎花连衣裙",
    category: "连衣裙",
    price: 329,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150&h=150&fit=crop",
  },
  {
    id: "o3",
    name: "复古玛丽珍鞋",
    category: "鞋子",
    price: 259,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop",
  },
  {
    id: "o4",
    name: "珍珠编织手提包",
    category: "包包",
    price: 189,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150&h=150&fit=crop",
  },
];

export default function ShoppingAssistantPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom on initial load
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  const handleSend = (message: string) => {
    console.log("[v0] Message sent:", message);
  };

  const handleVoice = () => {
    console.log("[v0] Voice input triggered");
  };

  const handleImage = () => {
    console.log("[v0] Image upload triggered");
  };

  return (
    <div className="flex flex-col h-screen bg-background max-w-md mx-auto relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
      </div>

      {/* Header */}
      <ChatHeader />

      {/* Chat Area */}
      <main
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4 lingxi-scrollbar relative z-10"
      >
        {/* Welcome Message */}
        <MessageBubble
          content="你好呀！我是灵犀，你的AI购物助手 ✨ 今天想找什么呢？可以发送图片让我帮你找同款哦~"
          isUser={false}
          timestamp="14:28"
        />

        {/* User Message */}
        <MessageBubble
          content="我想找一件春天穿的衬衫，价格300以内，要好看又百搭的"
          isUser={true}
          timestamp="14:30"
        />

        {/* AI Thinking indicator */}
        <MessageBubble
          content="好的，让我为你搜索一下... 根据你的需求，我找到了几款很适合春天穿的衬衫 👇"
          isUser={false}
          timestamp="14:31"
        />

        {/* Product Recommendation Card */}
        <ProductRecommendationCard products={sampleProducts} title="为你精选的春季衬衫" />

        {/* User follow-up */}
        <MessageBubble
          content="第一件不错！能帮我搭配一套完整的春日穿搭吗？"
          isUser={true}
          timestamp="14:34"
        />

        {/* AI Response */}
        <MessageBubble
          content="当然可以！根据你选的法式衬衫，我为你搭配了一套优雅知性的春日Look，很适合约会或逛街穿~"
          isUser={false}
          timestamp="14:35"
        />

        {/* Outfit Suggestion Card */}
        <OutfitSuggestionCard
          title="春日约会穿搭"
          occasion="约会/逛街"
          style="法式优雅"
          items={outfitItems}
          totalPrice={976}
          matchScore={96}
        />

        {/* Follow-up message */}
        <MessageBubble
          content="这套搭配整体风格很协调，配色也很温柔。如果你喜欢的话，可以点击一键购买，或者告诉我想调整哪一件单品~"
          isUser={false}
          timestamp="14:36"
        />

        {/* Bottom spacing for input bar */}
        <div className="h-4" />
      </main>

      {/* Input Bar */}
      <ChatInputBar onSend={handleSend} onVoice={handleVoice} onImage={handleImage} />
    </div>
  );
}
