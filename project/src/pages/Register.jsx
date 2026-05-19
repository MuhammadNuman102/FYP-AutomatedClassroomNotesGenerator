import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowRight, FaBolt, FaCheckCircle } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  before integrating to backend
  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("/api/register", { name, email, password });
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Registration failed", error);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("username", name);   // ✅ use name as username
  formData.append("password", password);

  try {
    const response = await axios.post(
      "http://localhost:8000/signup",
      formData
    );

    console.log(response.data);

    // Save user_id
    localStorage.setItem("user_id", response.data.user_id);

    // Navigate
    navigate("/dashboard");

  } catch (error) {
    console.error("Registration failed", error);
    alert(error.response?.data?.detail || "Registration failed");
  }
};

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 flex items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Height optimized to 580px for extra small screens */}
      <div className="w-full max-w-[950px] h-full max-h-[580px] grid md:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white">
        
        {/* Left Side: Ultra Compact Branding */}
        <div className="relative hidden md:flex flex-col justify-between p-8 overflow-hidden bg-[#0F172A]">
          <div className="absolute top-[-10%] right-[-10%] w-56 h-56 bg-blue-600/20 rounded-full blur-[70px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-emerald-500/20 rounded-full blur-[70px]"></div>
          
          <div className="relative z-20">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                <FaBolt size={14} />
              </div>
              <h1 className="text-lg font-bold tracking-tight text-gray-400">
                Game <span className="text-white italic font-black">Changers</span>
              </h1>
            </div>
          </div>

          <div className="relative z-20">
            <h2 className="text-4xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-3">
              Start Your <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Legacy</span>.
            </h2>
            <p className="text-slate-400 text-base font-medium max-w-[250px] leading-tight">
              Instant access to our elite ecosystem.
            </p>
          </div>

          <div className="relative z-20 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
            <ul className="space-y-2">
              {["Unlimited Projects", "Elite Support","Lifetime Access"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-200 font-semibold text-[11px]">
                  <FaCheckCircle className="text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Slim Form */}
        <div className="p-6 md:p-10 flex flex-col justify-center bg-white">
          <div className="mb-4">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Register</h1>
            <p className="text-slate-500 text-xs font-medium">Join the elite circle today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-xs font-medium"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-xs font-medium"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-xs font-medium"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-[0.98] mt-2"
            >
              Create Account
              <FaArrowRight size={12} />
            </button>
          </form>

          <p className="text-center mt-5 text-slate-500 text-[11px] font-medium">
            Already a member?{" "}
            <Link to="/login" className="text-blue-600 font-bold hover:underline">Login Here</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;