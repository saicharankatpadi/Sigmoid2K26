import React from 'react';
import './animated-glow-card.css';

const CardCanvas = ({ children, className = "" }) => {
  return (
    <div className={`card-canvas relative overflow-visible ${className}`}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0"></feColorMatrix>
        </filter>
      </svg>
      <div className="card-backdrop absolute inset-0 -z-10"></div>
      {children}
    </div>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div className={`glow-card ${className} relative isolate`}>
      <div className="border-element border-left absolute inset-y-0 left-0 w-[2px]"></div>
      <div className="border-element border-right absolute inset-y-0 right-0 w-[2px]"></div>
      <div className="border-element border-top absolute inset-x-0 top-0 h-[2px]"></div>
      <div className="border-element border-bottom absolute inset-x-0 bottom-0 h-[2px]"></div>
      <div className="card-content h-full w-full">
        {children}
      </div>
    </div>
  );
};

export { CardCanvas, Card };
