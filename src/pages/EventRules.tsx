import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventRules = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const eventRules = {
    "hack-n-hammer": {
      title: "Hack n Hammer",
      description: "Step into the world of coding with a twist! 💡 In Code Auction, participants bid on exciting problem statements using virtual credits. Once a problem is won, it’s all about putting your skills to the test — solve the code within the given time to prove your worth.",
      timing: "3 hrs",
      duration: "11:00 AM - 3:00 PM",
      teamSize: "1 - 3 Members",
      generalRules: [
        "Credits Allocation: Each team will be given a fixed number of virtual credits at the start.",
        "Participants can use any language to solve the given set of problems. The problems will consist of Basic Python , NumPy , Pandas and Algorithms",
        "Participants should bring their own laptops.",
        "Each team receives a fixed amount of credits.",
        "Coding problems will be “auctioned” one by one.",
        "Teams bid strategically to win the problems they want.",
        "Solve the problem successfully to earn points — higher the difficulty, higher the rewards!",
        "Once an auction is launched or a challenge is chosen, the decision is final and cannot be changed."
      ],
      rounds: [
        {
          title: "AUCTION PROCESS",
          details: [
            "• Coding problems will be presented one by one.",
            "• Teams must bid using their credits.",
            "• The highest bidder wins the right to solve that problem."
          ]
        },
        {
          title: "PROBLEM SOLVING",
          details: [
            "• Teams must solve the problem within the given time limit.",
            "• Correct solutions earn points based on problem difficulty",
            "• Incorrect or incomplete submissions earn no points, and credits spent are not refunded.",
          ]
        },
        {
          title: "BIDDING RESTRICTIONS",
          details: [
            "• Once a team runs out of credits, they cannot participate in further bidding.",
            "• Minimum and maximum bid values will be announced beforehand.",
          ]
        },
        {
          title: "CODE OF CONDUCT",
          details: [
            "• Plagiarism or using pre-written code is strictly prohibited.",
            "• Internet access will be restricted unless specified.",
            "• Any malpractice will lead to immediate disqualification."
          ]
        },
        {
          title: "JUDGING CRITERIA",
          details: [
            "• Points are awarded based on problem difficulty and solution correctness.",
            "• In case of a tie, the team with the most remaining credits will be declared the winner."
          ]
        }
      ],
      coordinators: [
        { name: "KARTHIKEYAN S", phone: "69808 37262" },
        { name: "VIGNESH R", phone: "96771 64847" }
      ]
    },
    "paper-showcase": {
      title: "Paper Showcase",
      description: "Unleash your ideas, inspire innovation! Join us for Paper Presentation 2025 – a platform to showcase your research, creativity and technical brilliance. Present your work, impress the judges, and win exciting prizes!",
      timing: "3 hrs",
      duration: "11:00 AM - 3:00 PM",
      teamSize: "1-3 Members",
      generalRules: [
        "Open to UG/PG engineering students Only.",
        "Max 1–3 members per team.",
        "Papers must be original (no plagiarism).",
        "Abstract: 250–300 words.",
        "Full paper in IEEE format.",
        "Submit the ppt before the mentioned deadline. Late entries not accepted.",
        "Shortlisted candidates will be informed by email/notice.",
        "Bring presentation (PPT/PDF) in a pen drive + email copy to organizers."
      ],
      rounds: [
        {
          title: "ON EVENT DAY",
          details: [
            "• Report 30 mins before start time.",
            "• Register at desk & submit PPT.",
            "• Formal/Smart dress code.",
            "• Check slides on system before your turn."
          ]
        },
        {
          title: "PRESENTATION ROUND",
          details: [
            "• 7 mins presentation + 3 mins Q&A.",
            "• MAX 10 slides recommended.",
            "• Use visuals/diagrams for clear understanding and avoid heavy text.",
            "• The Time Durartion for Each Presentation is 15 Minutes.",
            "• Suggested flow: Title → Introduction → Problem Statement → Abstract → Workflow & Architecture Diagram → Conclusion → References.",
            "• Avoid reading slides, maintain clarity & confidence.",
            "• Warning at 1 min left. Exceeding time may reduce marks."
          ]
        },
        {
          title: "Q&A SESSION",
          details: [
            "• Judges/audience may ask questions.",
            "• Be clear, respectful and confident in answers.",
            "• No arguments with judges."
          ]
        },
        {
          title: "DEAD LINE",
          details: [
            "Submit the ppt before the mentioned deadline(24/09/2025). Late entries not accepted."
          ]
        }
      ],
      coordinators: [
        { name: "AGALYA S", phone: "78719 62280" },
        { name: "LAVANYA R", phone: "82486 13347" }
      ]
    },
    "bytefest": {
      title: "ByteFest",
      description: "Are you ready to prove your coding and debugging skills? Welcome to the Byte Fest Challenge, where teams battle a minefield of bugs, logic traps, and tricky code snippets. Team up, debug smartly, and showcase your problem-solving prowess!",
      timing: "3 hrs",
      duration: "11:00 AM - 3:00 PM",
      teamSize: "1 - 2 Members",
      generalRules: [
        "1. Bring your own laptop for coding rounds.",
        "2. Sign Up: Registration is mandatory.",
        "3. Device Rules: No gadgets or internet allowed during the rounds.",
        "4. Fair Play: Cheating leads to disqualification.",
        "5. Stay Focused: Once inside the lab, remain until the round is completed."
      ],
      rounds: [
        {
          title: "ROUND 1: The Mind Crunch",
          details: [
            "Team Setup: 1–2 members per team.",
            "Objective: Collaboratively analyze code snippets, identify bugs, and correct logical errors.",
            "Key Details:",
            "Questions: 30 programming challenges covering C, Java, Python, and SQL in different patterns",
            "Tools Allowed: Pen, paper, and brainpower – no compilers or online resources",
            "Time Limit: 30 minutes of nonstop bug-hunting",
            "Rules:",
            "No Googling or Stack Overflow",
            "Focus purely on your knowledge and teamwork"
          ]
        },
        {
          title: "ROUND 2:  Logic Loop",
          details: [
            "• Languages: Python & Java",
            "• Objective: Get hands-on with real code to uncover the logic behind outputs and fix errors efficiently.",
            "Key Details",
            "Event format: Participants are given only the final output.",
            "Their task is to write a program that generates the exact output.",
            "Rules",
            "1. Team Size: Solo or team of 2 members.",
            "2. Time Limit: 45–50 minutes.",
            "3. Programming Languages Allowed: Java, Python.",
          ]
        },
        {
          title: "Evaluation Criteria",
          details: [
            "• Time Efficiency: Speed of task completion.",
            "• Accuracy: Correctness of solutions.",
            "• Debugging Skills: Clarity and effectiveness in explaining debugging efforts.",
            "• Extra Tip: Participants will receive a sheet to detail their debugging approach — make it count!"
          ]
        }
      ],
      coordinators: [
        { name: "DHANUSHREE P", phone: "72004 46186" },
        { name: "SUJITHA B", phone: "86108 84682" }
      ]
    },
    "esports": {
      title: "Esports",
      description: "Gaming competitions across multiple popular titles featuring intense matches, strategic gameplay, and competitive gaming at its finest.",
      timing: "3 hrs",
      duration: "11:00 AM - 3:00 PM",
      teamSize: "Varies by Game",
      generalRules: [
        "No. of Rounds: 3",
        "Match Type: Any (Duo, Squad)",
        "Mode: Battle Royal",
        "Maps:",
        "1st Round - NexTera",
        "2nd Round - Kalahari",
        "3rd Round - Bermuda"
      ],
      rounds: [
        {
          title: "POINT SYSTEM",
          details: [
            "• The Prize will be awarded for the top 3 teams based on their overall points earned in the 3 rounds of matches.",
            "   1st (Winner) - 10 points",
            "   2nd (Top 2nd Team) - 7 points",
            "   3rd (Top 3rd Team) - 4 points",
            "• If two teams have the same points, overall kills will be considered. If kills are also the same, a Surprise Match will be conducted to select one team."
          ]
        },
        {
          title: "RULES",
          details: [
            "1. Don't use hacks or glitches.",
            "2. No players are allowed to spectate.",
            "3. Players must be present at the Event Room; no home play allowed.",
            "4. Don't team up with your enemies.",
            "5. Every Free Fire account must be at least level 20 to participate.",
            "6. Every team is responsible for their internet connection.",
            "7. A maximum of 5 minutes waiting time (from when the room is created) is allowed per team.",
            "8. Players should follow the instructions given by the instructor at the event bay."
          ]
        }
      ],
      coordinators: [
        { name: "ADHITHYA M", phone: "93618 14601" },
        { name: "YASHRAJ A", phone: "93513 48622" }
      ]
    },
    "cinephile": {
      title: "Cinephile",
      description: "Test your movie knowledge and film-making skills in this comprehensive cinema-focused competition covering all aspects of film appreciation and creation.",
      timing: "3 hrs",
      duration: "11:00 AM - 3:00 PM",
      teamSize: "2 Members",
      generalRules: [
        "Team Size: Up to two members per team",
        "Reporting Time: Participants are requested to arrive 15 minutes prior to the commencement of the event"
      ],
      rounds: [
        {
          title: "RULES AND REGULATIONS",
          details: [
            "• Silence must be maintained during the rounds to ensure fairness and concentration.",
            "• All registration details must be accurately completed prior to participation.",
            "• Any form of malpractice will result in immediate disqualification.",
            "• In the event of a tie, a tie-breaker round will be conducted to determine the winner."
          ]
        },
        {
          title: "COMPETITION DURATION",
          details: [
            "• Round 1: 80 minutes",
            "• Round 2: 60 minutes",
            "• Round 3: 40 minutes",
            " Let's have an Absolute Cinema!"
          ]
 
        }
      ],
      coordinators: [
        { name: "BIRUNDHA I", phone: "86678 23597" },
        { name: "SHAFIYA M", phone: "74180 05237" }
      ]
    }
  };

  const event = eventRules[eventId as keyof typeof eventRules];

  if (!event) {
    return (
  <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-secondary hover:text-primary transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen">
      <div className="starfield"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-wider mb-4">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {event.description}
            </p>
          </div>
        </div>
      </div>

      {/* Event Info Cards */}
      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Timing Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">🕐</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Timing</h3>
                <p className="text-2xl font-bold text-foreground">{event.timing}</p>
              </CardContent>
            </Card>

            {/* Duration Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">📅</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-lg font-bold text-foreground">{event.duration}</p>
              </CardContent>
            </Card>

            {/* Team Size Card */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-2">👥</div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Team Size</h3>
                <p className="text-2xl font-bold text-foreground">{event.teamSize}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Event Description */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Event Description:</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {event.description}
                </p>
              </CardContent>
            </Card>

            {/* Rules & Guidelines */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Rules & Guidelines</h2>
                
                {/* General Rules */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">GENERAL RULES:</h3>
                  <ul className="space-y-2">
                    {event.generalRules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3">•</span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rounds */}
                {event.rounds.map((round, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold text-secondary mb-4">{round.title}:</h3>
                    <ul className="space-y-2">
                      {round.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Paper Showcase Sample PPT Section */}
            {eventId === "paper-showcase" && (
            <div className="relative z-10 px-4 pb-20">
            <div className="max-w-4xl mx-auto">
              <Card className="glow-card bg-card border-primary/30">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-primary mb-6">Sample PPT for Paper Showcase</h2>
                  <p className="text-muted-foreground mb-4">Download and refer to the sample PowerPoint template for your submission.</p>
                  <a
                    href="https://docs.google.com/presentation/d/1HFuHm68TDIxYashiJtXcV37ZpAflv2T9/edit?usp=sharing&ouid=117551558192664719583&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary hover:text-white transition-colors"
                  >
                    View Sample PPT
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

            {/* Coordinators */}
            <Card className="glow-card bg-card border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Coordinators:</h2>
                <div className="space-y-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex justify-between items-center bg-secondary/10 rounded-lg p-4">
                      <span className="text-foreground font-medium text-lg">{coordinator.name}</span>
                      <span className="text-secondary font-bold">{coordinator.phone}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

           {/* Prize Details Section */}
           <div className="my-8">
             <Card className="glow-card border-primary/30" style={{background: 'linear-gradient(135deg, #fffbe6 0%, #fff1f1 100%)'}}>
               <CardContent className="p-8 text-center">
                 <h2 className="text-2xl font-bold text-yellow-500 mb-6 tracking-wider drop-shadow">Prize Details</h2>
                 <div className="flex flex-col md:flex-row justify-center items-end md:items-end gap-8">
                   {/* 2nd Prize - Left */}
                   <div className="flex flex-col items-center order-1 md:order-1 md:mb-8">
                     <span className="mb-2 animate-bounce" style={{animationDelay: '0.2s'}}>
                       {/* Medal SVG */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="7" strokeWidth="2" fill="#e5e7eb"/><path stroke="#a3a3a3" strokeWidth="2" d="M12 7v5l3 3"/></svg>
                     </span>
                     <div className="text-lg font-semibold text-foreground">2nd Prize</div>
                     <div className="text-2xl font-bold text-gray-400">₹750</div>
                   </div>
                   {/* 1st Prize - Center */}
                   <div className="flex flex-col items-center order-2 md:order-2 md:mb-16">
                     <span className="mb-2 animate-bounce" style={{animationDelay: '0.4s'}}>
                       {/* Trophy SVG */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-yellow-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7v2H2v2c0 3.31 2.69 6 6 6h1v2.09A5.978 5.978 0 0 0 6 19v2h12v-2c0-2.21-1.2-4.15-3-5.09V13h1c3.31 0 6-2.69 6-6V5h-5V3zm-2 14c0 1.1-.9 2-2 2s-2-.9-2-2v-2h4v2zm7-10v1c0 2.76-2.24 5-5 5h-1V5h6zm-16 1V5h6v6H7c-2.76 0-5-2.24-5-5z"/></svg>
                     </span>
                     <div className="text-lg font-semibold text-foreground">1st Prize</div>
                     <div className="text-2xl font-bold text-yellow-500">₹1000</div>
                   </div>
                   {/* 3rd Prize - Right */}
                   <div className="flex flex-col items-center order-3 md:order-3 md:mb-4">
                     <span className="mb-2 animate-bounce" style={{animationDelay: '0.6s'}}>
                       {/* Star SVG */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-orange-500 drop-shadow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                     </span>
                     <div className="text-lg font-semibold text-foreground">3rd Prize</div>
                     <div className="text-2xl font-bold text-orange-500">₹500</div>
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div>
           {/* Important Notes Section */}
           <div className="my-8">
             <Card className="glow-card bg-card border-primary/30">
               <CardContent className="p-6 text-center">
                 <h2 className="text-xl font-bold text-red-500 mb-4">Important Notes</h2>
                 <ul className="text-muted-foreground space-y-2 text-left max-w-xl mx-auto">
                   <li>• <span className="font-semibold text-primary">Participants can register only in one event.</span></li>
                   <li>• <span className="font-semibold text-primary">Dress Code:</span> Formals and casuals are allowed.</li>
                   <li>• <span className="font-semibold text-primary">Lunch will be provided</span> to all registered participants.</li>
                   <li>• <span className="font-semibold text-primary">If you are a team, please register individually.</span></li>
                   <li>• <span className="font-semibold text-primary">Only registered participants will be allowed and No ON-SPOT Registration</span></li>
                   <li>• <span className="font-semibold text-primary">Bring your College ID, Mandatory</span> to all registered participants.</li>
                   <li>• <span className="font-semibold text-primary">If any Queries email to aiura@saec.ac.in</span></li>
                   <li>• <span className="font-semibold text-primary">Only Registered Participants are allowed to JOIN in the Whatsapp COMMUNITY</span></li>
                   </ul>
               </CardContent>
             </Card>
           </div>
           
           {/* WhatsApp Community Section */}
           <div className="my-8 text-center">
             <a
               href="https://chat.whatsapp.com/J3StO4IxqAKKvXhsTZLont"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow transition-colors"
             >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.205C13.47 27.597 14.72 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.24-.188-3.29-.557l-.235-.08-4.65 1.31 1.24-4.81-.153-.25C7.31 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.36-.83-.7-1.39-1.56-1.55-1.83-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.16 1.82.1.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
               Join our WhatsApp Community
             </a>
           </div>
           {/* Register Button */}
           <div className="text-center">
            <button
               onClick={() => window.open("https://registration-theta-taupe.vercel.app/", "_blank")}
               className="bg-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
             >
               Register for Event
             </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRules;