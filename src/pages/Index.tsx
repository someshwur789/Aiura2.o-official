
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import AudioPlayer from "@/components/AudioPlayer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
  <div className="min-h-screen bg-background">
      <AudioPlayer />
      <Navbar />
      <Hero />
      <Countdown />
      <Timeline />
      <About />
      <Events />

      {/* Prize Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glow-card border-primary/30" style={{background: 'linear-gradient(135deg, #fffbe6 0%, #fff1f1 100%)'}}>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-yellow-500 mb-6 tracking-wider drop-shadow">Prize Details</h2>
              <div className="flex flex-col sm:flex-row justify-center items-end sm:items-end gap-6 sm:gap-8">
                {/* 2nd Prize - Left */}
                <div className="flex flex-col items-center order-1 sm:order-1 mb-4 sm:mb-8">
                  <span className="mb-2 animate-bounce" style={{animationDelay: '0.2s'}}>
                    {/* Medal SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="7" strokeWidth="2" fill="#e5e7eb"/><path stroke="#a3a3a3" strokeWidth="2" d="M12 7v5l3 3"/></svg>
                  </span>
                  <div className="text-lg font-semibold text-foreground">2nd Prize</div>
                  <div className="text-2xl font-bold text-gray-400">₹750</div>
                </div>
                {/* 1st Prize - Center */}
                <div className="flex flex-col items-center order-2 sm:order-2 mb-8 sm:mb-16">
                  <span className="mb-2 animate-bounce" style={{animationDelay: '0.4s'}}>
                    {/* Trophy SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7v2H2v2c0 3.31 2.69 6 6 6h1v2.09A5.978 5.978 0 0 0 6 19v2h12v-2c0-2.21-1.2-4.15-3-5.09V13h1c3.31 0 6-2.69 6-6V5h-5V3zm-2 14c0 1.1-.9 2-2 2s-2-.9-2-2v-2h4v2zm7-10v1c0 2.76-2.24 5-5 5h-1V5h6zm-16 1V5h6v6H7c-2.76 0-5-2.24-5-5z"/></svg>
                  </span>
                  <div className="text-lg font-semibold text-foreground">1st Prize</div>
                  <div className="text-2xl font-bold text-yellow-500">₹1000</div>
                </div>
                {/* 3rd Prize - Right */}
                <div className="flex flex-col items-center order-3 sm:order-3 mb-4 sm:mb-4">
                  <span className="mb-2 animate-bounce" style={{animationDelay: '0.6s'}}>
                    {/* Star SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 drop-shadow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                  <div className="text-lg font-semibold text-foreground">3rd Prize</div>
                  <div className="text-2xl font-bold text-orange-500">₹500</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Team />
      <Contact />
    </div>
  );
};

export default Index;
