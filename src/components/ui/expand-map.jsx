"use client"

import React, { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function LocationMap({
  location = "San Francisco, CA",
  coordinates = "",
  className,
  color = "emerald",
  embedQuery,
  openHref,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const resolvedQuery = embedQuery || location
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(resolvedQuery)}&z=17&output=embed`
  const mapsHref =
    openHref || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resolvedQuery)}`

  const colorMap = {
    blue: { base: "#3b82f6", rgb: "59, 130, 246", tailwind: "text-blue-400" },
    pink: { base: "#ec4899", rgb: "236, 72, 153", tailwind: "text-pink-400" },
    emerald: { base: "#34D399", rgb: "52, 211, 153", tailwind: "text-emerald-400" },
  }

  const activeColor = colorMap[color] || colorMap.emerald

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded((value) => !value)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: "100%",
          height: isExpanded ? 280 : 140,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        <iframe
          title={`${location} map`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="drop-shadow-lg"
                  style={{ filter: `drop-shadow(0 0 10px rgba(${activeColor.rgb}, 0.45))` }}
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill={activeColor.base}
                  />
                  <circle cx="12" cy="9" r="2.5" className="fill-[#111]" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-5">
          <div className="flex items-start justify-between">
            <motion.div
              animate={{
                opacity: isExpanded ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={activeColor.tailwind}
                animate={{
                  filter: isHovered
                    ? `drop-shadow(0 0 8px rgba(${activeColor.rgb}, 0.6))`
                    : `drop-shadow(0 0 4px rgba(${activeColor.rgb}, 0.3))`,
                }}
                transition={{ duration: 0.3 }}
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </motion.svg>
            </motion.div>

            <motion.div
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm"
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeColor.base }} />
              <span className="text-[10px] font-medium uppercase tracking-wide text-white/70">Live</span>
            </motion.div>
          </div>

          <div className="relative z-20 space-y-1">
            <motion.h3
              className="text-lg font-semibold tracking-tight text-white"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  {coordinates ? (
                    <p className="text-xs font-mono text-white/60">{coordinates}</p>
                  ) : null}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 transition hover:border-white/25 hover:bg-black/50"
                  >
                    Open in Google Maps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="mt-2 h-px w-full origin-left"
              style={{
                background: `linear-gradient(to right, rgba(${activeColor.rgb}, 0.5), rgba(${activeColor.rgb}, 0.1), transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isHovered || isExpanded ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      <motion.p
        className="pointer-events-none absolute -bottom-6 left-1/2 whitespace-nowrap text-[10px] text-white/40"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  )
}
