import registration from "@/assets/registration.jpg";
import inauguration from "@/assets/timeline-workshop.jpg";
import tech from "@/assets/event-coding.jpg";
import lunch from "@/assets/lunch.jpg";
import nontech from "@/assets/event-ai.jpg";
import price from "@/assets/price.jpg";

const Timeline = () => {
  const timelineEvents = [
    {
      title: "REGISTRATION",
      description: "Welcome participants and collect registration details.",
      timing: "9:00 AM - 10:00 AM",
      image: registration ,
      side: "left"
    },
    {
      title: "INAUGURATION",
      description: "Official opening ceremony with welcome address.",
      timing: "10:00 AM - 11:00 AM",
      image: inauguration,
      side: "right"
    },
    {
      title: "TECH & NON-TECH EVENTS BEGIN",
      description: "Technical and non-technical competitions commence.",
      timing: "11:00 AM - 12:30 PM",
      image: tech,
      side: "left"
    },
    {
      title: "LUNCH",
      description: "Break for refreshments and networking.",
      timing: "12:30 PM - 1:30 PM",
      image: "lunch,
      side: "right"
    },
    {
      title: "EVENTS CONTINUE",
      description: "Afternoon session of competitions and presentations.",
      timing: "1:30 PM - 3:00 PM",
      image: nontech,
      side: "left"
    },
    {
      title: "PRIZE DISTRIBUTION",
      description: "Award ceremony and closing remarks.",
      timing: "3:00 PM - 4:00 PM",
      image: price,
      side: "right"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--countdown-bg))] tracking-wider">
          EVENT TIMELINE
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line with Glow Effect */}
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary rounded-full shadow-lg">
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50 blur-sm"></div>
          </div>
          {/* Mobile left line */}
          <div className="block md:hidden absolute left-4 w-1 h-full bg-primary rounded-full shadow-lg">
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50 blur-sm"></div>
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center flex-col ${event.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${event.side === 'left' ? 'md:pr-8 md:text-right text-left' : 'md:pl-8 text-left'}`}>
                  <div className="glow-card bg-card rounded-xl overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--countdown-bg))] mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                        {event.timing && (
                          <span className="block mt-2 font-semibold text-primary">
                            {event.timing}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                    <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Mobile dot aligned to left line */}
                <div className="md:hidden">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
