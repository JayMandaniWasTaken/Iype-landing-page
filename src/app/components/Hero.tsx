import { useState } from "react";
import { ArrowDown, X } from "lucide-react";
import logoImage from "../../assets/logo.png";
import heroAthleteImage from "../../assets/hero-athlete.png";

export function Hero() {
  const PRODUCTS = [
    "Elite Weighted Vest",
    "Hip & Thigh Trainer",
    "Wrist Weight Cuffs",
    "Ankle Weight System",
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedProducts, setInterestedProducts] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleProduct = (name: string) => {
    setInterestedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY ?? "");
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("subject", "New Waitlist Signup");
    formData.append(
      "interested_products",
      interestedProducts.length > 0 ? interestedProducts.join(", ") : "None selected"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setInterestedProducts([]);
    setError("");
    setLoading(false);
  };

  return (
    <section className="bg-black min-h-[90vh] md:min-h-screen text-white flex flex-col font-['Inter',_sans-serif] relative overflow-hidden" style={{ isolation: 'isolate' }}>
      {/* Full-bleed athlete image — spans behind the navbar */}
      <div className="absolute inset-0 w-1/2 h-full z-0 pointer-events-none" aria-hidden="true">
        <img
          src={heroAthleteImage}
          alt="Athlete"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Red duotone overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(180,0,0,0.35) 0%, rgba(80,0,0,0.2) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        {/* Grain / noise texture */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Fade to black on the right edge */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 55%, rgba(0,0,0,0.9) 100%)" }}
        />
        {/* Fade to black at the bottom */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 30%)" }}
        />
      </div>

      {/* Navigation — sits above the image */}
      <nav className="flex justify-between items-center md:px-12 w-full z-20 relative">
        <div className="flex items-center">
          <img src={logoImage} alt="IYPE Athletiq Logo" className="h-[80px] md:h-[140px] w-auto" />
        </div>

        <div className="hidden md:flex gap-12 text-xs text-gray-400 uppercase tracking-widest font-medium">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#visionary" className="hover:text-white transition-colors">Visionary</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
        </div>

        <div>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-[#E60000] text-white hover:bg-red-700 transition-colors px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 w-full relative z-10 flex flex-col md:flex-row pb-24">

        {/* Left — spacer so typography sits on the right (image is absolute behind) */}
        <div className="w-full md:w-1/2 relative h-[55vw] md:h-auto" />

        {/* Right — Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-16 z-20 pt-10 md:pt-0">
          <h1 className="font-['Bebas_Neue',_sans-serif] text-7xl md:text-8xl lg:text-[110px] leading-[0.88] tracking-tight flex flex-col items-center">
            <span><span className="text-[#E60000]">I</span>NTENSIFY</span>
            <span><span className="text-[#E60000]">Y</span>OUR</span>
            <span><span className="text-[#E60000]">P</span>OWER &</span>
            <span><span className="text-[#E60000]">E</span>NDURANCE</span>
          </h1>
          <p className="mt-8 text-gray-400 text-sm md:text-base font-light tracking-wide leading-relaxed">
            Professional grade essentials<br />for the relentless
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
        <ArrowDown size={16} className="text-gray-400 animate-bounce" />
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Products</span>
      </div>

      {/* Waitlist Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{ animation: "dialogIn 0.25s ease" }}>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-[2px] bg-[#E60000]"></div>
                  <span className="text-[#E60000] text-[10px] uppercase tracking-[0.3em] font-bold">Early Access</span>
                </div>
                <h2 className="font-['Bebas_Neue',_sans-serif] text-4xl tracking-wide text-white mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Be the first to know when we launch. Get exclusive early-access and founder pricing.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-[#E60000] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-[#E60000] transition-colors"
                    />
                  </div>

                  {/* Interested Products */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Interested Products</label>
                    <div className="grid grid-cols-1 gap-2">
                      {PRODUCTS.map((product) => {
                        const checked = interestedProducts.includes(product);
                        return (
                          <label
                            key={product}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${checked
                              ? "border-[#E60000] bg-[#E60000]/10"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                              }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors ${checked ? "bg-[#E60000] border-[#E60000]" : "border-white/30"
                                }`}
                            >
                              {checked && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={checked}
                              onChange={() => toggleProduct(product)}
                            />
                            <span className="text-sm text-gray-300">{product}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs text-center -mt-1">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 bg-[#E60000] hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-xs uppercase tracking-widest py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : "Secure My Spot"}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#E60000]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#E60000]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-[2px] bg-[#E60000]"></div>
                  <span className="text-[#E60000] text-[10px] uppercase tracking-[0.3em] font-bold">You're In</span>
                  <div className="w-6 h-[2px] bg-[#E60000]"></div>
                </div>
                <h2 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-wide text-white mb-3">
                  Welcome, {fullName.split(" ")[0]}!
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  We've added <span className="text-white font-medium">{email}</span> to our waitlist. We'll reach out when we're ready to launch.
                </p>
                <button
                  onClick={handleClose}
                  className="border border-white/20 hover:border-white/50 text-white text-xs uppercase tracking-widest px-6 py-2 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dialogIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}