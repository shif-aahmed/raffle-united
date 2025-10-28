import React, { useEffect, useRef } from "react";
import "./LanguageTicker.css";

const langs = [
  "Spin the golden wheel and claim your fortune!","Thousands of participants, one golden chance!",
];

export default function LanguageTicker() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Duplicate contents once for infinite loop feel
    track.innerHTML = track.innerHTML + track.innerHTML;
  }, []);

  return (
    <div id="lang-slider" data-speed="21">
      <div className="track" ref={trackRef}>
        {langs.map((l, i) => (
          <span key={i} className="item">{l}</span>
        ))}
      </div>
    </div>
  );
}
