import { useEffect,useState } from 'react';
import { purplebg,hackathon, hack,Amritsar, Coding, cyberdrill,Heads} from '.';
import { FcCalendar } from "react-icons/fc";

import { FcClock } from "react-icons/fc";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to simulate page loading
  }, []);
  
  return (
  
    <div>
    
		
        <div className='items-center '>
          {/* <div>
            <ImageSlider/>
           
          </div> */}
          <div>
          <section id="features" className="px-2 text-gray-200  py-4 mt-20 md:mt-24  lg:py-24 max-w-12xl mx-auto">
    <div className="mx-auto flex max-w-[60rem] flex-col items-center space-y-6 text-center">
      <div  className={`  transition-transform duration-700 ease-in-out ${
        isVisible ? "transform translate-y-0 opacity-100" : "transform -translate-y-10 opacity-0"
      }`}>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Innovxus where idea's ignite innovations.</h2>
        <p className="max-w-[90%] leading-normal text-gray-300 text-muted-foreground sm:text-lg sm:leading-7">
        A college club igniting innovation, where creative minds collaborate to turn ideas into reality</p>
        </div>
    </div>
    
    <div className='md:mt-20 mt-8'>
    <h2 className='text-center text-xl font-poppins'>Live & Upcoming Events</h2>
    <div  className={`transition-transform duration-700 ease-in-out  ${
        isVisible ? "transform translate-y-0 opacity-100" : "transform -translate-x-10 opacity-0"
      }`}>
    <div className="mx-auto grid justify-center gap-4 mt-6  sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
     
        <div className="relative overflow-hidden rounded-lg border border-gray-500 bg-gray-100/10 p-2 md:hover:scale-105 md:hover:bg-gray-100/15 transition-all duration-500">
           <a href="">
            <div className="flex h-auto flex-col justify-between rounded-md ">
            <DotLottieReact className='h-8 w-20  -ml-4'
      src="https://lottie.host/88f05135-2948-4b81-b0ae-73c6f1eac7ee/D8ECB410Z9.json"
      loop
      autoplay
    />
           
                <div className="space-y-4 ml-2">
                    <h3 className="font-bold text-lg">Cod-A-Fest 2.0 <b className='text-orange-300 font'>(7 SEPT 2024) </b></h3>
                    <p className="text-md text-muted-foreground">  
                    Join us for Cod-A-Fest 2.0 on September 7, 2024! Form teams of 4-5 members, with at least one girl mandatory. Unleash your coding skills and compete for glory!
                    </p>
              <p className='hover:text-white text-[#8c8b8b] mb-4'>View More</p>
                </div>
            </div>
            </a>
        </div>
        
        <div className="relative overflow-hidden rounded-lg border border-gray-500 bg-gray-100/10 p-2 md:hover:scale-105 transition-all duration-500">
            <div className="flex h-auto flex-col justify-between rounded-md">
            <DotLottieReact className='h-16 w-40 md:h-16 md:w-40 -ml-10 -mt-4'
      src="https://lottie.host/dcee234a-c80b-4505-9e36-3587958ce271/KH104jhgOt.json"
      loop
      autoplay
      width={"100px"}
    />
                <div className="space-y-4 -mt-4 ml-2">
                    <h3 className="font-bold text-lg">Spaced Out (Anuv Jain) Live Concert <b className='text-orange-300 font'>(27 SEPT 2024) </b></h3>
                    <p className="text-md text-muted-foreground">Join us for a live concert by the talented singer Anuv Jain! Experience an unforgettable evening of soulful music and captivating performances. Don't miss this chance to see him live on stage!</p>
                </div>
            </div>
        </div>
        {/* <div className="relative overflow-hidden rounded-lg border bg-gray-100/10 p-2 md:hover:scale-105 transition-all duration-500">
            <div className="flex h-[110px] flex-col justify-between rounded-md ">
            <DotLottieReact className='h-40 w-40 -ml-14 -mt-4'
      src="https://lottie.host/0bfb91fa-9d69-4115-80e1-0bba1aa0feb8/y7B3DmPJoy.json"
      loop
      autoplay
    />
                <div className="space-y-2 -mt-6 ml-2">
                    <h3 className="font-bold">Live Collaboration</h3>
                    <p className="text-sm text-muted-foreground">Work simultaneously with others on the same project in
                        real-time.</p>
                </div>
            </div>
        </div> */}
    </div>
    </div>
    </div>
</section>
          </div>
            {/* <div className=' text-white'>
              <h1 className=' text-3xl font-poppins font-bold text-center'>Innovxus Where Ideas Ignite Innovation</h1>
              <p className='justify-center text-center text-[#c0bfc1] mt-2'>Innovxus fosters creativity and collaboration, turning ideas into innovative solutions that inspire change and push the boundaries of possibility.

</p>
            </div> */}
          
          {/* <h1 className='text-center text-2xl font-semibold text-gray-200 font-poppins'>Live & Upcoming Events</h1>
       <div className='mt-4 grid grid-cols-2'>



<div className="flex overflow-hidden">
  <div className="relative mx-auto">
    <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
     
      <div className="relative -left-16 top-0 w-56 md:w-96 rounded-xl bg-[rgba(23,23,23,0.69)] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 md:group-hover:-left-14">
        <div className="flex flex-col gap-4">
          
          <div className="flex items-center gap-1">
            <FcCalendar/>
            <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
              <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
              <p className="text-xs leading-tight text-white">24/08/2024</p>
            </div>
            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out md:group-hover:opacity-100">Event Date</p>
          </div>
       
          <div className="flex items-center gap-1">
            <FcClock/>
            <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
              <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
              <p className="text-xs leading-tight text-white">09:30</p>
            </div>
            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out md:group-hover:opacity-100">Event Timing</p>
          </div>
          <p>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 opacity-0 hover:text-sky-600">&rarr;</a>
          </p>
        </div>
      </div>
      
      <div className="absolute -right-20 top-0  flex w-56 md:w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[rgb(119,119,121)] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 md:group-hover:-right-14 md:group-hover:w-64 md:group-hover:rounded-l-lg">
        <p className="text-[#fff]">Codafest 2.0</p>
        <p className="text-[#fff]">Records sold</p>
        <p>
          <a href="https://tailwindcss.com/docs" className="text-white/50">Learn more &rarr;</a>
        </p>
      </div>
     
    </div>
  </div>
</div>









<div className="relative flex flex-col md:mt-0 mt-10  overflow-hidden ">
  <div className="relative mx-auto">
    <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
     
      <div className="relative -left-16 top-0 w-56 md:w-96 rounded-xl bg-[rgba(23,23,23,0.69)] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 md:group-hover:-left-14">
        <div className="flex flex-col gap-4">
          
          <div className="flex items-center gap-1">
            <FcCalendar/>
            <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
              <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
              <p className="text-xs leading-tight text-white">24/08/2024</p>
            </div>
            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out md:group-hover:opacity-100">Event Date</p>
          </div>
       
          <div className="flex items-center gap-1">
            <FcClock/>
            <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
              <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
              <p className="text-xs leading-tight text-white">09:30</p>
            </div>
            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">Event Timing</p>
          </div>
          <p>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 opacity-0 hover:text-sky-600">&rarr;</a>
          </p>
        </div>
      </div>
      
      <div className="absolute -right-20 top-0  flex w-56 md:w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[rgb(119,119,121)] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 md:group-hover:-right-14 md:group-hover:w-64 md:group-hover:rounded-l-lg">
        <p className="text-[#fff]">Codafest 2.0</p>
        <p className="text-[#fff]">Records sold</p>
        <p>
          <a href="https://tailwindcss.com/docs" className="text-white/50">Learn more &rarr;</a>
        </p>
      </div>
     
    </div>
  </div>
</div>
</div> */}

{/* <hr className='h-px my-4 bg-[#161616fa] border-0' />



<div>
<h1 className='text-center mt-8 text-2xl font-semibold text-gray-200 font-poppins'>Past Events</h1>




<div className=" mx-auto p-5 sm:p-10 md:p-10">

    


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

    
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={Amritsar}
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
                <p className="text-gray-200 text-sm">
               
On February 22, 2024, we conducted HackEthix, an insightful workshop on ethical hacking. Participants learned essential skills and techniques, exploring cybersecurity challenges and solutions through hands-on sessions and expert guidance.
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">18 AUG 2024</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  
                    <span className="ml-1 text-slate-100">39 Comments</span>
                </span>
            </div>
        </div>



       
       
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={hack}
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
                <p className="text-gray-200 text-sm">
               
On February 22, 2024, we conducted HackEthix, an insightful workshop on ethical hacking. Participants learned essential skills and techniques, exploring cybersecurity challenges and solutions through hands-on sessions and expert guidance.
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">22 FEB 2024</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  
                    <span className="ml-1 text-slate-100">39 Comments</span>
                </span>
            </div>
        </div>


        
      
       
        <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-[rgba(23,23,23,0.69)]">
            <a href="#"></a>
            <div className="relative "><a href="#">
                    <img className="w-full "
                        src={hackathon}
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
                <p className="text-gray-200 text-sm">
                This hackathon attracted over 400 students with free registration and was of 6 hours long, offering Udemy courses, exciting goodies, and MyGov certificates. A platform where innovation thrived and talents shined!
              
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[rgb(34,34,34)]">
                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1 text-slate-200">07 OCT 2023</span>
                </span>

                <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  
                    <span className="ml-1 text-slate-100">39 Comments</span>
                </span>
            </div>
        </div>

    </div>

</div>




</div> */}


{/* <hr className='h-px my-4 bg-[#161616fa] border-0' />
 */}



{/* <div>

<Heads/>
		

</div>
<hr className='h-px my-4 bg-[#161616fa] border-0' />
<div>
<h1 className='text-3xl font-semibold text-gray-300 justify-center text-center '>Sponsors</h1>
<div className='flex'>
  <img src=""/>
  <img src=""/>

</div>
</div> */}
        </div>



        </div>
        
     
    
  )
}

export default Home