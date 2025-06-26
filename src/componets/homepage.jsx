import React, { useEffect, useState } from "react";
import reso from "../imgerack/res.png";
import reso1 from "../imgerack/ch2.png";
import reso2 from "../imgerack/ch3.png";
import icon from "../imgerack/ic.svg";
import icon1 from "../imgerack/ic2.svg";
import icon2 from "../imgerack/ic6.svg";
import icon3 from "../imgerack/gt.jpg";
import slid1 from "../imgerack/gt2.png";
import slid2 from "../imgerack/gt3.png"
import slid3 from "../imgerack/gt6.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "./features";
import Faq from "./slider";
import Navbar from "./tom";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autuplaySpeed: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const [count, setCount] = useState(0);
     const [count1, setCount1] = useState(0);
     const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count < 90) {
      const timer = setTimeout(() => setCount(count + 1), 50); // 50ms delay for smooth animation
      return () => clearTimeout(timer);
    }
    
  }, [count]);

  useEffect(() => {
   if (count1 < 55) {
      const timer = setTimeout(() => setCount1(count1 + 1), 50); // 50ms delay for smooth animation
      return () => clearTimeout(timer);
    }
    
  }, [count1]);

   useEffect(() => {
   if (count2 < 99) {
      const timer = setTimeout(() => setCount2(count2 + 1), 50); // 50ms delay for smooth animation
      return () => clearTimeout(timer);
    }
    
  }, [count2]);
  

  
  return (
    <div className="bg-[#07282C] h-auto">
   
      <div className="w-full h-[330px] overflow-hidden ">
        <Slider {...settings}>
          <div>
            <div className="w-[100%]  ">
              <div className="md:w-[95%] h-[300px]  md:h-[300px]  m-9 bg-slate-400   bg-center bg-cover    ">
                <div className="flex flex-col md:flex-row m-auto justify-center  bg-gradient-to-r from-[#0e3c42] to-[#2a8898] h-auto md:h-[300px]  w-[100%]">
                  
                 <div className="h-[300px] w-full md:w-[60%] rounded-md">
                    <div className="text-center p-6  transition-all duration-700">
                      <p className="text-3xl md:text-5xl text-[#71D6CE]  mb-4"> ☁️  Superfast Cloud Hosting</p>
                      <p className="md:text-lg mb-6 text-[#E7E9EA]">Experience blazing-fast website speeds with our optimized cloud hosting solutions. Perfect uptime, scalable resources, and 24/7 expert support to keep your business online — always</p>
                      <button className="bg-gradient-to-r from-[#33C8BA] to-[#417BA5] px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">Get Started Now</button>
                    </div>
                 </div>
                 <div className="hidden md:flex  md:w-[40%]">
                    <img src={slid1} className="h-[300px] w-full" alt="" />
                   </div>
                </div>
                 
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%]  ">
              <div className="md:w-[95%]  h-[400px] md:h-[400px] m-9 bg-gradient-to-r from-[#0c444b] to-yellow-300   bg-center border-gray-100  ">
                 <div className="flex flex-col md:flex-row m-auto justify-center  bg-gradient-to-r from-[#0e3c42] to-[#2a8898] h-auto md:h-[300px]  w-[100%]">
                  
                 <div className="h-[300px] w-full md:w-[60%] rounded-md">
                    <div className="text-center p-6  transition-all duration-700">
                      <p className="text-3xl md:text-5xl text-[#71D6CE]  mb-4">  🌐    Blazing Speeds Worldwide</p>
                      <p className="md:text-lg mb-6 text-[#E7E9EA]">"Connect with your global audience at lightning speeds with our worldwide data centers. Our intelligent load balancing ensures your content loads instantly — anywhere, anytime</p>
                      <button className="bg-gradient-to-r from-[#33C8BA] to-[#417BA5] px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">Get Started Now</button>
                    </div>
                 </div>
                 <div className="hidden md:flex  md:w-[40%]">
                    <img src={slid2} className="h-[280px] w-[380px]" alt="" />
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%]  ">
              <div className="md:w-[95%]  h-[400px] md:h-[500px] m-9 bg-gradient-to-r from-[#0c444b] to-yellow-300  bg-center border-gray-200   ">
                 <div className="flex flex-col md:flex-row m-auto justify-center  bg-gradient-to-r from-[#0e3c42] to-[#2a8898] h-auto md:h-[300px]  w-[100%]">
                  
                 <div className="h-[300px] w-full md:w-[60%] rounded-md">
                    <div className="text-center p-6  transition-all duration-700">
                      <p className="text-3xl md:text-5xl text-[#71D6CE]  mb-4">  🏢   Custom Solutions for Enterprises</p>
                      <p className="md:text-lg mb-6 text-[#E7E9EA]">"From private cloud to high-availability clusters, we tailor network solutions to your enterprise needs. Scalable, secure, and supported by a dedicated enterprise support team."</p>
                      <button className="bg-gradient-to-r from-[#33C8BA] to-[#417BA5] px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">Get Started Now</button>
                    </div>
                 </div>
                 <div className="hidden md:flex  md:w-[40%]">
                    <img src={slid3} className="h-[280px] w-[400px]" alt="" />
                   </div>
                </div>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
      <div>
        {/* 2 part */}

        <div className="h-auto w-full  mt-10 ">
          <p className="text-center w-full md:text-5xl text-[#71D6CE] font-serif tracking-wide ">
            Provide Tools and Expertise to Effectively <br />
            <span className="">Manage Cloud Environments</span>
          </p>
          <p className="text-center text-lg text-[#E7E9EA] pt-4 w-[60%] m-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>

          <div className="h-auto w-full mt-28">
            <div className="flex flex-col md:flex-row md:w-[90%] m-auto">
              <div className="md:w-[450px] w-full flex flex-col justify-center  border-[#FFFFFF21] md:border-r border-b  h-[280px]">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Investment.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>

              <div className="md:w-[450px] w-[full] pl-4 flex flex-col justify-center border-[#FFFFFF21] md:border-r border-b  h-[280px] ">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Protection.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>

              <div className="md:w-[450px] w-full flex flex-col justify-center border-[#FFFFFF21]  border-b  h-[280px]">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Encription.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[90%] m-auto">
              <div className="md:w-[450px] w-full flex flex-col justify-center border-[#FFFFFF21] md:border-r border-b md:border-b-0  h-[280px]">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Velocity.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>

              <div className="md:w-[450px] w-full flex flex-col justify-center border-[#FFFFFF21] md:border-r border-b md:border-b-0  h-[280px] ">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Big-Data.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>

              <div className="md:w-[450px]  w-full flex flex-col justify-center border-[#FFFFFF21]  border-b md:border-b-0  h-[280px] ">
                <div className="h-[230px] md:w-[300px]    md:m-auto">
                  <img
                    src="https://templatekit.jegtheme.com/cloudsion/wp-content/uploads/sites/383/2023/06/Big-Data.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <p className="text-[#f3faf9] mt-4 text-2xl font-semibold">
                    Cost Optimization
                  </p>
                  <p className="mt-3 text-[#E7E9EA]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 3 */}
        <div className="h-auto w-full  mt-36">
          <div className="flex flex-col md:flex-row  h-auto   md:w-[95%] w-full m-auto">
            <div className="w-[100%] h-[600px] flex flex-col  items-center">
              <div className="h-[280px] p-4 bg-[#FFFFFF0D] shadow-2xs  backdrop-blur-lg w-[400px]  ">
                <img src={reso} className="h-[240px] " alt="" />
              </div>
              <div className="h-[300px] w-full gap-6 flex flex-row mt-5">
                <div className="h-[180px] w-[230px] p-4 bg-[#FFFFFF0D] shadow-2xs  backdrop-blur-lg ">
                  <img src={reso1} className="h-[160px] w-[200px]" alt="" />
                </div>

                <div className="h-[300px] w-[330px] p-4 bg-[#FFFFFF0D] shadow-2xs  backdrop-blur-lg ">
                  <img src={reso2} className="h-[300px] w-[300px]" alt="" />
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[550px] flex justify-center items-center">
              <div className="w-[96%] h-[400px]">
                <p className="text-6xl text-[#71D6CE]">
                  RackLeaf Dedicated Servers
                </p>
                <p className="mt-14 text-lg  text-[#E7E9EA]">
                  Eget mi proin sed libero enim sed faucibus viverrate maecenas
                  accumsan lacus vel facilisis volutpat viverra maecenas
                  accumsan it incididunt ut labore et dolore mag aliqu ut enim
                  ad minim veniam quis nostrum exercitationem.
                </p>
                <button className="text-xl mt-4 bg-[linear-gradient(160deg,_#417BA5_20%,_#33C8BA_100%)] px-8 py-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* part 4 */}
        <div className="h-auto w-full mt-32">
          <p className="text-center text-6xl text-[#71D6CE]">
            {" "}
            Choose Your Web Hosting Plan
          </p>

          <div className="flex flex-col md:flex-row h-auto w-full gap-24  md:w-[100%] justify-center items-center mt-20">
            <div className="h-auto w-[300px] rounded-md bg-[#6668630d] border-[2px] border-l-fuchsia-300  shadow-lg shadow-zinc-100">
              <div className="h-[630px] w-[300px] flex flex-col">
                <div className="h-[630px] w-[280px] flex flex-col items-center text-center">
                  <p className="font-bold font-serif text-3xl border-gray-500 border-dotted  w-[90%] border-b text-[#21DECE] mt-3 h-[50px]">
                    Beginner Plan
                  </p>
                  <div className="h-[200px] w-[280px]  ml-4 mt-2  border-gray-400">
                    <img
                      src={icon}
                      className="h-[100px] w-[80px] m-auto"
                      alt=""
                    />
                    <p className="text-xl font-semibold text-white">
                      Cloud <span>Hosting</span>
                    </p>

                    <p className="text-3xl mt-3 font-semibold text-white">
                      $24.99 / <span className="text-xl">Month</span>
                    </p>
                  </div>

                  <ul className="mt-4 text-xl text-[white]">
                    <li className="pt-2  ">Host 1 Website</li>
                    <li className="pt-2">1 GB Space </li>
                    <li className="pt-2">5 GB Bandwidth </li>
                    <li className="pt-2">Free SSL Certificate </li>
                    <li className="pt-2">35 Email Accounts </li>
                    <li className="pt-2">10 Domains </li>
                  </ul>
                  <button className="bg-[#21DECE] mt-10  px-3 py-3 text-lg rounded-md text-black">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>

            <div className="h-auto w-[310px] rounded-md bg-[#6668630d] border-[2px] border-l-fuchsia-300  shadow-lg shadow-zinc-100 md:mt-[-20px]">
              <div className="h-[640px] w-[310px] flex flex-col">
                <div className="h-[630px] w-[280px] flex flex-col items-center text-center">
                  <p className="h-[40px] mt-[-25px] w-[250px] ml-3 rounded-t-md bg-[#21DECE]  text-xl font-semibold text-[white]">
                    BEST VALUE
                  </p>
                  <p className="font-bold font-serif text-3xl border-gray-500 border-dotted  w-[90%] border-b text-[#21DECE] mt-3 h-[50px]">
                    Advanced
                  </p>
                  <div className="h-[200px] w-[280px]  ml-4 mt-2  border-gray-400">
                    <img
                      src={icon1}
                      className="h-[100px] w-[80px] m-auto"
                      alt=""
                    />
                    <p className="text-xl font-semibold text-white">
                      Dedicated <span>Server</span>
                    </p>

                    <p className="text-3xl mt-3 font-semibold text-white">
                      $185.00 / <span className="text-xl">Month</span>
                    </p>
                  </div>

                  <ul className="mt-4 text-xl  text-[white]">
                    <li className="pt-2  ">Host 1 Website</li>
                    <li className="pt-2">8GB DDR3 ECC </li>
                    <li className="pt-2">4x2 3.20Ghz </li>
                    <li className="pt-2">1TB SSD </li>
                    <li className="pt-2">35 Email Accounts </li>
                    <li className="pt-2">8 Domains </li>
                  </ul>
                  <button className="bg-[#21DECE] mt-10  px-3 py-3 text-lg rounded-md text-black">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>

            <div className="h-auto w-[300px] rounded-md bg-[#6668630d] border-[2px] border-l-fuchsia-300  shadow-lg shadow-zinc-100">
              <div className="h-[630px] w-[300px] flex flex-col">
                <div className="h-[630px] w-[280px] flex flex-col items-center text-center">
                  <p className="font-bold font-serif text-3xl border-gray-500 border-dotted  w-[90%] border-b text-[#21DECE] mt-3 h-[50px]">
                    Business
                  </p>
                  <div className="h-[200px] w-[280px]  ml-4 mt-2  border-gray-400">
                    <img
                      src={icon2}
                      className="h-[100px] w-[80px] m-auto"
                      alt=""
                    />
                    <p className="text-xl font-semibold text-white">
                      Cloud <span>VPS</span>{" "}
                    </p>

                    <p className="text-3xl mt-3 font-semibold text-white">
                      $109.99 / <span className="text-xl">Month</span>
                    </p>
                  </div>

                  <ul className="mt-4 text-xl text-[white]">
                    <li className="pt-2  ">Host 3 Website</li>
                    <li className="pt-2">4Gb Memory</li>
                    <li className="pt-2">60GB HDD Raid 10 </li>
                    <li className="pt-2">Unlimited Traffic </li>
                    <li className="pt-2">35 Email Accounts </li>
                    <li className="pt-2">2 IP Address </li>
                  </ul>
                  <button className="bg-[#21DECE] mt-10  px-3 py-3 text-lg rounded-md text-black">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* part 5 */}
        

        {/* part 6 */}
        {/* <div className="w-full mt-[50px] h-auto m-auto">
               <div className="h-[300px] flex flex-col md:flex-row">
                  <div>
                    
                  </div>
               </div>
               <div className="w-full h-[300px] bg-green-600 flex flex-col md:flex-row">
             
               </div>

          </div> */}

        {/* part 7 */}
        <div>
          <div className="h-auto  w-full md:mt-[200px] ">
            <div className="h-[800px]  md:h-[600px] w-full  flex flex-col md:flex-row ">
              <div className="h-[600px] w-full">
                    <div className="m-auto h-[400px]  md:bg-count bg-contain bg-no-repeat relative flex flex-col md:w-[80%] w-[95%] justify-center md:gap-32 items-center">
                      <div className=" md:mt-[-70px] mt-[20px]  md:w-[230px] w-[95%]  rounded-md  md:mr-[60px]  bg-[#0b5c5c] text-center ">
                        <div className=" md:h-[120px] h-[80px]">
                          <p className="mt-5 text-5xl text-[#A3EFE8] font-bold">{count2} %</p>
                        <p className="text-xl md:mt-3 text-[#FFFFFF]">Uptime Guarantee</p>
                        </div>
                    </div>
                    <div className="md:h-[200px] md:mt-[-50px] md:gap-16 h-[150px] w-[95%] md:w-[600px] flex  flex-col md:flex-row">
                         <div className="h-[140px] md:mt-[0px] mt-[20px] md:w-[230px] rounded-md w-full md:mr-10 md:mb-32 bg-[#0b5c5c] text-center ">
                        <p className="mt-5 text-5xl text-[#A3EFE8] font-bold">{count1} %</p>
                        <p className="text-xl md:mt-5 text-[#FFFFFF]">Cost Reduction</p>
                    </div>

                    <div className="h-[140px] md:mt-[0px] mt-[20px] md:w-[230px] rounded-md w-full   bg-[#0b5c5c] text-center  ">
                        <p className="mt-5 text-5xl text-[#A3EFE8] font-bold">{count} %</p>
                        <p className="text-xl md:mt-5 text-[#FFFFFF]">Customer Satisfaction</p>
                    </div>
                    </div>
                    </div>
              </div>
              <div className="h-auto mt-[40px] md:mt-0 m-0 w-full flex flex-col justify-none items-start">
                 <p className="text-4xl text-[#71D6CE]">Data That Speaks Our Unparalleled Performance</p>
                 <p className="mt-4 text-[#FFFFFF] w-[80%] text-md">Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan lacus vel facilisis volutpat viverra maecenas accumsan it incididunt ut labore et dolore mag aliqu ut enim ad minim veniam.</p>
                <div className="gap-10">
                   <ul className="flex flex-col text-[#FFFFFF] md:flex-row">
                  <li>Accelerated time   </li>
                  <li >Prioritize reliability</li>
                 </ul>
                 <ul className="flex flex-col text-[#FFFFFF] md:flex-row">
                  <li>Improvement Productivity</li>
                  <li>  Significant cost savings</li>
                 </ul>
                </div>
              </div>

              <div>

              </div>
            </div>
          </div>
        </div>
        {/* part 8 */}
        <div className="h-auto w-full">
            <Features/>
        </div>
        {/* part 9 */}
        <Faq/>
      </div>
    </div>
  );
};

export default Homepage;
