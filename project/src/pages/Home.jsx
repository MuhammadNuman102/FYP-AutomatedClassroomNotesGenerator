// import { Link } from "react-router-dom"
// import { FaMicrophone, FaYoutube, FaFilePdf, FaImage, FaRobot } from "react-icons/fa"

// const Home = () => {
//   return (
//     <div className="font-sans">

//       {/* Hero Section */}
//       <section className="bg-black text-white py-32 text-center px-6">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           Automated Classroom Notes Generator
//         </h1>
//         <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
//           Upload classroom audio, whiteboard images, PDFs, or YouTube lectures and instantly generate clean, organized notes using AI.
//         </p>
//         <div className="flex justify-center gap-6">
//           <Link to="/register" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//             Get Started
//           </Link>
//           <Link to="/about" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
//             Learn More
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white text-black">
//         <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
//           <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
//             <FaMicrophone size={50} className="mb-4 text-black" />
//             <h3 className="text-xl font-semibold mb-2">Audio Lecture Upload</h3>
//             <p className="text-gray-600 text-sm">Upload classroom recordings (.mp3 / .wav) to generate notes automatically.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
//             <FaYoutube size={50} className="mb-4 text-red-600" />
//             <h3 className="text-xl font-semibold mb-2">YouTube Lecture Notes</h3>
//             <p className="text-gray-600 text-sm">Paste YouTube lecture links and convert video audio to structured notes.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
//             <FaImage size={50} className="mb-4 text-black" />
//             <h3 className="text-xl font-semibold mb-2">Whiteboard OCR</h3>
//             <p className="text-gray-600 text-sm">Upload images of classroom whiteboards to extract text and include in notes.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
//             <FaFilePdf size={50} className="mb-4 text-black" />
//             <h3 className="text-xl font-semibold mb-2">PDF Slide Upload</h3>
//             <p className="text-gray-600 text-sm">Extract text from lecture PDFs and generate summarized notes instantly.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
//             <FaRobot size={50} className="mb-4 text-black" />
//             <h3 className="text-xl font-semibold mb-2">AI Notes Generator</h3>
//             <p className="text-gray-600 text-sm">AI processes all uploaded materials and generates clean, structured lecture notes.</p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-gray-100 text-black">
//         <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
//           <div className="p-6 border rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">1. Upload or Record</h3>
//             <p className="text-gray-600 text-sm">Upload audio, PDFs, images, or paste YouTube links to start processing your lecture.</p>
//           </div>
//           <div className="p-6 border rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">2. AI Processing</h3>
//             <p className="text-gray-600 text-sm">Our backend converts audio to text, extracts PDF/whiteboard text, and organizes everything using AI.</p>
//           </div>
//           <div className="p-6 border rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">3. Get Structured Notes</h3>
//             <p className="text-gray-600 text-sm">Receive clean, organized, and easy-to-read lecture notes on your dashboard instantly.</p>
//           </div>
//         </div>
//       </section>

//       {/* Supported Inputs Section */}
//       <section className="py-20 bg-white text-black">
//         <h2 className="text-4xl font-bold text-center mb-12">Supported Inputs</h2>
//         <div className="flex flex-wrap justify-center gap-12 px-6">
//           <div className="flex flex-col items-center">
//             <FaMicrophone size={40} className="mb-2" />
//             <span>Audio (.mp3/.wav)</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaYoutube size={40} className="mb-2 text-red-600" />
//             <span>YouTube</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaImage size={40} className="mb-2" />
//             <span>Whiteboard Images</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaFilePdf size={40} className="mb-2" />
//             <span>PDF Slides</span>
//           </div>
//         </div>
//       </section>

//       {/* Call To Action */}
//       <section className="py-20 bg-gray-200 text-black text-center px-6">
//         <h2 className="text-4xl font-bold mb-6">Start Generating Smart Notes Today</h2>
//         <p className="text-gray-800 mb-8 max-w-xl mx-auto">
//           Sign up now and convert your classroom lectures into organized notes instantly using AI.
//         </p>
//         <Link to="/register" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
//           Get Started
//         </Link>
//       </section>

//     </div>
//   )
// }

// export default Home

