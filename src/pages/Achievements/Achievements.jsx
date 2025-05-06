import React from "react";
import { Award, Link as LinkIcon } from "lucide-react";

// Updated AchievementCard component with a larger image and verify button
const AchievementCard = ({ title, issuer, date, link, image }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    
    <div className="relative bg-gray-900/90 rounded-lg p-10 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Award className="w-16 h-16 text-green-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400 text-xl">{issuer}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>
        
        {/* Larger Image Placeholder Section */}
        <div className="w-full h-128 overflow-hidden rounded-lg mb-6">  {/* Increased height */}
          <img
            src={image}
            alt={`${title} certificate`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          <button
            className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
            onClick={() => window.open(link, "_blank")}
          >
            <LinkIcon size={18} /> Verify Certificate
          </button>
        </p>
      </div>
    </div>
  </div>
);

// Main section displaying all certificates
const AchievementsSection = () => {
  const achievements = [
    {
      title: "Python Workshop",
      issuer: "Ostad",
      date: "Mar 2025",
      link: "https://ostad.app/share/certificate/c23594-tanvir-siddik",
      image: "src/assets/images/python-certificate.png", // Provide your image path
    },
    {
      title: "JobReady-Employability Skills",
      issuer: "WADHWANI",
      date: "Apr 2025",
      link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=680a5928eeacc2785e405a56",
      image: "src/assets/images/wadhani-cer.png", // Provide your image path
    },
    {
      title: "KAIZEN: Improve your Career Growth",
      issuer: "goedu",
      date: "May 2025",
      link: "https://goedu.ac/certificates/b6d12c7beed63a1e3ffbc4ac3995c7cd/",
      image: "src/assets/images/goedu-certificate-instructor-humayun-kabir-1.png", // Provide your image path
    },
    {
      title: "Critical Thinking for Professional Success",
      issuer: "goedu",
      date: "May 2025",
      link: "https://goedu.ac/certificates/da60654ebc788403124bc422352b8424/",
      image: "src/assets/images/goedu-certificate-instructor-foyjunnasa-1.png", // Provide your image path
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-40 pb-60">
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-8 mt-16">
        <div className="flex flex-col items-center space-y-12 mb-24">
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center">
              Achievements
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-2xl md:text-3xl text-gray-400 font-medium tracking-wide text-center max-w-3xl">
            "Every certificate marks a milestone in the journey of growth."
          </p>
        </div>

        {/* Grid for certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-8xl mx-auto">
          {achievements.map((ach, index) => (
            <AchievementCard key={index} {...ach} />
          ))}
        </div>
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default AchievementsSection;
