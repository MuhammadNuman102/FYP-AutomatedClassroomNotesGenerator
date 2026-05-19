import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaBolt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#030712] text-white pt-20 overflow-hidden">
      {/* Decorative Glows to match Hero Section */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <FaBolt size={18} />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-400">
                Game <span className="text-white italic font-black">Changers</span>
              </h1>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Revolutionizing education with AI-driven note generation. From audio to visual, we convert every lecture into your ultimate study guide.
            </p>
            <div className="flex gap-4 text-lg">
              {[FaFacebook, FaTwitter, FaInstagram, FaGithub].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Navigation</h3>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "Register", path: "/register" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Capabilities</h3>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                Audio Transcription
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                YouTube Engine
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                Vision OCR (Whiteboard)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                AI Study Synthesis
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h3>
            <div className="space-y-4 text-sm font-medium text-gray-400">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-500 mt-1" />
                <span>support@gamechangers.ai</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-500 mt-1" />
                <span>Innovation Hub, Tech District<br />Global Learning Center</span>
              </div>
            </div>
            <div className="pt-2">
               <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex">
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="bg-transparent border-none focus:ring-0 text-xs px-3 w-full text-white"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-all">
                    Join
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-semibold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Game Changers AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;