"use client";

import { ReactNode } from "react";

interface ChatBubbleProps {
  type: "ai" | "user";
  children: ReactNode;
}

export function ChatBubble({ type, children }: ChatBubbleProps) {
  if (type === "user") {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-md gradient-primary text-white text-sm leading-relaxed shadow-soft">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-white text-foreground text-sm leading-relaxed shadow-card border border-lingxi-border/50">
        {children}
      </div>
    </div>
  );
}
