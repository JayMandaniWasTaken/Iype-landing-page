import { Crosshair, HeartPulse, Flag } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="bg-zinc-950 min-h-[70vh] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative">
          <span className="text-[#E60000] text-sm md:text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Story</span>
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6">
            ABOUT <span className="text-[#E60000]">US</span>
          </h2>
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            IYPE ATHLETIQ is a performance innovation brand focused on redefining how we train. We design wearable resistance equipment that transforms everyday movement into powerful strength training, allowing you to build endurance, power, and resilience anywhere.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">

          <div className="flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#E60000] group-hover:border-[#E60000] transition-colors duration-300">
              <Crosshair className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-wide text-white">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our mission is simple: to remove the limits of traditional training. Instead of relying on stationary machines or confined gym spaces, our products integrate resistance directly into the body's natural movement.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#E60000] group-hover:border-[#E60000] transition-colors duration-300">
              <HeartPulse className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-wide text-white">Biomechanics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every product is engineered with a focus on biomechanics, comfort, and durability. We ensure you can push your limits without compromising mobility or form, turning functional workouts into more effective sessions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#E60000] group-hover:border-[#E60000] transition-colors duration-300">
              <Flag className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-wide text-white">The Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Inspired by Dr. Iype Cherian, IYPE ATHLETIQ combines science, innovation, and human-centered design to create equipment built for one ultimate goal — a body that performs for life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}