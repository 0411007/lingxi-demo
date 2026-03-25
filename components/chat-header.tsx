"use client";

import { Sparkles } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="glass sticky top-0 z-10 px-4 py-3 border-b border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center glow-primary">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-lingxi-green rounded-full border-2 border-white animate-pulse-dot" />
          </div>
          <div>
            <h1 className="text-lg font-semibold gradient-text">灵犀</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-lingxi-green rounded-full animate-pulse-dot" />
              <span className="text-xs text-muted-foreground">AI智能服务中</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white rounded-full gradient-primary glow-primary transition-all hover:scale-105 active:scale-95">
          人工
        </button>
      </div>
    </header>
  );
}
