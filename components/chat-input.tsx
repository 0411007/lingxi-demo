"use client";

import { useState } from "react";
import { Send, Mic, Image as ImageIcon } from "lucide-react";

export function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="sticky bottom-0 z-10 p-4 glass border-t border-white/20">
      <div className="flex items-center gap-3">
        <button className="flex-shrink-0 w-10 h-10 rounded-full bg-lingxi-input flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <ImageIcon className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="描述您想要的穿搭风格..."
            className="w-full px-4 py-3 bg-lingxi-input rounded-3xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lingxi-purple/30 transition-all"
          />
        </div>
        <button 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            message 
              ? "gradient-cta text-white glow-cta hover:scale-105 active:scale-95" 
              : "bg-lingxi-input text-muted-foreground"
          }`}
        >
          {message ? <Send className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
