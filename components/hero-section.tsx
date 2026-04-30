import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Star, Activity } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background" id="home">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-secondary/10 animate-gradient-slow"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-0">
        
        {/* Content Side */}
        <div className="z-10 space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] lg:leading-[0.95] text-foreground">
              Put your <br /> 
              <span className="relative inline-block text-primary">
                health first
                {/* Hand-drawn underline from image_f02839.png */}
                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-secondary/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. We're committed to providing the best medical care.
            </p>
          </div>

          {/* Input Area */}
          <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto lg:mx-0 items-center gap-2 sm:gap-0 sm:space-x-2 bg-card/40 backdrop-blur-xl p-2 rounded-2xl border border-border shadow-2xl">
            <Input 
              type="text" 
              placeholder="Enter your phone number" 
              className="border-none bg-transparent h-12 focus-visible:ring-0 shadow-none text-base md:text-lg placeholder:text-muted-foreground w-full" 
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 shadow-lg transition-transform hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <div className="flex gap-8 md:gap-12 border-t border-border pt-8 md:pt-10 w-full justify-center lg:justify-start">
              <div>
                <div className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">98.2%</div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold mt-1 uppercase tracking-widest">Recovery rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">~15k</div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold mt-1 uppercase tracking-widest">Monthly patients</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 bg-white/50 dark:bg-black/20 w-fit px-4 py-2 rounded-full border border-border">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
              </div>
              <span className="text-xs md:text-sm font-bold text-foreground">4.9/5 Rating</span>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <span className="text-xs md:text-sm text-muted-foreground font-medium">Trusted by 10k+ families</span>
            </div>
          </div>
        </div>

        {/* Visual Side (Hero Asset) */}
        <div className="relative flex justify-center items-center lg:pl-10 order-1 lg:order-2">
          <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-none">
            <img 
              src="/bg-asset.svg" 
              alt="SN Hospital Illustration" 
              className="w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] select-none z-10 relative transform scale-100 lg:scale-110"
            />
            
            {/* Floating Health Metric Card - Hidden on small mobile */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-4 bg-card/90 backdrop-blur-2xl p-3 md:p-5 rounded-2xl md:rounded-3xl border border-border shadow-xl z-20 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-secondary/10 rounded-xl md:rounded-2xl text-secondary">
                  <Activity size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Pulse Check</p>
                  <p className="text-base md:text-lg font-black text-foreground">72 BPM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}