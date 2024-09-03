import { useEffect } from 'react';
import { codefest,Anuv,Amritsar,hack,hackathon} from '.'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  visible: { opacity: 1, scale: 1 ,transition:{duration:0.5}},
  hidden: { opacity: 0, scale: 0 },
}

function Events() {
  
  return (
    <div> 
       
      <div className='mt-20'>
     <div className='text-center items-center'>
      <h1 className='text-gray-300 text-3xl'>Live and Upcoming Events</h1>
     
      <div className='mx-auto p-5 md:ml-36  sm:p-10 '>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
     
  <div
    className="max-w-lg w-full bg-gray-100/10 text-gray-300 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 md:hover:scale-105">
    <div className="relative">
      <img className="w-full h-48 object-cover" loading='lazy' src={codefest} alt="Nature scene"/>
      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
       Hackathon
      </div>
      <div className="absolute -top-2 right-16  text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
      <DotLottieReact className='h-8 w-20  -ml-4'
      src="https://lottie.host/88f05135-2948-4b81-b0ae-73c6f1eac7ee/D8ECB410Z9.json"
      loop
      autoplay
    />
    </div>
    </div>
    <div className="p-2">
      <h2 className="text-xl font-bold mb-2 ">COD-A-FESTx 2.0 2024</h2>
      <p className=" mb-4 text-justify">
      Join Cod-A-FestX 2.0 on September 7th, 2024! Form teams of 4-5 members, with at least one girl mandatory. Compete for prizes up to ₹10,000 and earn participation certificates. The 18-hour hackathon runs from 3 PM to 9 AM. Registration is free—don’t miss this chance to showcase your skills. Register now!</p>
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span className="text-gray-200 font-semibold ml-1">Venue: Block 14, 101L</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold ">07 SEPT 2024</span>
        <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-400 hover:to-blue-900  transition-all duration-600 ease-in-out">
          Register Now
        </button>
      </div>
    </div>
  </div>
  

  <div
    className="max-w-lg w-full bg-gray-100/10 text-gray-300 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 md:hover:scale-105">
    <div className="relative">
      <img className="w-full h-72 object-cover" loading='lazy' src={Anuv} alt="Nature scene"/>
      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
        Concert
      </div>
      <div className="absolute -top-2 right-6  text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
      <DotLottieReact className='h-16 w-40 md:h-16 md:w-40 -ml-10 -mt-4'
      src="https://lottie.host/dcee234a-c80b-4505-9e36-3587958ce271/KH104jhgOt.json"
      loop
      autoplay
      width={"100px"}
    />
    </div>
    </div>
    <div className="p-2">
   
      <h2 className="text-xl font-bold mb-2 ">Spaced Out (Anuv Jain) Live Concert</h2>
      <p className=" text-justify mb-4">
      Join us for a live concert by the talented singer Anuv Jain! Experience an unforgettable evening of soulful music and captivating performances. Don't miss this chance to see him live on stage!</p>
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span className=" ml-1">Unipolis</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold ">27 SEPT 2024</span>
        <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-400 hover:to-blue-900  transition-all duration-600 ease-in-out">
          Register Now
        </button>
      </div>
    </div>
  </div>




{/* 
  <div
    className="max-w-md w-full bg-gray-100/20 text-gray-300 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
    <div className="relative">
      <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Nature scene"/>
      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
        Featured
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 ">COD-A-FEST 2.0</h2>
      <p className=" mb-4">Immerse yourself in the tranquil landscapes and breathtaking vistas of the natural
        world.</p>
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span className=" ml-1">4.9 (128 reviews)</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold ">07 SEPT 2024</span>
        <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-400 hover:to-blue-900  transition-all duration-600 ease-in-out">
          Register Now
        </button>
      </div>
    </div>
  </div> */}


</div>
</div>




<div className="bg-[#1f21246f] p-2">
<h1 className='text-gray-300 text-3xl'>Past Events</h1>

<section >
  

<div className=" mx-auto p-4 sm:p-10 md:p-10">

    


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

    
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={Amritsar}
                        loading='lazy'
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Tour
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block text-slate-200 hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                    Amritasr Tour</a>
                <p className="text-gray-200 text-md">
                On August 18, 2024, we organized an enriching tour of Amritsar. Highlights included Jallianwala Bagh, the Wagah Border, the Golden Temple, Amritsar Haveli, and Ram Tirth Asthal, offering a deep dive into the city’s historical and cultural landmarks.
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">18 AUG 2024</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
{/*                   
                    <span className="ml-1 text-slate-100">39 Comments</span> */}
                </span>
            </div>
        </div>



       
       
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={hack}
                        loading='lazy'
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Workshop
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block text-slate-200 hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                    Hackethix (Ethical Hacking Workshop)</a>
                <p className="text-gray-200 text-md">
               
On February 22, 2024, we conducted HackEthix, an insightful workshop on ethical hacking. Participants learned essential skills and techniques, exploring cybersecurity challenges and solutions through hands-on sessions and expert guidance.
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">22 FEB 2024</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
{/*                   
                    <span className="ml-1 text-slate-100">39 Comments</span> */}
                </span>
            </div>
        </div>


        
      
       
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={hackathon}
                        loading='lazy'
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Hackathon
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block text-slate-200 hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                    Code-A-Fest X 2023</a>
                <p className="text-gray-200 text-md">
                This hackathon attracted over 400 students with free registration and was of 6 hours long, offering Udemy courses, exciting goodies, and MyGov certificates. A platform where innovation thrived and talents shined!
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">07 OCT 2023</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
{/*                   
                    <span className="ml-1 text-slate-100">39 Comments</span> */}
                </span>
            </div>
        </div>

    </div>

</div>

</section>




</div>

     </div>
     </div>

    </div>
  )
}

export default Events