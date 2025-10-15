"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { convertDriveLink } from "@/lib/helper/getImageUrl";
import { Autoplay, Pagination } from "swiper/modules";

function SwipComp({ images, scrAlt }: { images: string[]; scrAlt: string }) {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      spaceBetween={10}
      //   Handle Dotts Style
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `
            <span class="${className}" 
              style="
                width: 12px;
                height: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin: 0 4px;
                overflow: hidden;
                border: 2px solid transparent;
                transition: all 0.3s ease;
                background-color: #2d1e11;
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
            el.style.border = "2px solid transparent";
            el.style.transform = "scale(1)";
          }
        });
      }}
      className='rounded-md shadow-lg'
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className='relative aspect-square'>
          <Image
            src={convertDriveLink(img)}
            sizes=''
            fill
            alt={`${scrAlt}-${index}`}
            className='object-cover rounded-md'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipComp;
