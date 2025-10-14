// src/components/Roating-icon.tsx
"use client"

import { useEffect, useState } from "react"

const innerIcons = [
  { name: "Facebook", color: "bg-blue-600", icon: "/facebook.png" },
  { name: "TikTok", color: "bg-black", icon: "/tiktok.png" },
  { name: "Instagram", color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400", icon: "/instagram.png" },
  { name: "WhatsApp", color: "bg-green-500", icon: "/whatsapp.png" },
]

const outerIcons = [
  { name: "Shopee", color: "bg-orange-500", icon: "/shopee.png" },
  { name: "Line", color: "bg-green-500", icon: "/line.png" },
  { name: "Telegram", color: "bg-blue-400", icon: "/telegram.png" },
  { name: "Google", color: "bg-white", icon: "/google.png" },
]

export default function RotatingIcons() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center">
      {/* Outer circle ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-purple-200/40" />

      {/* Inner circle ring */}
      <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-purple-200/40" />

      {/* Outer icons */}
      <div
        className="absolute w-[500px] h-[500px]"
        style={{
          transform: `rotate(-${rotation}deg)`,
          transition: "transform 0.03s linear",
        }}
      >
        {outerIcons.map((social, index) => {
          const angle = (index * 360) / outerIcons.length + 45
          const radian = (angle * Math.PI) / 180
          const radius = 250
          const x = Math.cos(radian) * radius
          const y = Math.sin(radian) * radius

          return (
            <div
              key={social.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
              }}
            >
              <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <img src={social.icon} alt={social.name} className="w-12 h-12 object-contain" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Inner icons */}
      <div
        className="absolute w-[300px] h-[300px]"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.03s linear",
        }}
      >
        {innerIcons.map((social, index) => {
          const angle = (index * 360) / innerIcons.length
          const radian = (angle * Math.PI) / 180
          const radius = 150
          const x = Math.cos(radian) * radius
          const y = Math.sin(radian) * radius

          return (
            <div
              key={social.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(-${rotation}deg)`,
              }}
            >
              <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <img src={social.icon} alt={social.name} className="w-14 h-14 object-contain" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Center logo */}
      <div className="relative z-10 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <img src="/logomi.svg" className="w-14 h-14 object-contain" />

        </div>
      </div>
    </div>
  )
}
