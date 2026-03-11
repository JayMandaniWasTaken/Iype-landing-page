import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logoImage from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-12 font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center">
            <img src={logoImage} alt="IYPE Athletiq Logo" className="h-[80px] md:h-[140px] w-auto" />
          </div>
          <p className="text-xs text-gray-500 font-light">&copy; {new Date().getFullYear()} IYPE Athletiq. All rights reserved.</p>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E60000] transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E60000] transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E60000] transition-colors">
            <Youtube size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}