import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import coding from "@/assets/event-coding.jpg";
import noncoding from "@/assets/event-creative.jpg";
import surprise from "@/assets/event-surprise.jpg";

const Events = () => {
  const navigate = useNavigate();

  const handleTechnicalClick = () => {
    navigate("/technical");
  };

  const handleNonTechnicalClick = () => {
    navigate("/non-technical");
  };

  const handleSurpriseClick = () => {
    // Coming soon functionality
  };

  const events = [
    {
      type: "technical",
      title: "Technical",
      description: "A hub of innovation and creativity together bright minds to compete, collaborate, and create. A stage for innovators to explore, compete, and create through technology driven challenges & ideas.",
      image: coding,
      borderClass: "border-primary/30",
      gradientClass: "from-primary/20 to-secondary/20",
      titleClass: "text-primary",
      onClick: handleTechnicalClick,
      ctaText: "Explore Technical Events →",
      ctaHoverClass: "group-hover:text-primary"
    },
    {
      type: "non-technical", 
      title: "Non-Technical",
      description: "A celebration of creativity and talent, this non-technical fest offers a space to entertain, engage, and express. it brings students together to unwind, bond, and showcase their hidden skills beyond academics.",
      image: noncoding,
      borderClass: "border-secondary/30",
      gradientClass: "from-secondary/20 to-primary/20",
      titleClass: "text-secondary",
      onClick: handleNonTechnicalClick,
      ctaText: "Explore Creative Events →",
      ctaHoverClass: "group-hover:text-secondary"
    },
    {
      type: "surprise",
      title: "Surprise Event",
      description: "Get ready for something extraordinary! A special surprise event that will be revealed soon. Stay tuned for an unforgettable experience that combines innovation and excitement.🤫🎉",
      image: surprise,
      borderClass: "border-accent/30",
      gradientClass: "from-accent/20 to-primary/20",
      titleClass: "text-accent",
      onClick: handleSurpriseClick,
      ctaText: "Coming Soon... 🎊",
      ctaHoverClass: "group-hover:text-accent"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exciting lineup of technical and non-technical events designed to challenge and inspire
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card 
                  className={`glow-card cursor-pointer group transition-all duration-300 hover:scale-105 bg-card ${event.borderClass}`}
                  onClick={event.onClick}
                >
                  <CardContent className="p-0">
                     <div className={`h-48 bg-gradient-to-br ${event.gradientClass} rounded-t-xl overflow-hidden flex items-center justify-center`}>
                       {event.image.startsWith('/') ? (
                         <img 
                           src={event.image} 
                           alt={event.title} 
                           className="w-full h-full object-cover"
                         />
                       ) : (
                         <div className="text-6xl">{event.image}</div>
                       )}
                     </div>
                    <div className="p-6 text-center">
                      <h3 className={`text-2xl font-bold ${event.titleClass} mb-4`}>
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <div className={`text-secondary font-semibold ${event.ctaHoverClass} transition-colors`}>
                        {event.ctaText}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
