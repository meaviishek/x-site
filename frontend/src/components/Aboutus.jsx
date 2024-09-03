import React from 'react'
import { AiOutlineAim } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import { MdVolunteerActivism } from "react-icons/md";
function Aboutus() {
  return (
    <div>
        <div>
        <section className="">
    <div className="py-24 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
               
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight  sm:text-4xl">
                Fueling Innovation, Shaping Tomorrow
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-400 lg:mx-auto">
                The InnovXus Organization, operating under the auspices of The Department of Student Organization at Lovely Professional University, is excited to unveil an upcoming recruitment drive.
                </p>
            </div>

            <div className="mt-10 bg-[#4140408c] p-4 rounded-lg">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-6 w-6 rounded-md bg-primary-500 text-white">
                               <AiOutlineAim />

                            </div>
                            <p className="font-heading ml-12 text-lg leading-6 font-bold ">AIM</p>
                        </dt>
                        <dd className="mt-2 ml-12 text-base ">
                        At Innovxus, our aim is to be the epicenter of innovation and creativity at LPU. We strive to inspire and empower students to explore new technologies, develop groundbreaking ideas, and transform these ideas into tangible solutions. Our goal is to bridge the gap between theoretical knowledge and practical application, equipping our members with the skills and mindset needed to excel in the fast-paced world of technology.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-6 w-6 rounded-md bg-primary-500 text-white">
                                <FcMindMap/>
                            </div>
                            <p className="font-heading ml-12 text-lg leading-6 font-bold">MOTIVATION
                            </p>
                        </dt>
                        <dd className="mt-2 ml-12 text-base ">Our motivation stems from a deep belief that innovation is the driving force behind progress. We are fueled by the desire to solve real-world problems, to push the boundaries of what is possible, and to make a meaningful impact on society. Innovxus is a community of like-minded individuals who share a passion for technology and a commitment to continuous learning. Together, we motivate each other to think creatively, take risks, and turn ideas into reality.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-6 w-6 rounded-md bg-primary-500 text-white">
                               <FaRegEye/>

                            </div>
                            <p className="font-heading ml-12 text-lg leading-6 font-bold ">VISION
                            </p>
                        </dt>
                        <dd className="mt-2 ml-12 text-base">Our vision is to create a thriving ecosystem where innovation flourishes, and students are empowered to lead the technological revolution. We envision Innovxus as a platform where ideas are nurtured, skills are honed, and leaders are born. By fostering a culture of collaboration and creativity, we aim to prepare our members to be at the forefront of technological advancements and to contribute meaningfully to the global community.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-6 w-6 rounded-md bg-primary-500 text-white">
                            
                                  <MdVolunteerActivism/>

                            </div>
                            <p className="font-heading ml-12 text-lg leading-6 font-bold ">ACTIVITIES
                            </p>
                        </dt>
                        <dd className="mt-2 ml-12 text-base "> Innovxus is more than just a club; it's a hub of innovation and learning. We organize a wide range of activities, including:<br/>
                        <ul className="list-disc list-inside p-4">
                            <li>Hackathons</li>
                            <li>Workshop</li>
                            <li>Tour</li>
    
                        </ul>
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
        </div>
     
    </div>
  )
}

export default Aboutus