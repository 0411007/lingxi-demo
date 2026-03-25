"use client";

import { ChevronLeft, Headphones } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 backdrop-blur-[20px] bg-white/90 border-b border-border/30">
      <div className="flex items-center justify-between h-full px-4">
        {/* Back Button */}
        <button className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">返回</span>
        </button>

        {/* Center - Title & Status */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <h1 className="text-base font-semibold text-foreground">灵犀</h1>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">AI智能服务中</span>
          </div>
        </div>

        {/* Transfer to Human Button */}
        <button className="px-3 py-1.5 rounded-[20px] lingxi-gradient text-white text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1">
          <Headphones className="w-3.5 h-3.5" />
          转人工
        </button>
      </div>
    </header>
  );
}
