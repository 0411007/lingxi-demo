"use client";

import { useState, useRef } from "react";
import { Mic, Image, Send, Plus, Smile, Camera, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputBarProps {
  onSend?: (message: string) => void;
  onVoice?: () => void;
  onImage?: () => void;
}

export function ChatInputBar({ onSend, onVoice, onImage }: ChatInputBarProps) {
  const [message, setMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
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
    { icon: Camera, label: "拍照识别", color: "text-primary" },
    { icon: Image, label: "相册选择", color: "text-secondary-foreground" },
    { icon: Sparkles, label: "AI搭配", color: "text-primary" },
  ];

  return (
    <div className="sticky bottom-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50">
      {/* Quick Actions Panel */}
      {isExpanded && (
        <div className="px-4 py-3 border-b border-border/30 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-around">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-muted/60 transition-colors"
                onClick={() => {
                  if (action.label === "相册选择") onImage?.();
                  setIsExpanded(false);
                }}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <action.icon className={cn("w-5 h-5", action.color)} />
                </div>
                <span className="text-xs text-muted-foreground">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-end gap-2">
          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
              isExpanded
                ? "bg-primary text-primary-foreground rotate-45"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            )}
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Input Container */}
          <div className="flex-1 relative">
            <div className="flex items-center bg-muted/50 rounded-2xl border border-border/60 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入消息，或发送图片让我帮你找..."
                className="flex-1 px-4 py-2.5 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              
              {/* Emoji Button */}
              <button className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Voice / Send Button */}
          {message.trim() ? (
            <button
              onClick={handleSend}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-md lingxi-glow transition-all active:scale-95"
            >
              <Send className="w-5 h-5 text-primary-foreground" />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsRecording(!isRecording);
                onVoice?.();
              }}
              className={cn(
                "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95",
                isRecording
                  ? "bg-destructive text-destructive-foreground animate-pulse shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              )}
            >
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Smart Suggestions */}
        <div className="flex items-center gap-2 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
          {["推荐春季穿搭", "找相似款", "查看搭配", "价格对比"].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setMessage(suggestion)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full bg-muted/60 hover:bg-muted text-xs text-muted-foreground hover:text-foreground border border-border/40 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
