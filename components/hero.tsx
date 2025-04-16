"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Carousel slide data
const slides = [
  {
    id: 1,
    title: "Empowering payroll processors with the world's first AI platform",
    description: "Save time, attract more clients, boost security with our AI solution.",
    image: "/man-gas-station-with-car.jpg?height=600&width=500",
  },
  {
    id: 2,
    title: "Streamline your workflow with intelligent automation",
    description: "Reduce manual tasks by 80% and focus on what matters most to your business.",
    image: "/people-spending-time-gas-station.jpg?height=600&width=500",
  },
  {
    id: 3,
    title: "Secure, compliant, and always up-to-date",
    description: "Our platform ensures your payroll processes meet the latest regulations automatically.",
    image: "/stylish-black-woman-car-salon.jpg?height=600&width=500",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to go to the next slide
  const goToNextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  // Function to manually change slide
  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="mt-12 relative w-full h-screen overflow-hidden bg-[#f3f5f7]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Gradient background */}
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-32 w-32 h-32 rounded-lg opacity-30 bg-gradient-to-br from-white to-transparent" />
          
          <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between h-full py-12">
              {/* Left column - Text content */}
              <div className="w-full md:w-1/2 space-y-6 md:pr-8 z-20">
                <h1 
                  className={cn(
                    "text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight transition-all duration-700",
                    isAnimating && index === currentSlide ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
                  )}
                  style={{ transitionDelay: "100ms" }}
                >
                  {slide.title}
                </h1>
                <p 
                  className={cn(
                    "text-lg text-gray-600 transition-all duration-700",
                    isAnimating && index === currentSlide ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.description}
                </p>
                <div 
                  className={cn(
                    "transition-all duration-700",
                    isAnimating && index === currentSlide ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
                  )}
                  style={{ transitionDelay: "300ms" }}
                >
                  <Button className="rounded-full px-8 py-6 text-white bg-red-500 hover:bg-teal-600 flex items-center text-xl">
                    Discover
                  </Button>
                </div>
              </div>
              
              {/* Right column - Image */}
              <div 
                className={cn(
                  "w-full md:w-1/2 mt-10 md:mt-0 relative z-20 transition-all duration-700",
                  isAnimating && index === currentSlide ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
                )}
              >
                <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt="Professional using tech product"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                    priority={index === 0}
                    sizes="(max-width: 768px) , 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-teal-500 w-6" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
