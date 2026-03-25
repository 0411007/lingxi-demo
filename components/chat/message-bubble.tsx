"use client";

import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
  avatarUrl?: string;
  showAvatar?: boolean;
  highlightKeywords?: string[];
}

export function MessageBubble({ 
  content, 
  isUser, 
  timestamp,
  showAvatar = true,
  highlightKeywords = []
}: MessageBubbleProps) {
  // Highlight keywords in content
  const renderContent = () => {
    if (highlightKeywords.length === 0) return content;
    
    let result = content;
    highlightKeywords.forEach(keyword => {
      result = result.replace(
        new RegExp(keyword, 'g'),
        `<span class="text-[#5B6BFF] font-medium">${keyword}</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className={cn("flex gap-2 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
      {/* Avatar for AI */}
      {!isUser && showAvatar && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7C8CFF] to-[#5B6BFF] flex items-center justify-center">
          <span className="text-white text-xs font-bold">灵</span>
        </div>
      )}
      
      {/* Spacer when no avatar */}
      {!isUser && !showAvatar && <div className="w-8" />}

      <div className={cn("flex flex-col gap-1", isUser ? "items-end" : "items-start")}>
        {/* Name for AI */}
        {!isUser && showAvatar && (
          <span className="text-xs text-muted-foreground ml-1">灵犀助理</span>
        )}
        
        {/* Bubble */}
        <div
          className={cn(
            "px-4 py-3 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "lingxi-gradient text-white rounded-br-sm"
              : "bg-white lingxi-shadow text-foreground rounded-bl-sm"
          )}
        >
          {renderContent()}
        </div>

        {/* Timestamp */}
        {timestamp && (
          <span className="text-[10px] text-muted-foreground px-1">{timestamp}</span>
        )}
      </div>
    </div>
  );
}

// Image message component
interface ImageMessageProps {
  imageUrl: string;
  isUser: boolean;
  timestamp?: string;
}

export function ImageMessage({ imageUrl, isUser, timestamp }: ImageMessageProps) {
  return (
    <div className={cn("flex gap-2 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
      <div className={cn("flex flex-col gap-1", isUser ? "items-end" : "items-start")}>
        <div className="w-40 h-56 rounded-2xl overflow-hidden lingxi-shadow">
          <img 
            src={imageUrl} 
            alt="用户上传的图片"
            className="w-full h-full object-cover"
          />
        </div>
        {timestamp && (
          <span className="text-[10px] text-muted-foreground px-1">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
