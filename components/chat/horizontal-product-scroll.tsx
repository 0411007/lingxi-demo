"use client";

interface ScrollProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface HorizontalProductScrollProps {
  title: string;
  products: ScrollProduct[];
}

export function HorizontalProductScroll({ title, products }: HorizontalProductScrollProps) {
  return (
    <div className="max-w-full ml-10">
      {/* Title */}
      <h4 className="text-sm font-medium text-foreground mb-3">{title}</h4>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2 -mr-4 pr-4">
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-[100px] cursor-pointer group"
          >
            {/* Product Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-muted mb-2 lingxi-shadow">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Product Info */}
            <p className="text-xs text-muted-foreground line-clamp-1 mb-0.5">{product.name}</p>
            <p className="text-sm font-bold text-[#FF4D4F]">¥{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
