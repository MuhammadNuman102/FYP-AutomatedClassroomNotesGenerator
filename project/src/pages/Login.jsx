import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaBolt, FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  before integrating to backend
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/dashboard");
  // };
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await axios.post(
      "http://localhost:8000/login",
      formData
    );

    localStorage.setItem("user_id", response.data.user_id);

    navigate("/dashboard");

  } catch (error) {
    console.error("Login failed", error);
    alert(error.response?.data?.detail || "Invalid credentials");
  }
};

  return (
    <div className="min-h-screen  bg-[#F0F2F5] text-slate-900 flex items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Container: Size matched exactly with Register component */}
      <div className="w-full max-w-[1000px] h-full max-h-[620px] grid md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
        
        {/* Left Side: Compact Branding (Synced with Register) */}
        <div className="relative hidden md:flex flex-col justify-between p-10 overflow-hidden bg-[#0F172A]">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-20">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <FaBolt size={18} />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-400">
                Game <span className="text-white italic font-black">Changers</span>
              </h1>
            </div>
          </div>

          <div className="relative z-20">
            <h2 className="text-5xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-4">
              Level Up <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Your Game</span>.
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-xs leading-snug">
              Join the league of elite performers and dominate today.
            </p>
          </div>

          <div className="relative z-20 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[1.5rem]">
            <ul className="space-y-3">
              {["Performance Dashboard", "Real-time Analytics", "Exclusive Community"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200 font-semibold text-xs">
                  <FaCheckCircle className="text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Optimized Login Form (Synced with Register) */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Login</h1>
            <p className="text-slate-500 text-sm font-medium">Enter your details to resume progress.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Username</label>
              <input
                type="text"
                autoComplete="new-Username"
                placeholder="enter username"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-sm font-medium"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                <Link to="/forgot" className="text-[10px] font-bold text-blue-600 hover:text-blue-700">Forgot?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-sm font-medium"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-md flex items-center justify-center gap-2 transition-all duration-300 shadow-lg active:scale-[0.98] mt-2"
            >
              Access Dashboard
              <FaArrowRight size={14} />
            </button>
          </form>

          <p className="text-center mt-6 text-slate-500 text-xs font-medium">
            New here?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:underline underline-offset-4">Sign Up</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;