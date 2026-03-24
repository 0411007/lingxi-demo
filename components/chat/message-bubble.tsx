"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
}

export function MessageBubble({ content, isUser, timestamp }: MessageBubbleProps) {
  return (
    <div className={cn("flex gap-2.5 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full lingxi-gradient-primary flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}

      <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
        {/* Bubble */}
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground rounded-br-md shadow-md lingxi-glow"
              : "bg-card border border-border/60 text-foreground rounded-bl-md shadow-sm"
          )}
        >
          {content}
        </div>

        {/* Timestamp */}
        {timestamp && (
          <span className="text-[10px] text-muted-foreground mt-1 px-1">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
