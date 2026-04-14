import type { ReactNode } from "react";

interface CardProps {
    image: string;
    alt: string;
    children: ReactNode;
    imageClass?: string;
}

export default function Card({ image, alt, children, imageClass = "aspect-video" }: CardProps) {
    return (
        <div className="overflow-hidden h-full flex flex-col">
            <img
                src={image}
                alt={alt}
                className={`w-full object-cover ${imageClass}`}
            />
            {children}
        </div>
    );
}