import type { ReactNode } from "react";

interface CardProps {
    image: string;
    alt: string;
    children: ReactNode;
}

export default function Card({ image, alt, children }: CardProps) {
    return (
       <div className="overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        {children}
      </div>
    </div>
    );
}