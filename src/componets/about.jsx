import Rk from "../imgerack/rk2.webp";
import per from "../imgerack/Best-Performance.png"
import per1 from "../imgerack/banner_image-41.png"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faLock, faHeadset, faTachometerAlt, faCloud, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
const Aboutpage = () => {
         const [count, setCount] = useState(0);
         const [count1, setCount1] = useState(0);
         const [count2, setCount2] = useState(0);

         const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      photo: "https://templatekit.jegtheme.com/cloudsion/wp-cont…seup-of-cheerful-blond-handsome-young-man-utc.png",
      text: "This company exceeded my expectations. Their services are top-notch, and the team is very professional.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager, Company B",
      photo: "",
      text: "We saw a significant improvement in our brand's performance after working with this team. Highly recommend them!",
      rating: 4,
    },
    {
      name: "Michael Johnson",
      position: "CTO, Company C",
      photo: "https://via.placeholder.com/150",
      text: "The technical expertise and communication were excellent. They helped us solve our most complex challenges.",
      rating: 5,
    },
  ];
    
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
    <div className=" w-full bg-[#07282C]">
      {/* part 0 */}
        <section
      className="bg-cover bg-center  text-white py-20 px-6 text-center"
      
    >
      <div className="container mx-auto max-w-4xl">
        {/* Optional Image (Logo or Icon) */}
      

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to Our  Platform
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          We offer reliable, secure, and fast hosting solutions for your website or application.
          Get started today with the best infrastructure in the industry.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-md transition duration-300">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white py-2 px-6 rounded-md shadow-md transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
      {/* part1 */}
      <div className="h-[200px]  w-[100%] ">
        <div className="flex flex-col items-center m-auto    justify-center  w-[98%] h-[450px] ">
          <div className=" w-[100%] m-auto h-[450px]  to-[#2a8898] mt-6">
            
            <div className="h-auto mt-10  w-[100%] ">
              <div className="h-[560px] md:h-[300px] w-[90%] m-auto">
                <p className="md:text-3xl text-center text-3xl text-[#21DECE]">
                
                  “Empowering developers & businesses with secure,
                  lightning-fast hosting.”
                </p>
                <p className="mt-[10px] text-xl text-center text-[#E7E9EA]">
                  Built by developers, for developers — our mission is to
                  simplify hosting without sacrificing performance. We provide
                  lightning-fast servers, full-stack control, and tools that
                  scale with your code. Hosting shouldn’t slow you down — we’re
                  here to power what you build.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <div className="  m-auto flex flex-col md:flex-row md:w-[90%] mt-[200px] md:mt-[100px]">
              <div className="md:w-[450px] w-[full] pl-4 flex flex-col justify-center border-[#FFFFFF21] md:border-r border-b md:border-b-0  h-[280px] ">
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

              <div className="md:w-[450px] w-[full] pl-4 flex flex-col justify-center border-[#FFFFFF21] md:border-r border-b md:border-b-0  h-[280px] ">
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

              <div className="md:w-[450px] w-full flex flex-col justify-center border-[#FFFFFF21]  border-b md:border-b-0  h-[280px]">
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
        </div>
      </div>

      {/* part 2 */}
      <div className="h-auto w-[100%] ">
         <div className="h-[700px] md:mt-[100px]  md:h-[350px] flex md:flex-row flex-col  w-[90%] justify-center mt-[80px] items-center md:m-auto">
               <div className="md:h-[400px] h-[300px]   md:mt-[60px] w-[80%]">
                       <div><img src={per} className="md:h-[270px] h-[240px]  w-[65%] transition-transform duration-500 transform hover:translate-x-10  text-white p-4 " alt="" /> 

                       </div>
               </div>
               <div className="h-[300px] w-[90%]">
                  <div className="h-[300px]  w-[100%]">
                      <p className="text-4xl text-[#21DECE] font-bold">About Rackleaf Hosting Performance.</p>
                      <p className="mt-5 text-md text-[#E7E9EA] w-[90%]">At Rackleaf Hosting, performance isn’t just a feature — it’s our foundation. We’ve built our hosting infrastructure from the ground up to deliver ultra-fast load times, 99.99% uptime, and seamless scalability for businesses of all sizes. Whether you're running a startup site or scaling an enterprise platform, our servers are optimized to keep you fast, secure, and always online.</p>
                  </div>
               </div>
         </div>
 
        <div className="h-[700px] md:mt-10  md:h-[350px] flex md:flex-row flex-col  w-[90%] justify-center  items-center md:m-auto">
               <div className="h-[300px] md:h-[400px] w-[90%]">
                  <div className="h-[300px]  w-[100%]">
                      <p className="text-4xl text-[#21DECE] font-bold">About Rackleaf Hosting Performance.</p>
                      <p className="mt-5 text-md text-[#E7E9EA] w-[90%]">At Rackleaf Hosting, performance isn’t just a feature — it’s our foundation. We’ve built our hosting infrastructure from the ground up to deliver ultra-fast load times, 99.99% uptime, and seamless scalability for businesses of all sizes. Whether you're running a startup site or scaling an enterprise platform, our servers are optimized to keep you fast, secure, and always online.</p>
                  </div>
               </div>

               <div className="md:h-[380px]  h-[300px]    md:mt-[60px] w-[80%]">
                       <div><img src={per1} className="md:h-[380px] h-[300px]  md:mt-[-60px] w-[65%] transition-transform duration-500 transform hover:translate-x-10 md:ml-[80px]  text-white p-4 " alt="" /> 

                       </div>
               </div>
               
         </div> 

          
      </div>
      {/* part 3 */}
   
      {/* part 4 */}
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

        {/* part 5 */}
        <div>
           <section className="py-20 ">
      <div className="container mx-auto text-center mb-10 md:mt-[-100px]">
        <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#143337] backdrop-blur-lg  shadow-lg rounded-lg p-6  hover:shadow-xl ">
              <img
                src={testimonial.photo}
                alt=""
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl text-white font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-white  mb-4">{testimonial.position}</p>
              <p className="text-lg text-white mb-4">{testimonial.text}</p>

              {/* Rating */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    </div>
  );
};
export default Aboutpage;
