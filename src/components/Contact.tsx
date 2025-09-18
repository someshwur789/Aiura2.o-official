import { Mail, Phone, MapPin, Users } from "lucide-react";

const Contact = () => {
  const facultyCoordinator = {
    name: ["Mrs. SARITHA R M Assistant Professor  "],
    name2: ["Mrs. SAVIHJA S Assistant Professor  "],
  };

  const studentRepresentatives = [
    { name: "Raj Kumar V", phone: "7530074699" },
    { name: "Bala Subaramanian S S", phone: "6374917110" },
    { name: "Srija M", phone: "6369556156" },
    { name: "Dharshini Shree M", phone: "9488075564" }
  ];

  const venue = {
    name: "S.A.Engineering College, Veeraraghavapuram, Thiruverkadu",
    address: "Chennai, Tamil Nadu, India"
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any queries or information about AIURA'2.o
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

            {/* Faculty Coordinator */}
            <div className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold text-secondary">Faculty Coordinator</h4>
              </div>
              <div className="space-y-3">
                <p className="text-foreground font-medium">{facultyCoordinator.name}</p>
                 <p className="text-foreground font-medium">{facultyCoordinator.name2}</p>
                <div className="flex items-center text-muted-foreground">
                </div>
              </div>

            <div className="text-center">
  <h2 className="text-xl font-semibold mb-2">🤝 Let's Connect</h2>
  <div className="flex justify-center gap-6">
    <a href="mailto:aiura@saec.ac.in" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluency/48/gmail.png" alt="Gmail" />
    </a>
    <a href="https://www.instagram.com/aura_2.o_" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
    </a>
  </div>
</div>

            </div>
          </div>
          
          {/* Venue Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Venue</h3>

            <div className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold text-secondary">{venue.name}</h4>
              </div>
              <p className="text-muted-foreground mb-6">{venue.address}</p>

              {/* Map Placeholder */}
              <div className="w-full h-64 rounded-lg border border-primary/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5179027403155!2d80.10860717577452!3d13.066329787257857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f03d683eef%3A0x435901811125ddfb!2sS.A.%20Engineering%20college!5e0!3m2!1sen!2sin!4v1758099888989!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;