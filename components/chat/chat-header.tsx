"use client";

import { ChevronLeft, MoreHorizontal, Sparkles } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Back Button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/60 transition-colors">
          <ChevronLeft className="w-6 h-6 text-foreground/70" />
        </button>

        {/* Center - Avatar & Title */}
        <div className="flex items-center gap-3">
          {/* Animated Avatar */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full lingxi-gradient-primary flex items-center justify-center shadow-lg lingxi-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {/* Online indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-foreground tracking-tight">灵犀</h1>
            <span className="text-xs text-muted-foreground">AI购物助手 · 在线</span>
          </div>
        </div>

        {/* More Options */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/60 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-foreground/70" />
        </button>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
}
