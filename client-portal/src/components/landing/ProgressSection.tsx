import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TASKS = [
  'Extracting Data',
  'Reconciling Data',
  'Classifying Data',
  'Preparing Trial Balance',
  'Preparing Financial Statements',
  'Generating PDF',
];

export default function ProgressSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const taskRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !barRef.current) return;

    // gsap.context() reverts ALL GSAP changes on cleanup — fixes React StrictMode double-mount
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=350%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const taskZone = 0.75;

          taskRefs.current.forEach((task, i) => {
            if (!task) return;
            const taskStart = (i / TASKS.length) * taskZone;
            const taskEnd = ((i + 1) / TASKS.length) * taskZone;
            const circle = task.querySelector('.task-circle') as HTMLElement;
            const label = task.querySelector('.task-label') as HTMLElement;
            const dots = task.querySelector('.task-dots') as HTMLElement;
            const num = task.querySelector('.task-number') as HTMLElement;
            const check = task.querySelector('.task-check') as HTMLElement;
            if (!circle || !label || !dots || !num || !check) return;

            if (p < taskStart) {
              circle.className = 'task-circle';
              label.style.color = '';
              label.style.fontWeight = '';
              dots.classList.add('hidden');
              dots.classList.remove('animating');
              num.classList.remove('hidden');
              check.classList.add('hidden');
            } else if (p < taskEnd) {
              circle.className = 'task-circle active';
              label.style.color = '#2D2D2D';
              label.style.fontWeight = '500';
              dots.classList.remove('hidden');
              dots.classList.add('animating');
              num.classList.remove('hidden');
              check.classList.add('hidden');
            } else {
              circle.className = 'task-circle complete';
              label.style.color = '#1A3A6B';
              label.style.fontWeight = '600';
              dots.classList.add('hidden');
              dots.classList.remove('animating');
              num.classList.add('hidden');
              check.classList.remove('hidden');
            }

            if (i > 0) {
              const line = lineRefs.current[i - 1];
              if (line) {
                if (p >= taskStart) line.classList.add('complete');
                else line.classList.remove('complete');
              }
            }
          });

          if (p > 0.82) {
            const f = Math.min((p - 0.82) / 0.12, 1);
            gsap.set(barRef.current, { opacity: 1 - f, scale: 1 - f * 0.03, y: -f * 20 });
          } else {
            gsap.set(barRef.current, { opacity: 1, scale: 1, y: 0 });
          }
        }
      });
    }, sectionRef);

    // Animated dots
    const interval = setInterval(() => {
      document.querySelectorAll('.task-dots.animating').forEach(el => {
        const d = el as HTMLElement;
        d.textContent = d.textContent === '...' ? '.' : (d.textContent || '') + '.';
      });
    }, 500);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={sectionRef} id="progress-section" className="relative bg-brand-bg h-screen flex items-center justify-center pt-20">
      <div ref={barRef} className="flex flex-col items-start">
        {TASKS.map((label, i) => (
          <div key={i}>
            {i > 0 && <div ref={el => { lineRefs.current[i - 1] = el; }} className="task-line" />}
            <div ref={el => { taskRefs.current[i] = el; }} className="flex items-center gap-4">
              <div className="task-circle">
                <span className="task-number">{i + 1}</span>
                <svg className="task-check hidden w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="task-label text-gray-400 text-lg font-medium">{label}</span>
              <span className="task-dots text-gray-400 text-lg hidden"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
