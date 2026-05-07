import { Toaster } from 'sonner';
import { FAQAccordion } from './components/FAQAccordion';
import { FeatureCard } from './components/FeatureCard';
import { ElevationTrail } from './components/ElevationTrail';
import { WaitlistDialog } from './components/WaitlistDialog';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-6 md:px-8 py-5 md:py-6">
        <div className="text-white tracking-[0.3em] text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
          CLOSERAI
        </div>
        <div className="px-4 py-2 border border-[#444444] rounded-full text-[#999999] text-xs tracking-wider font-light">
          PRIVATE BETA
        </div>
      </nav>

      {/* Hero Section with Mountain Logo */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mountain Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1585501854964-b1711c09c4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400)',
            filter: 'brightness(0.4) contrast(1.2)',
          }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        {/* Fog/Mist Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.8) 100%)',
          }}
        />

        {/* Hero stacked content — centered as a single column */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-5 sm:px-6">
          {/* Giant "CloserAI" Wordmark */}
          <h1
            className="text-[108px] sm:text-[150px] md:text-[210px] lg:text-[260px] font-black leading-[0.85] tracking-tighter uppercase text-center pointer-events-none select-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <span className="bg-gradient-to-b from-[#8B0000] to-[#C0152A] bg-clip-text text-transparent">
              Closer
            </span>
            <span className="text-white/30" style={{ filter: 'blur(2px)' }}>
              AI
            </span>
          </h1>

          {/* Hero copy block */}
          <div className="mt-10 sm:mt-14 md:mt-16 max-w-3xl w-full text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] text-white mb-7 md:mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The arena where closers are forged.
            </h2>

            <WaitlistDialog />

            <div className="mt-5 text-[#666666] text-xs tracking-wide font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Selective invitations only. We reach out personally.
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* Elevation Trail */}
      <ElevationTrail />

      {/* Feature Cards */}
      <section className="relative z-10 py-20 md:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="18" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="30" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 32L18 28L24 32L30 28L36 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="20" y="6" width="8" height="4" rx="1" fill="currentColor" />
                </svg>
              }
              label="Photorealistic AI Buyer"
              description="Join Zoom-style calls with AI buyers that look, sound, and respond like real humans. Every interaction feels authentic."
            />
            <FeatureCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 38C10 32 16 28 24 28C32 28 38 32 38 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M28 18L32 14M20 18L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24 22V26M20 26H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              label="Dual Analysis Engine"
              description="Facial recognition, body language tracking, and voice analysis working together. We see what you miss."
            />
            <FeatureCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 20H22M14 26H26M14 32H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="32" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M32 23V26L34 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              label="Scenario Library"
              description="Easy, Medium, Hard difficulty levels. Dozens of buyer personas with unique emotional states and pressure levels."
            />
            <FeatureCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 24L23 26L27 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="12" y="6" width="4" height="8" rx="1" fill="currentColor" />
                  <rect x="32" y="6" width="4" height="8" rx="1" fill="currentColor" />
                </svg>
              }
              label="Full Video Archive"
              description="Every session recorded on video. Watch yourself back like reviewing game footage. Study your wins and losses."
            />
            <FeatureCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10V18M24 30V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 24H18M30 24H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 16L20 20M28 28L32 32M32 16L28 20M20 28L16 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              label="Real-Time Coaching"
              description="Specific feedback at the exact moment you need it. Live guidance while you're on the call, not after."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 md:py-32 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center text-3xl md:text-4xl font-light tracking-tight mb-12 md:mb-16 text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1E1E1E] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-8">
          {/* Mountain Logo Mark */}
          <div className="relative">
            <div className="text-center">
              <div className="flex items-center justify-center gap-0" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#C0152A]">Closer</span>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">AI</span>
              </div>
              <div className="text-[#666666] text-[10px] tracking-[0.3em] mt-3 uppercase font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                We'll see you at the top
              </div>
            </div>
          </div>

          <div
            className="text-white tracking-[0.3em] text-sm font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CLOSERAI
          </div>

          <div className="text-[#333333] text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 CloserAI. All rights reserved.
          </div>
        </div>
      </footer>

      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0A0A0A',
            border: '1px solid #2A2A2A',
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
    </div>
  );
}
