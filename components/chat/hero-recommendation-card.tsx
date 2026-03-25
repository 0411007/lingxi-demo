"use client";

interface HeroRecommendationCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  onGetOutfit?: () => void;
}

export function HeroRecommendationCard({ 
  title, 
  tags, 
  imageUrl,
  onGetOutfit 
}: HeroRecommendationCardProps) {
  return (
    <div className="max-w-[85%] ml-10">
      <div className="relative rounded-[20px] overflow-hidden lingxi-shadow-lg">
        {/* Image */}
        <div className="aspect-[4/5] w-full">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
          
          {/* CTA Button */}
          <button 
            onClick={onGetOutfit}
            className="w-full py-3 rounded-[24px] lingxi-gradient text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            一键获取同款穿搭
          </button>
        </div>
      </div>
    </div>
  );
}
