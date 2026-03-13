import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import technicalThumb from "../../assets/technical-thumb.png"

const cardData = {
  1: {
    title: "Technical",
    description: "Master real-world technical skills",
    image: technicalThumb,
  },
  2: {
    title: "Non Technical",
    description: "Excel in management and soft skills",
    image: "/assets/images/promo-2.png",
  },
  3: {
    title: "Esports",
    description: "Compete and win in gaming tournaments",
    image: "/assets/images/promo-3.png",
  },
}

const initialCards = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }) {
  const data = cardData[contentType]
  const navigate = useNavigate()

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
        <img
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-4 pb-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white text-lg">{data.title}</span>
          <span className="text-white/60 text-sm">{data.description}</span>
        </div>
        <button 
          onClick={() => {
            const categoryMap = {
              'Technical': 'Technical',
              'Non Technical': 'Non-Technical',
              'Esports': 'E-sports'
            };
            navigate('/events', { state: { category: categoryMap[data.title] } });
          }}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors pl-4 pr-3 text-sm font-medium text-white"
        >
          View
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[290px] w-[324px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-2 shadow-2xl will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  useEffect(() => {
    const handleAnimate = () => {
      setIsAnimating(true)
      setCards((prevCards) => {
        const nextContentType = ((prevCards[2].contentType % 3) + 1)
        return [...prevCards.slice(1), { id: nextId, contentType: nextContentType }]
      })
      setNextId((prev) => prev + 1)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 1000)
    }

    const intervalId = setInterval(() => {
        handleAnimate()
    }, 3000)
    
    return () => clearInterval(intervalId)
  }, [nextId])

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[450px] w-full overflow-hidden sm:w-[550px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
