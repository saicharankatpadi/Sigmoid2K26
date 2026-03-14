import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';

/* ── Page Component ─────────────────────────────────────── */
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div className="page-content">
        <img
          src={props.image}
          alt={`Page ${props.number}`}
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
    </div>
  );
});
Page.displayName = 'Page';

/* ── Main component ─────────────────────────────────────── */
export const MagazinePage = () => {
  const pages = Array.from({ length: 44 }, (_, i) => `/assets/magazine/page_${i + 1}.png`);
  const totalPages = pages.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const ambientRef = useRef(null);
  const flipSoundRef = useRef(null);
  const bookRef = useRef(null);

  // -- Audio Helpers --
  const getFlipAudio = useCallback(() => {
    if (!flipSoundRef.current) {
      flipSoundRef.current = new Audio('/assets/magazine/page-flip.mpeg');
      flipSoundRef.current.volume = 0.25;
    }
    return flipSoundRef.current;
  }, []);

  // -- Lifecycle: Sync music with state --
  useEffect(() => {
    if (ambientRef.current) {
      const onBoundary = (currentPage === 1 || currentPage === totalPages);
      
      // User: "sound only per flip" - often means background music should be 
      // very subtle or off unless the book is "active".
      // User: "background too music dont want much volume"
      if (isHovering && !onBoundary) {
        ambientRef.current.volume = 0.08; // Reduced volume
        ambientRef.current.play().catch(() => { });
      } else if (isFlipping) {
        ambientRef.current.volume = 0.05; // Even lower during flip to focus on flip sound
        ambientRef.current.play().catch(() => { });
      } else {
        ambientRef.current.pause();
      }
    }
  }, [isFlipping, isHovering, currentPage, totalPages]);

  const onFlipStart = useCallback(() => {
    setIsFlipping(true);
    const fa = getFlipAudio();
    if (fa) {
      fa.currentTime = 0;
      fa.play().catch(() => { });
    }
  }, [getFlipAudio]);

  const onFlipEnd = useCallback(() => {
    setIsFlipping(false);
  }, []);

  // -- Interaction Handlers --
  const onPage = useCallback((e) => {
    setCurrentPage(e.data + 1);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const onBoundary = (currentPage === 1 || currentPage === totalPages);
    if (!onBoundary && ambientRef.current) {
      ambientRef.current.currentTime = 0;
      ambientRef.current.play().catch(() => { });
    }
  };

  const flipPrev = () => {
    if (bookRef.current) {
      if (currentPage === 1) {
        bookRef.current.pageFlip().turnToPage(totalPages - 1);
      } else {
        bookRef.current.pageFlip().flipPrev();
      }
    }
  };

  const flipNext = () => {
    if (bookRef.current) {
      if (currentPage === totalPages) {
        bookRef.current.pageFlip().turnToPage(0);
      } else {
        bookRef.current.pageFlip().flipNext();
      }
    }
  };

  return (
    <div className="magazine-root">
      <audio 
        ref={ambientRef} 
        src="/assets/magazine/bg_music.mp4" 
        loop 
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* ── Header ── */}
      <div className="magazine-header-area">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="magazine-title-stack"
        >
          <h1 className="magazine-main-title">SIGMOID 2K24 Magazine</h1>
          <p className="magazine-subtitle">A National Level Technical symposium</p>
        </motion.div>
      </div>

      {/* ── Main Layout ── */}
      <div 
        className="magazine-main-layout"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Nav Button Left */}
        <button className="magazine-nav-btn prev" aria-label="Previous Page" onClick={flipPrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="magazine-stage">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="magazine-book-wrapper"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <HTMLFlipBook
              width={500}
              height={650}
              size="stretch"
              minWidth={280}
              maxWidth={1100}
              minHeight={450}
              maxHeight={1400}
              maxShadowOpacity={0.4}
              showCover={true}
              mobileScrollSupport={true}
              className="magazine-flipbook"
              onFlipStart={onFlipStart}
              onFlipEnd={onFlipEnd}
              onPage={onPage}
              onFlip={onPage} // Double check counter updates on every flip 
              ref={bookRef}
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              showPageCorners={true}
              useMouseEvents={true}
              clickEventForward={true}
              style={{ margin: '0 auto' }}
            >
              {pages.map((img, idx) => (
                <Page key={idx} number={idx + 1} image={img} />
              ))}
            </HTMLFlipBook>
          </motion.div>
        </div>

        {/* Nav Button Right */}
        <button className="magazine-nav-btn next" aria-label="Next Page" onClick={flipNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Page Number Display ── */}
      <div className="magazine-page-nav">
         <span className="page-no-label">Page No :</span>
         <span className="page-no-value">{currentPage} / {totalPages}</span>
      </div>

      <style>{`
        .magazine-root {
          height: 100dvh;
          background-color: #0A0A0A; 
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          overflow: hidden;
          position: relative;
          color: white;
          font-family: 'DM Sans', sans-serif;
        }

        .magazine-header-area {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-top: 4rem; 
        }
        .magazine-main-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 900;
          font-family: 'Pirata One', cursive;
          background: linear-gradient(to bottom, #ffeb3b 0%, #fbc02d 50%, #f57f17 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 15px rgba(0,0,0,0.8));
        }
        .magazine-subtitle {
          font-size: clamp(0.7rem, 1.6vw, 1.2rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-top: -0.25rem;
        }

        .magazine-main-layout {
          display: flex;
          width: 100%;
          flex: 1;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin: 0.5rem 0;
          position: relative;
        }

        .magazine-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          max-height: 75vh; 
        }
        .magazine-book-wrapper {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
          border-radius: 12px;
          overflow: hidden;
        }

        /* Nav Buttons */
        .magazine-nav-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 20;
          flex-shrink: 0;
          backdrop-filter: blur(10px);
        }
        .magazine-nav-btn svg {
          width: 28px;
          height: 28px;
        }
        .magazine-nav-btn:hover {
          background: #f57f17;
          border-color: #f57f17;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 20px rgba(245, 127, 23, 0.4);
        }
        .magazine-nav-btn.prev {
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
        }
        .magazine-nav-btn.next {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
        }

        /* Page Styles */
        .demoPage {
          background-color: #1a1a1a;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .page-content {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 12px; /* Rounded corners for pages */
        }

        /* Page Numbering */
        .magazine-page-nav {
          margin-bottom: 3.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem 1.5rem;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 20;
        }
        .page-no-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        .page-no-value {
          color: #f57f17;
          font-size: 1.1rem;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .magazine-nav-btn {
            width: 44px;
            height: 44px;
          }
          .magazine-nav-btn svg {
            width: 20px;
            height: 20px;
          }
          .magazine-header-area {
            margin-top: 3rem;
          }
          .magazine-stage {
            max-height: 60vh;
          }
          .magazine-page-nav {
            margin-bottom: 2rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};
