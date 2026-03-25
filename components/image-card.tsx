"use client";

import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
}

export function ImageCard({ src, alt, aspectRatio = "portrait" }: ImageCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden shadow-float`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