import { Link } from "react-router-dom";
import {
  FaMicrophone,
  FaYoutube,
  FaFilePdf,
  FaImage,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            The Future of Learning is Here
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Automated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Classroom Notes
            </span>{" "}
            Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Revolutionize your study habits. Upload audio, whiteboard captures,
            or YouTube links and let our AI craft perfectly structured notes in
            seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/register"
              className="group bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-2xl shadow-white/10 flex items-center justify-center"
            >
              Get Started for Free{" "}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>


     {/* 2. Features Section - Ultra Premium Minimalist */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Abstract Background Blur - Luxury Feel */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              One Tool. <span className="text-blue-600">Infinite</span> Possibilities.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
              Everything you need to turn messy classroom data into organized, searchable knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: <FaMicrophone />, 
                title: "Audio Transcription", 
                desc: "Turn voice recordings into perfectly structured text with speaker detection.",
                border: "hover:border-blue-500/50",
                iconBg: "bg-blue-600"
              },
              { 
                icon: <FaYoutube />, 
                title: "YouTube Engine", 
                desc: "Paste any link. Our AI watches, listens, and takes notes while you relax.",
                border: "hover:border-red-500/50",
                iconBg: "bg-red-600"
              },
              { 
                icon: <FaImage />, 
                title: "Vision OCR", 
                desc: "Snap a photo of the board. We extract every word and diagram with 99% accuracy.",
                border: "hover:border-emerald-500/50",
                iconBg: "bg-emerald-600"
              },
              { 
                icon: <FaFilePdf />, 
                title: "Smart PDF Reader", 
                desc: "Upload slides. Get instant summaries and key takeaways without reading 50 pages.",
                border: "hover:border-orange-500/50",
                iconBg: "bg-orange-500"
              },
              { 
                icon: <FaRobot />, 
                title: "AI Synthesis", 
                desc: "The brain of the system. It connects all your inputs into one cohesive study guide.",
                border: "hover:border-indigo-500/50",
                iconBg: "bg-indigo-600"
              },
              { 
                icon: <FaCheckCircle />, 
                title: "Exam Ready", 
                desc: "Automatically generates flashcards and quiz questions from your lecture notes.",
                border: "hover:border-slate-800/50",
                iconBg: "bg-slate-900"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className={`group p-10 rounded-[3rem] bg-white border border-slate-200/60 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ${feature.border} hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${feature.iconBg} text-white rounded-[1.5rem] flex items-center justify-center text-2xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed text-base font-medium">
                    {feature.desc}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-4xl">{feature.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



     

{/* 3. How It Works */}
      <section className="py-24 bg-[#030712] text-white relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Master Your Lectures in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">3 Simple Steps</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
              Our AI transforms your raw content into structured knowledge. No more manual typing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

            {[
              { 
                step: "1", 
                title: "Upload Material", 
                desc: "Drop your audio files, paste YouTube links, or snap a photo of the whiteboard.",
                icon: <FaMicrophone className="text-blue-400" />,
                glow: "group-hover:text-blue-400"
              },
              { 
                step: "2", 
                title: "AI Analysis", 
                desc: "Our neural networks transcribe speech and extract key concepts with pinpoint accuracy.",
                icon: <FaRobot className="text-emerald-400" />,
                glow: "group-hover:text-emerald-400"
              },
              { 
                step: "3", 
                title: "Review Notes", 
                desc: "Access perfectly structured, searchable notes with summaries on your dashboard.",
                icon: <FaFilePdf className="text-purple-400" />,
                glow: "group-hover:text-purple-400"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center">
                
                {/* Icon Circle */}
                <div className="relative z-20 w-20 h-20 mb-10 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                  {item.icon}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-md group-hover:bg-white/10 transition-colors"></div>
                </div>

                {/* Content Card */}
                <div className="w-full min-h-[220px] bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white/[0.08] group-hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* High-End Numbering System */}
                  <div className="absolute -bottom-6 -right-2 select-none pointer-events-none">
                    <span className="text-[120px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent italic">
                      {item.step}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-4 text-white transition-colors duration-300 ${item.glow}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base pr-4">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                {idx < 2 && (
                   <div className="hidden lg:block absolute top-8 -right-6 translate-x-1/2 z-20 opacity-20">
                      <FaArrowRight className="text-white text-xl" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* 4. Supported Inputs - Ultra Modern Glassmorphism UI */}
      <section className="py-28 bg-[#F8FAFC] relative overflow-hidden">
        {/* Decorative Background Blur Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-[120px] opacity-60"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Flexibility
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Supported{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Formats
              </span>
            </h2>
            <div className="w-12 h-1 bg-slate-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicrophone />,
                label: "Audio Transcriptions",
                desc: "Upload .mp3, .wav or .m4a classroom recordings.",
                color: "from-blue-500 to-cyan-400",
              },
              {
                icon: <FaYoutube />,
                label: "YouTube Lectures",
                desc: "Just paste the link, we'll handle the video audio.",
                color: "from-red-600 to-rose-400",
              },
              {
                icon: <FaImage />,
                label: "Whiteboard Vision",
                desc: "Extract text & diagrams from classroom photos.",
                color: "from-emerald-500 to-teal-400",
              },
              {
                icon: <FaFilePdf />,
                label: "Smart PDF Slides",
                desc: "Summarize lecture slides and handouts instantly.",
                color: "from-orange-500 to-amber-400",
              },
            ].map((input, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${input.color} flex items-center justify-center text-white text-2xl shadow-lg mb-8 group-hover:rotate-[10deg] transition-transform duration-500`}
                  >
                    {input.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {input.label}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {input.desc}
                  </p>

                  <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                    Format Supported{" "}
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${input.color} group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* 5. Premium Dark Call To Action */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-black rounded-[2rem] p-10 md:p-20 overflow-hidden border border-white/10 shadow-2xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Ace Your Exams?
                </span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Join thousands of students who are already using AI to save
                hours of manual note-taking. Start your journey towards smarter
                learning today.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/register"
                  className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl flex items-center group/btn"
                >
                  Get Started for Free
                  <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <FaCheckCircle className="text-emerald-500" /> No credit card
                  required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
