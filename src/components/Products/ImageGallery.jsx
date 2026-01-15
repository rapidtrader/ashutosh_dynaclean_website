"use client";

import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <div className="flex flex-col items-center gap-6 p-6 mb-11">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full lg:max-w-[60rem] h-[1000px] rounded overflow-hidden"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover rounded"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
