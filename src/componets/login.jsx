import React, { useState } from 'react';
import logi from "../imgerack/rk3.png"
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }


  };

  return (

   <div className='h-[600px] w-full bg-[#07282C] flex flex-col justify-center items-center'>
       
     <div className="p-8 rounded-lg bg-[#0e3c42] gap-32 flex flex-row shadow-md w-[95%] h-[500px]">
      
           <div className='flex flex-col   w-[100%]   bg-[#cde8eb] p-8 rounded-lg shadow-md h-[400px] justify-center md:w-[35%]  md:ml-[40px]'>
             <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-5"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          Don’t have an account? <Link to={"/sign"} className="text-blue-500 hover:underline">Sign up</Link>
        </p>
           </div>

           <div className='h-[400px] md:flex hidden w-[57%] '>
              
              <img src={logi} alt="" />
           </div>
      </div>
   </div>



  );
};

export default Login;
