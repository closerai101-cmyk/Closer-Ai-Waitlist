import { useState } from 'react';

interface TrailNode {
  label: string;
  title: string;
  stat: string;
  position: number;
}

const nodes: TrailNode[] = [
  { label: 'DAY 1', title: 'First Call', stat: '87% report breakthrough insights', position: 0 },
  { label: 'WEEK 2', title: 'Pattern Recognition', stat: 'Avg 34% improvement in objection handling', position: 25 },
  { label: 'WEEK 4', title: 'Emotional Control', stat: '2.1x better close rate under pressure', position: 50 },
  { label: 'MONTH 2', title: 'Objection Mastery', stat: '94% conversion on trained scenarios', position: 75 },
  { label: 'MONTH 3', title: 'Closing Machine', stat: '3.2x faster ramp vs traditional training', position: 100 },
];

export function ElevationTrail() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-[56px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-black tracking-tighter leading-none text-white/5 mb-12 md:mb-20 uppercase"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Your Ascent
        </h2>

        {/* Mobile: vertical timeline */}
        <ol className="md:hidden relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#C0152A]/0 before:via-[#C0152A]/60 before:to-[#C0152A]/0">
          {nodes.map((node, index) => (
            <li key={index} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-[#C0152A] border-[3px] border-[#050505] shadow-[0_0_0_2px_#C0152A33]"
              />
              <div
                className="text-[#C0152A] text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {node.label}
              </div>
              <div
                className="text-white text-base font-light mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {node.title}
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal trail */}
        <div className="hidden md:block relative mt-16 lg:mt-32">
          {/* Dotted trail line */}
          <svg
            className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2"
            preserveAspectRatio="none"
            viewBox="0 0 1000 20"
          >
            <path
              d="M 0 10 Q 250 5, 500 10 T 1000 10"
              stroke="#C0152A"
              strokeWidth="2"
              strokeDasharray="8 12"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
          </svg>

          {/* Trail nodes */}
          <div className="relative flex justify-between items-center">
            {nodes.map((node, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                style={{ width: '20%' }}
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node circle */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#C0152A] border-4 border-[#050505] cursor-pointer transition-transform hover:scale-150">
                  {hoveredNode === index && (
                    <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-64 bg-[#141414] border border-[#C0152A] rounded-xl p-6 shadow-2xl">
                      <div className="text-[#C0152A] text-xs tracking-[0.3em] mb-2 uppercase">
                        {node.label}
                      </div>
                      <div className="text-white font-light text-sm mb-3">
                        {node.title}
                      </div>
                      <div className="text-[#999999] text-xs leading-relaxed">
                        {node.stat}
                      </div>
                      {/* Arrow pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C0152A]" />
                    </div>
                  )}
                </div>

                {/* Node label */}
                <div className="mt-8 text-center">
                  <div className="text-[#C0152A] text-[10px] tracking-[0.3em] mb-1 uppercase font-medium">
                    {node.label}
                  </div>
                  <div className="text-white text-sm font-light whitespace-nowrap">
                    {node.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
