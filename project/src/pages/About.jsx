import { Link } from "react-router-dom";
import { 
  FaUsers, 
  FaLightbulb, 
  FaLaptopCode, 
  FaArrowRight, 
  FaRocket, 
  FaShieldAlt, 
  FaGraduationCap 
} from "react-icons/fa";

const About = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      
      {/* 1. Hero / Banner Section - With Background Image & Polish */}
      <section className="relative py-40 md:py-56 flex items-center justify-center overflow-hidden bg-[#030712]">
        
        {/* Background Image with Ken Burns Effect (Scale) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" 
          }}
        />
        
        {/* Modern Gradient Overlay - For text contrast and depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

        {/* Animated Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse z-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] z-20"></div>

        <div className="relative z-30 max-w-5xl mx-auto px-6 text-center mt-10 md:mt-0">
         
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AutoNotes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            We are redefining the way students learn. By bridging the gap between messy lectures and structured knowledge, AutoNotes empowers students to focus on understanding, not just writing.
          </p>
        </div>
      </section>

      {/* 2. Our Mission - Minimalist Premium Look */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
              To save students thousands of hours by providing an AI-driven ecosystem that instantly converts audio, images, and videos into high-quality study materials. We believe education should be accessible, organized, and effortless.
            </p>
            <div className="space-y-4 inline-block text-left">
              {[
                "AI-Powered Accuracy",
                "Built for Modern Students",
                "Seamless Integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700 hover:text-slate-900 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-200">
                    <FaRocket size={12} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Mission Card */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <div className="relative group p-1 bg-gradient-to-br from-blue-500/50 to-emerald-500/50 rounded-[3rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="bg-slate-950 rounded-[2.8rem] p-10 md:p-16 overflow-hidden relative border border-white/5">
                 <FaGraduationCap className="text-white/5 text-[200px] absolute -bottom-10 -right-10 rotate-12" />
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10 italic leading-tight">"Focus on Learning, Let AI do the Writing."</h3>
                 <div className="w-20 h-1.5 bg-blue-500 rounded-full relative z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values - Luxury Cards with Hover Effects */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 text-lg font-medium">The principles that drive every decision we make, and every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaUsers />,
                title: "User-Centric",
                desc: "Every feature we build is tested by students, for students, ensuring maximum utility.",
                color: "bg-blue-600",
                shadow: "group-hover:shadow-blue-500/10",
                hover: "group-hover:border-blue-200"
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation First",
                desc: "We leverage state-of-the-art AI, OCR, and NLP technologies to stay ahead of the curve.",
                color: "bg-emerald-600",
                shadow: "group-hover:shadow-emerald-500/10",
                hover: "group-hover:border-emerald-200"
              },
              {
                icon: <FaShieldAlt />,
                title: "Unmatched Quality",
                desc: "Precision matters. Our algorithms are optimized for 99% transcription and extraction accuracy.",
                color: "bg-slate-950",
                shadow: "group-hover:shadow-slate-500/10",
                hover: "group-hover:border-slate-800"
              }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className={`group p-10 bg-white border border-slate-200/60 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${value.shadow} ${value.hover} relative overflow-hidden`}
              >
                <div className={`w-16 h-16 ${value.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-slate-950 transition-colors">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                  {value.desc}
                </p>
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Premium CTA Section - Matching Home Style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-black rounded-[2.5rem] p-12 md:p-24 overflow-hidden border border-white/10 shadow-2xl text-center">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  The AI Revolution?
                </span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                Stop struggling with manual notes. Let AutoNotes handle the heavy lifting while you focus on what really matters—your grades.
              </p>
              
              <Link
                to="/register"
                className="group bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl flex items-center gap-3 scale-100 active:scale-95"
              >
                Start Using AutoNotes
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;