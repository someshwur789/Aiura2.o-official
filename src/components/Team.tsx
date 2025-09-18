
import BalaImg from "@/assets/bala.jpg";
import SrijaImg from "@/assets/srija.jpg";
import RajkumarImg from "@/assets/raj.jpg";
import DharshiniImg from "@/assets/dachu.jpg";
import SomeshwurImg from "@/assets/somesh2.png";
import HariImg from "@/assets/hari.jpg";
import NivethaImg from "@/assets/nive1.png";

const Team = () => {
  const coordinators = [
    {
      name: "Rajkumar",
      role: "Coordinator", 
      phone: "+91 75300 74699 ",
      image: RajkumarImg
    },
    {
      name: "Dharshini Shree",
      role: "Coordinator",
      phone: "+91 94880 75564",
      image: DharshiniImg
    },
    {
      name: "Balasubaramanian",
      role: "Coordinator",
      phone: "+91 63749 17110",
      image: BalaImg
    },
    {
      name: "Srija",
      role: "Coordinator",
      phone: "+91 63695 56156",
      image: SrijaImg
    }
  ];

  const webTeam = [
    {
      name: "Someshwur R",
      role: ["Web Site & ", "Poster Team Lead"],
      image: SomeshwurImg
    },
    {
      name: "Hari Krishnan R", 
      role: "Web Team Co-Lead",
      image: HariImg
    },
    {
      name: "Nivetha S", 
      role: "Poster",
      image: NivethaImg
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            TEAM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind AIURA'2.o who make this symposium website
          </p>
        </div>

        {/* Coordinators Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary tracking-wider mb-8 text-center">
            COORDINATORS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coordinators.map((member, index) => (
              <div 
                key={index} 
                className="glow-card bg-card rounded-xl p-6 text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                {/* Role Badge */}
                <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-secondary font-medium mb-4">
                  {member.role}
                </p>

                {/* Phone */}
                <div className="text-muted-foreground text-sm">
                  <span className="font-medium">📞 {member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-secondary tracking-wider mb-8 text-center">
            WEB TEAM
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
            {webTeam.map((member, index) => (
              <div 
                key={index} 
                className="glow-card bg-card rounded-xl p-6 text-center animate-slide-up"
                style={{animationDelay: `${(index + coordinators.length) * 0.1}s`}}
              >
                {/* Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                {/* Role Badge */}
                <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;