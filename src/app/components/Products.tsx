"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.png";

const products = [
  {
    id: 1,
    image: product4,
    title: "ELITE WEIGHTED VEST",
    subtitle: "Flagship Wearable Resistance",
    description:
      "Redefine your limits with a vest designed to move with you, not against you. This flagship model features a micro-adjustable tension system that locks the weight to your center of gravity. By eliminating \"vest bounce\" and evenly distributing the load, it protects your lower back while forcing maximum engagement from your core.",
    badge: "Upto 25 KGS",
    badgeLabel: "Adjustable Capacity",
  },
  {
    id: 5,
    image: product5,
    title: "THE AGILE ALTERNATIVE",
    subtitle: "Precision Meets Portability",
    description:
      "All the precision of our 25kg flagship in a more nimble, 10kg frame. Perfect for high-repetition bodyweight work and explosive movements, this version features our signature micro-tension tech to anchor the weight to your center of gravity. Move faster, train longer, and protect your spine with a vest that moves with you, not against you.",
    badge: "Upto 10 KGS",
    badgeLabel: "Adjustable Capacity",
  },
  {
    id: 2,
    image: product3,
    title: "HIP & THIGH TRAINER",
    subtitle: "Unlock your lower body power",
    description:
      "Most leg workouts ignore the deep stabilizers that keep you fast and injury-free. Through all of your natural movements, this exercise works your lateral muscles, hip flexors, and glutes. Ideal for warm-ups, rehabilitation, or developing functional strength and mobility that regular weights cannot match.",
    badge: "Upto 10 KGS",
    badgeLabel: "Adjustable Capacity",
  },
  {
    id: 3,
    image: product1,
    title: "WRIST WEIGHT CUFFS",
    subtitle: "Precision Resistance Training",
    description:
      "Whether you're powering through a morning walk, adding heat to your shadow-boxing, or just moving through your day, these cuffs add that extra burn without the bulk. Designed to stay snug and move with you, they turn every motion into progress. Just strap them on and go.",
    badge: "2 KGS",
    badgeLabel: "Per Cuff",
  },
  {
    id: 4,
    image: product2,
    title: "ANKLE WEIGHT SYSTEM",
    subtitle: "Make every step count",
    description:
      "Transform every step into a strength movement with our modular ankle weight system. Featuring removable weight pouches. These ankle weights adapt to any activity — from yoga and walking to HIIT and agility drills.",
    badge: "Upto 4 KGS",
    badgeLabel: "Adjustable Capacity",
  }
];

const AUTO_DELAY = 5000; // 5 seconds

export function Products() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (next === current) return;
      setAnimDir(next > current ? "right" : "left");
      setTimeout(() => {
        setCurrent(next);
        setAnimDir(null);
      }, 300);
    },
    [current]
  );

  const prev = () => goTo((current - 1 + products.length) % products.length);
  const next = useCallback(() => goTo((current + 1) % products.length), [current, goTo]);

  // Auto-advance & progress bar
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      setProgress(0);
      return;
    }

    setProgress(0);
    const tickMs = 50;
    const steps = AUTO_DELAY / tickMs;

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / steps, 100));
    }, tickMs);

    intervalRef.current = setInterval(() => {
      setProgress(0);
      next();
    }, AUTO_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current, isHovered, next]);

  const product = products[current];

  return (
    <section
      id="products"
      className="bg-zinc-950 min-h-screen text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden font-['Inter',_sans-serif]"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E60000]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl tracking-wide mb-4 text-center">
            OUR <span className="text-[#E60000]">ELITE</span> PRODUCTS
          </h2>
          <p className="text-gray-400 max-w-2xl text-center text-sm md:text-base leading-relaxed">
            Stop relying on stationary machines. Transform your everyday movement
            into powerful strength training with our wearable resistance equipment.
          </p>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Product Image */}
          <div
            className="relative group perspective"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E60000]/20 to-transparent rounded-3xl transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6" />
            <div
              key={product.id}
              className="relative z-10"
              style={{
                opacity: animDir ? 0 : 1,
                transform: animDir
                  ? `translateX(${animDir === "right" ? "40px" : "-40px"})`
                  : "translateX(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <img
                src={product.image}
                alt={`${product.title} — ${product.subtitle} by IYPE Athletiq`}
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-contain bg-white/5 aspect-[4/5] md:aspect-square lg:aspect-[4/5] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] p-4"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 left-8 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block">
              <span className="text-[#E60000] font-bold text-xl block">
                {product.badge}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                {product.badgeLabel}
              </span>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-8 right-8 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hidden md:flex items-center gap-2">
              <span className="text-white font-bold text-sm">{current + 1}</span>
              <span className="text-gray-500 text-sm">/</span>
              <span className="text-gray-400 text-sm">{products.length}</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: animDir ? 0 : 1,
              transform: animDir
                ? `translateX(${animDir === "right" ? "40px" : "-40px"})`
                : "translateX(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {/* Product number tag */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#E60000]" />
              <span className="text-[#E60000] text-xs uppercase tracking-[0.3em] font-medium">
                {String(current + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="font-['Bebas_Neue',_sans-serif] text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
                {product.title}
              </h3>
              <p className="text-[#E60000] text-sm uppercase tracking-widest mt-2 font-medium">
                {product.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-[#E60000]/30 pl-4">
              {product.description}
            </p>

            {/* Dots */}
            <div className="flex gap-3 mt-2">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`transition-all duration-300 rounded-full ${idx === current
                    ? "w-8 h-2 bg-[#E60000]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Go to product ${idx + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicators */}
            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                  {isHovered ? (
                    <span className="text-[#E60000] animate-pulse">● Paused</span>
                  ) : (
                    "Next Product"
                  )}
                </p>
                {!isHovered && (
                  <span className="text-[10px] text-gray-600 font-mono">
                    {Math.ceil((5000 - (progress * 50)) / 1000)}s
                  </span>
                )}
              </div>

              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#E60000] to-red-500 rounded-full transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(230,0,0,0.5)]"
                  style={{
                    width: `${progress}%`,
                    opacity: isHovered ? 0.4 : 1
                  }}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={prev}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E60000] hover:bg-[#E60000]/10 transition-all duration-300"
                aria-label="Previous product"
              >
                <ChevronLeft
                  size={20}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </button>
              <button
                onClick={next}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E60000] hover:bg-[#E60000]/10 transition-all duration-300"
                aria-label="Next product"
              >
                <ChevronRight
                  size={20}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}