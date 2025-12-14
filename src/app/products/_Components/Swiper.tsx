"use client";
import { convertDriveLink } from "@/lib/helper/getImageUrl";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwipComp({ images, scrAlt }: { images: string[]; scrAlt: string }) {
  return (
    <Swiper
      loop
      modules={[Pagination]}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      spaceBetween={10}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const originalUrl = convertDriveLink(images[index]);
          const proxyUrl = `/_next/image?url=${encodeURIComponent(
            originalUrl
          )}&w=64&q=75`;
          const altText = `${scrAlt} - Thumbnail ${index + 1}`;

          return `
            <span class="${className} swiper-pagination-bullet">
              <img 
                src="${proxyUrl}" 
                alt="${altText}" 
                class="swiper-bullet-image"
              />
            </span>`;
        },
      }}
      onPaginationUpdate={(swiper) => {
        swiper.pagination.bullets.forEach((bullet) => {
          const el = bullet as HTMLElement;
          if (el.classList.contains("swiper-pagination-bullet-active")) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      }}
      className='swiper-pagination-under-slide'
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className='relative w-full aspect-square'>
          <Image
            src={convertDriveLink(img)}
            fill
            alt={`${scrAlt}-${index}`}
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipComp;
