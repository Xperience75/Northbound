"use client";

import { useEffect, useState } from "react";

export default function LiveBadge() {
  const [time, setTime] = useState<string>("");
  const [availability, setAvailability] = useState<string>("Accepting New Projects");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in West Africa Time (Lagos, UTC+1)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));

      const monthStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        month: "numeric",
      }).format(now);
      const month = Number.parseInt(monthStr, 10);
      if (!Number.isNaN(month) && month >= 1 && month <= 12) {
        const currentQ = Math.ceil(month / 3);
        const nextQ = currentQ === 4 ? 1 : currentQ + 1;
        setAvailability(`Accepting Q${currentQ}/Q${nextQ} Projects`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-line bg-cream/60 px-3.5 py-1.5 font-mono text-[11px] text-ink-soft">
      <span className="flex h-2 w-2 items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      </span>
      <span>Lagos, NG</span>
      {time && (
        <>
          <span className="text-ink-muted" aria-hidden>·</span>
          <span>{time} WAT</span>
        </>
      )}
      <span className="text-ink-muted hidden sm:inline" aria-hidden>·</span>
      <span className="text-accent font-medium hidden sm:inline">{availability}</span>
    </div>
  );
}
