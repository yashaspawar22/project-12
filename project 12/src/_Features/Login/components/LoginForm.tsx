import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#0f0f10] px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1e] text-white w-full max-w-md p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold text-center mb-2">LOGIN TO CONTINUE</h2>
        <div className="h-[2px] bg-green-400 w-full mb-6"></div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded bg-[#2a2a2d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded bg-[#2a2a2d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="w-full p-3 rounded bg-green-400 text-black font-bold hover:bg-green-500 transition"
        >
          Login
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <a href="#" className="hover:underline">Forgot Password?</a>
          <a href="#" className="hover:underline">New User? Sign Up</a>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a href="#"><img src="/images/fb.png" alt="Facebook" className="w-8 h-8 rounded" /></a>
          <a href="#"><img src="/images/twitter.webp" alt="Twitter" className="w-8 h-8 rounded" /></a>
          <a href="#"><img src="/images/ld.png" alt="LinkedIn" className="w-8 h-8 rounded" /></a>
          <a href="#"><img src="/images/Instagram_logo_2022.svg.webp" alt="Instagram" className="w-8 h-8 rounded" /></a>
        </div>

        <div className="flex justify-center gap-4 mt-4 text-gray-400 text-lg">
          <i className="fab fa-instagram cursor-pointer"></i>
          <i className="fab fa-twitter cursor-pointer"></i>
          <i className="fab fa-facebook cursor-pointer"></i>
          <i className="fab fa-linkedin cursor-pointer"></i>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
