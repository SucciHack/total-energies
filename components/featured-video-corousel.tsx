"use client"

import { useState, useRef } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { VideoItem } from "@/app/(frontend)/page"
import Image from "next/image"


interface VideoCarouselProps {
  videos: VideoItem[]
  className?: string
}

export default function VideoCarousel({ videos, className = "" }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  // Custom navigation handlers
  const handlePrev = () => {
    swiperRef.current?.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.slideNext()
  }

  return (
    <div className={`relative ${className} max-w-[90%] mx-auto mt-8 py-6`}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="w-full"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className=" rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video cursor-pointer group">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center opacity-80 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-red-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{video.title}</h3>
                {video.linkText && (
                  <a
                    href={video.videoUrl}
                    className="text-red-600 text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.linkText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation */}
      <div className="flex items-center mt-6 ml-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors mr-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Custom pagination */}
      <div className="swiper-pagination flex justify-center mt-6"></div>
    </div>
  )
}
