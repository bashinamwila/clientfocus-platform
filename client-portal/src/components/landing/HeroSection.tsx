import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RECEIPTS = [
  { src: '/images/receipts1.png',    left: 6,  top: 10, width: 230, rotation: -12, speed: 1.6 },
  { src: '/images/receipts1.png',    left: 68, top: 12, width: 200, rotation: 8,   speed: 2.0 },
  { src: '/images/receipts1.png',    left: 3,  top: 55, width: 250, rotation: -5,  speed: 1.3 },
  { src: '/images/receipts1.png',    left: 75, top: 50, width: 210, rotation: 14,  speed: 1.8 },
  { src: '/images/receipts1.png',    left: 12, top: 72, width: 190, rotation: -8,  speed: 1.5 },
  { src: '/images/receipts2.png',    left: 62, top: 65, width: 230, rotation: 6,   speed: 1.7 },
  { src: '/images/receipts3.png',    left: 8,  top: 32, width: 260, rotation: -10, speed: 1.4 },
  { src: '/images/receipts4.png',    left: 72, top: 30, width: 220, rotation: 11,  speed: 1.9 },
  { src: '/images/spreadsheet.webp', left: 64, top: 5,  width: 250, rotation: -3,  speed: 1.2 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);
  const receiptRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // gsap.context() reverts ALL GSAP changes on cleanup — fixes React StrictMode double-mount
    const ctx = gsap.context(() => {
      const receiptEls = receiptRefs.current.filter(Boolean) as HTMLImageElement[];
      const nav = document.querySelector('nav');

      // Compute fly-off directions
      const flyData = receiptEls.map((_, i) => {
        const left = RECEIPTS[i].left;
        let x: number, y: number;
        if (left < 35) {
          x = -(100 + Math.random() * 60);
          y = -(30 + Math.random() * 70);
        } else if (left > 60) {
          x = 100 + Math.random() * 60;
          y = -(30 + Math.random() * 70);
        } else {
          x = (Math.random() - 0.5) * 160;
          y = -(100 + Math.random() * 60);
        }
        return { x, y, rot: (Math.random() - 0.5) * 540 };
      });

      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        }
      });

      // Scroll indicator disappears
      heroTL.to(scrollIndRef.current, { opacity: 0, duration: 0.05 }, 0);

      // Nav hides during story
      if (nav) heroTL.to(nav, { opacity: 0, y: -20, duration: 0.08 }, 0.02);

      // Phase 1: Gentle drift
      heroTL.to(receiptEls, {
        y: (i: number) => 40 + RECEIPTS[i].speed * 35,
        rotation: (i: number) => RECEIPTS[i].rotation + (Math.random() - 0.5) * 15,
        ease: 'sine.inOut',
        duration: 0.30,
      }, 0);

      // Phase 2: FLY OFF
      heroTL.to(receiptEls, {
        x: (i: number) => flyData[i].x + 'vw',
        y: (i: number) => flyData[i].y + 'vh',
        rotation: (i: number) => flyData[i].rot,
        scale: 0.4,
        opacity: 0,
        ease: 'power4.in',
        stagger: { each: 0.025, from: 'center' },
        duration: 0.35,
      }, 0.30);

      // Phase 3: Hero text fades
      heroTL.to(contentRef.current, {
        opacity: 0, y: -40, ease: 'power2.in', duration: 0.20,
      }, 0.35);

      // Phase 4: Background fades to brand-bg
      heroTL.to(bgRef.current, {
        opacity: 0, ease: 'power1.inOut', duration: 0.12,
      }, 0.62);

      // Nav reappears at progress section
      const progressEl = document.getElementById('progress-section');
      if (nav && progressEl) {
        ScrollTrigger.create({
          trigger: progressEl,
          start: 'top 20%',
          onEnter: () => gsap.to(nav, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }),
          onLeaveBack: () => gsap.to(nav, { opacity: 0, y: -20, duration: 0.3 }),
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      // Nav is outside the context scope — reset its inline styles manually
      const navEl = document.querySelector('nav');
      if (navEl) {
        gsap.set(navEl, { clearProps: 'all' });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative bg-brand-bg h-screen overflow-hidden"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/images/Financial paperwork on display.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Receipt scatter */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {RECEIPTS.map((r, i) => (
          <img
            key={i}
            ref={el => { receiptRefs.current[i] = el; }}
            src={r.src}
            alt=""
            className="receipt-img"
            data-speed={r.speed}
            style={{
              left: `${r.left}%`,
              top: `${r.top}%`,
              width: `${r.width}px`,
              transform: `rotate(${r.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex items-center justify-center h-full pt-16">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-navy uppercase leading-tight tracking-wide mb-6">
            There is no excuse now, why you should not have your books done
          </h1>
          <p className="font-body text-brand-charcoal text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Transform your messy piles of invoices, bank statements, and spreadsheets into professional, audit-ready financial statements in minutes. Built for accuracy and designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-brand-navy text-white px-8 py-3 rounded text-base font-semibold hover:bg-brand-blue transition-colors w-full sm:w-auto text-center">
              Create Account
            </Link>
            <button className="bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-brand-navy hover:text-white transition-colors w-full sm:w-auto">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-brand-navy/60 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-6 h-6 text-brand-navy/50 animate-scroll-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
