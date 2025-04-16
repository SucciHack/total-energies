import { AnimatedTestimonialsDemo } from '@/components/animated-testimonial'
import VideoCarousel from '@/components/featured-video-corousel'
import FooterV2 from '@/components/footer'
import HeroCarousel from '@/components/hero'
import MediaCenter from '@/components/media-center'
import ProductsServicesSection from '@/components/product-service-section'
import React from 'react'

export type VideoItem = {
  id:string
  thumbnail: string
  videoUrl:string
  title:string
  linkText:string
}
export default function page() {
  const videoData: VideoItem[] = [
    {
      id: "1",
      thumbnail: "/man-gas-station-with-car.jpg?height=400&width=600",
      videoUrl: "https://example.com/video1",
      title: "Tilenga Project's Chimpanzee Corridor Restoration Program",
      linkText: "Watch our videos here",
    },
    {
      id: "2",
      thumbnail: "/people-spending-time-gas-station.jpg?height=400&width=600",
      videoUrl: "https://example.com/video2",
      title: "The Soybeans & Maize Growing Pilot Project",
      linkText: "Learn more",
    },
    {
      id: "3",
      thumbnail: "/stylish-black-woman-car-salon.jpg?height=400&width=600",
      videoUrl: "https://example.com/video3",
      title: "Sustainable Farming Practices in East Africa",
      linkText: "Learn more",
    },
    {
      id: "4",
      thumbnail: "/people-spending-time-gas-station.jpg?height=400&width=600",
      videoUrl: "https://example.com/video4",
      title: "Wildlife Conservation Efforts in Uganda",
      linkText: "Learn more",
    },
  ]
  return (
    <div className='bg-white shadow relative'>
      <HeroCarousel/>
      <ProductsServicesSection/>
      <div className='bg-[#FBFCFD]'>
        <AnimatedTestimonialsDemo/>
      </div>
      <MediaCenter/>
      <VideoCarousel videos={videoData}/>
      <FooterV2/>
    </div>
  )
}
