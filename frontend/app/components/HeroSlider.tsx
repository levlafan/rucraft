"use client";

import Link from "next/link";

const slides = [
  { id: 1, gradient: "from-emerald-900 via-teal-800 to-cyan-900" },
  { id: 2, gradient: "from-stone-800 via-zinc-800 to-slate-800" },
  { id: 3, gradient: "from-green-900 via-emerald-800 to-teal-900" },
];

export function HeroSlider() {
  return (
    <section className="hero-slider">
      <div className="hero-slider-track">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`hero-slide hero-slide-${slide.id}`}
          />
        ))}
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title">
          САМЫ Й<br />ЛУЧШИЙ САЙЬ
        </h1>
        <Link href="/auth/register" className="hero-cta">
          зАРЕГИСТРИРОВАТЬСЯ
        </Link>
      </div>
      <div className="hero-nav-btns" aria-hidden="true">
        <button type="button" className="hero-nav-btn prev" aria-label="Предыдущий слайд">
          {/* Вставьте SVG */}
        </button>
        <button type="button" className="hero-nav-btn next" aria-label="Следующий слайд">
          {/* Вставьте SVG */}
        </button>
      </div>
    </section>
  );
}
