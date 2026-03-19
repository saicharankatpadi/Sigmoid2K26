import React, { useEffect, useState, useRef } from 'react';

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Replace this with your deployed Apps Script Web App URL after redeployment
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-uyN4zAK748b0otUd3CbreX7SQqGu_blZ_-2k2Qm1H3RtQIkFrPLc_aqmMpUNvqmo/exec';

const POLL_INTERVAL_MS = 60_000;   // Poll every 60 seconds
const TOAST_VISIBLE_MS = 5_000;    // Each toast shows for 5 seconds
const TOAST_GAP_MS = 1_500;    // Gap between consecutive toasts

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const PASS_COLORS = {
  Elite: { accent: '#3b82f6', bg: 'rgba(59,130,246,0.12)', emoji: '🎟️' },
  Supreme: { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', emoji: '👑' },
  Prime: { accent: '#06b6d4', bg: 'rgba(6,182,212,0.12)', emoji: '⚡' },
  Ultimate: { accent: '#f59e0b', bg: 'rgba(245,158,11,0.12)', emoji: '🚀' },
};

function timeAgo(dateValue) {
  const date = new Date(dateValue);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} day ago`;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function LiveFeedToast() {
  const [queue, setQueue] = useState([]);   // pending toasts
  const [current, setCurrent] = useState(null); // visible toast
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const seenIdsRef   = useRef(new Set());
  const queueRef     = useRef([]);
  const isFirstFetch = useRef(true); // first load: mark seen silently, no toasts

  // Keep ref in sync
  useEffect(() => { queueRef.current = queue; }, [queue]);

  // ── Fetch from Apps Script ─────────────────────────────────────────────────
  const fetchFeed = async () => {
    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL_HERE') return;
    try {
      const res = await fetch(APPS_SCRIPT_URL);
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const firstLoad = isFirstFetch.current;
      if (firstLoad) isFirstFetch.current = false;

      const newItems = data.filter(item => {
        // Skip error rows or rows with invalid passType
        if (!item.passType || item.passType === 'ERROR') return false;
        if (!['Elite', 'Supreme', 'Prime', 'Ultimate'].includes(item.passType)) return false;

        const id = `${item.name}-${item.timestamp}`;
        if (seenIdsRef.current.has(id)) return false;
        seenIdsRef.current.add(id);
        return true;
      }).map(item => ({
        ...item,
        name: (!item.name || item.name === 'Participant') ? 'A new member' : item.name,
      }));

      // On first load: just mark everything as seen — don't show old entries as toasts
      if (firstLoad) return;

      if (newItems.length > 0) {
        setQueue(prev => [...prev, ...newItems]);
      }
    } catch (_) { /* silent fail */ }
  };

  // Poll on mount and every POLL_INTERVAL_MS
  useEffect(() => {
    fetchFeed();
    const id = setInterval(fetchFeed, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // ── Toast sequencer ────────────────────────────────────────────────────────
  useEffect(() => {
    if (current || queue.length === 0) return;

    const [next, ...rest] = queue;
    setQueue(rest);
    setCurrent(next);

    // Animate in after microtask
    requestAnimationFrame(() => setVisible(true));

    // Auto-hide after TOAST_VISIBLE_MS
    const hideTimer = setTimeout(() => {
      setVisible(false);
      // Remove after CSS exit animation (300ms)
      setTimeout(() => {
        setCurrent(null);
        setDismissed(false);
      }, 350);
    }, TOAST_VISIBLE_MS);

    return () => clearTimeout(hideTimer);
  }, [queue, current]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => { setCurrent(null); setDismissed(false); }, 350);
  };

  if (!current) return null;

  const pass = PASS_COLORS[current.passType] || { accent: '#00c8e0', bg: 'rgba(0,200,224,0.1)', emoji: '🎫' };
  const nameStr = current.name || 'Someone';
  const timeStr = timeAgo(current.timestamp);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        maxWidth: '320px',
        width: 'calc(100vw - 48px)',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      role="alert"
      aria-live="polite"
    >
      <div style={{
        background: '#0f172a',
        border: `1px solid ${pass.accent}55`,
        borderLeft: `4px solid ${pass.accent}`,
        borderRadius: '14px',
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 4px 12px ${pass.accent}22`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>

        {/* Emoji icon */}
        <div style={{
          fontSize: '22px',
          lineHeight: 1,
          flexShrink: 0,
          width: '38px',
          height: '38px',
          background: pass.bg,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${pass.accent}33`,
        }}>
          {pass.emoji}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            margin: 0,
            fontSize: '13px',
            fontWeight: 700,
            color: '#f8fafc',
            lineHeight: 1.3,
            fontFamily: "'Segoe UI', sans-serif",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {nameStr}
          </p>
          <p style={{
            margin: '3px 0 0',
            fontSize: '12px',
            color: '#94a3b8',
            fontFamily: "'Segoe UI', sans-serif",
            lineHeight: 1.4,
          }}>
            just bought a{' '}
            <span style={{ color: pass.accent, fontWeight: 600 }}>
              {current.passType} Pass
            </span>
          </p>
          <p style={{
            margin: '5px 0 0',
            fontSize: '11px',
            color: '#64748b',
            fontFamily: "'Segoe UI', sans-serif",
          }}>
            🕐 {timeStr}
          </p>
        </div>

        {/* Dismiss ✕ */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss notification"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#475569',
            fontSize: '16px',
            lineHeight: 1,
            padding: '2px',
            flexShrink: 0,
            marginTop: '-2px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#f8fafc'}
          onMouseLeave={e => e.currentTarget.style.color = '#475569'}
        >
          ✕
        </button>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '4px',
        right: '4px',
        height: '3px',
        background: `${pass.accent}22`,
        borderRadius: '0 0 14px 14px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: pass.accent,
          borderRadius: '3px',
          animation: visible ? `shrink ${TOAST_VISIBLE_MS}ms linear forwards` : 'none',
        }} />
      </div>

      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
