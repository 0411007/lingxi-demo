"use client";

import { useState, useRef } from "react";
import { Mic, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputBarProps {
  onSend?: (message: string) => void;
  onVoice?: () => void;
}

export function ChatInputBar({ onSend, onVoice }: ChatInputBarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "帮我搭配",
    "查看尺码", 
    "有什么优惠",
    "推荐爆款"
  ];

  return (
    <div className="sticky bottom-0 z-50 bg-white border-t border-border/50">
      {/* Quick Actions */}
      <div className="px-4 py-2 overflow-x-auto scrollbar-none">
        <div className="flex gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setMessage(action)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white text-xs text-foreground border border-border/60 lingxi-shadow hover:border-[#7C8CFF]/50 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-2">
          {/* Plus Button */}
          <button
            className="flex-shrink-0 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          >
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Input Field */}
          <div className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="请输入您的穿搭需求..."
              className="w-full h-10 px-4 rounded-[24px] bg-[#F0F2F7] text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C8CFF]/30"
            />
          </div>

          {/* Voice Button */}
          <button
            onClick={onVoice}
            className={cn(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all",
              "bg-muted hover:bg-muted/80 text-muted-foreground"
            )}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
