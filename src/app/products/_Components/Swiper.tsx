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
      //   Handle Dotts Style
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `
            <span class="${className}" 
              style="
                width: 10px;
                height: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin: 0 4px;
                overflow: hidden;
                border: 2px solid #2d1e11;
                transition: all 0.3s ease;
                background-color: #fff;
              ">
            </span>`;
        },
      }}
      //   add style while click on dotts
      onPaginationUpdate={(swiper) => {
        swiper.pagination.bullets.forEach((bullet) => {
          const el = bullet as HTMLElement;
          if (el.classList.contains("swiper-pagination-bullet-active")) {
            el.style.border = "2px solid #fff";
            el.style.transform = "scale(1.15)";
          } else {
            el.style.border = "2px solid #2d1e11";
            el.style.transform = "scale(1)";
          }
        });
      }}
      className='shadow-lg'
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className='relative w-full aspect-square'>
          <Image
            src={convertDriveLink(img)}
            fill
            alt={`${scrAlt}-${index}`}
            className='object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipComp;
