import { Quote } from "lucide-react";
import drIypeCherian from "../../assets/dr-iype-cherian.jpg";
import nscLogo from "../../assets/NeuroSurgeryCoachLogo.png";

export function Visionary() {
  return (
    <section id="visionary" className="bg-black min-h-[80vh] text-white py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center font-['Inter',_sans-serif] relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">

        {/* Left Typography Section */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#E60000]"></div>
            <span className="text-[#E60000] uppercase tracking-[0.3em] text-xs font-bold">The Visionary</span>
          </div>

          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl tracking-wide mb-8 leading-none">
            DR. IYPE CHERIAN
          </h2>

          <div className="relative mb-10">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-white/5 rotate-180" />
            <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed relative z-10">
              "We believe strength is not confined to a gym. It exists in every step, every stride, and every movement."
            </p>
          </div>

          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              A Renowned World class Neurosurgeon and researcher. Prof Dr. Iype Cherian is best known for advocating ultramicro neurosurgery along with use of robotics.
            </p>
            <p>
              He innovated a surgical technique <strong>CISTERNOSTOMY</strong> A revolutionary tech for reducing intracranial pressure by opening cranial cisterns - Based on Brain's cooling & cleaning theory. - To treat severe head injury.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:col-span-7 relative">
          {/* Frame/Decorations */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-white/20 rounded-2xl z-0 pointer-events-none hidden md:block"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#E60000] rounded-full mix-blend-screen filter blur-[80px] opacity-40 z-0"></div>

          <div className="relative z-10 overflow-hidden rounded-2xl aspect-[4/5] md:aspect-video lg:aspect-[4/3] group">
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            <img
              src={drIypeCherian}
              alt="Dr. Iype Cherian"
              className="w-full h-full object-cover object-top"
            />

            {/* Logo Badge */}
            <a
              href="https://neurosurgerycoach.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-6 right-6 z-20 w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-2xl transition-all duration-500 hover:scale-110 group-hover:bg-white/20 animate-border-pulse"
            >
              <img
                src={nscLogo}
                alt="Neuro Surgery Coach Logo"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </a>

            {/* Bio stats floating on image */}
            <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
              <span className="bg-[#E60000] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 w-max rounded-sm">
                Innovator
              </span>
              <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-wide text-white drop-shadow-lg">
                Pioneering Neurosciences
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}