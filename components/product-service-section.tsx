"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

// Service card data with added descriptions
const services = [
  {
    id: 1,
    icon: "droplet",
    name: "Lubricants",
    description: "Premium lubricants for all types of engines and machinery",
    isNew: false,
  },
  {
    id: 2,
    icon: "flame",
    name: "Excellium Energy",
    description: "Advanced fuel technology for better performance and efficiency",
    isNew: true,
  },
  {
    id: 3,
    icon: "fuel",
    name: "TotalEnergies Gas",
    description: "Clean and efficient gas solutions for homes and businesses",
    isNew: false,
  },
  {
    id: 4,
    icon: "sun",
    name: "Sunshine Solar",
    description: "Renewable solar energy solutions for sustainable power",
    isNew: true,
  },
  {
    id: 5,
    icon: "car",
    name: "Car Care Products",
    description: "Complete range of products to keep your vehicle in top condition",
    isNew: false,
  },
  {
    id: 6,
    icon: "credit-card",
    name: "TotalEnergies Card",
    description: "Convenient payment solutions with exclusive benefits",
    isNew: false,
  },
  {
    id: 7,
    icon: "globe",
    name: "Professional",
    description: "Specialized solutions for business and industrial applications",
    isNew: false,
  },
  {
    id: 8,
    icon: "plane",
    name: "Aviation",
    description: "High-performance fuels and services for the aviation industry",
    isNew: false,
  },
]

// Custom SVG icons with consistent styling
const IconComponent = ({ name }: { name: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    droplet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    ),
    flame: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
      </svg>
    ),
    fuel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M3 22h12"></path>
        <path d="M8 22V2"></path>
        <path d="M12 22V9"></path>
        <path d="M20 22V4a2 2 0 0 0-2-2h-2v4l2 2"></path>
      </svg>
    ),
    sun: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M4.93 4.93l1.41 1.41"></path>
        <path d="M17.66 17.66l1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M6.34 17.66l-1.41 1.41"></path>
        <path d="M19.07 4.93l-1.41 1.41"></path>
      </svg>
    ),
    car: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
        <circle cx="6.5" cy="16.5" r="2.5"></circle>
        <circle cx="16.5" cy="16.5" r="2.5"></circle>
      </svg>
    ),
    "credit-card": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
      </svg>
    ),
    globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    plane: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
      </svg>
    ),
  }

  return iconMap[name] || null
}

export default function ProductsServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-sky-50 rounded-full opacity-50"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-sky-50 rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Products <span className="text-red-600">And</span> Services
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={cn(
                  "bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 h-full border border-sky-100 transition-all duration-500",
                  hoveredId === service.id ? "shadow-lg transform -translate-y-2" : "shadow-sm hover:shadow-md",
                )}
              >
                {service.isNew && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    NEW
                  </span>
                )}

                <div className="flex flex-col h-full">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 p-3",
                      hoveredId === service.id
                        ? "bg-red-600 text-white transform rotate-12"
                        : "bg-red-100 text-red-600",
                    )}
                  >
                    <IconComponent name={service.icon} />
                  </div>

                  <h3 className="text-xl font-bold text-red-600 mb-2">{service.name}</h3>

                  <p className="text-gray-600 text-sm mt-2 flex-grow">{service.description}</p>

                  <div
                    className={cn(
                      "mt-4 flex items-center text-sm font-medium transition-all duration-300",
                      hoveredId === service.id ? "text-red-600" : "text-gray-500",
                    )}
                  >
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "w-4 h-4 ml-1 transition-all duration-300",
                        hoveredId === service.id ? "transform translate-x-1" : "",
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
