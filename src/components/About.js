import React from "react";
import Me from "../images/portfoliopic.png"
import CPP from "../images/CPP-Logo.png"
import UCI from "../images/UCI-Logo.png"
import SIX from "../images/Lean-6.png"

export default function About() {
    return (
    <div className="mx-auto bg-gray-100 p-10 min-h-full">
        <div className="container mx-auto mb-5">
            <h1 className="text-bold text-4xl text-center text-navy">About Me</h1>
            {/* card container */}
            <div className="mt-10 md:flex gap-10 ">
                {/* card div */}
                <div className="card mx-auto md:flex">
                    {/* img div */}
                    <div className="bg-navy sm:flex-shrink-0">
                        <img src={Me} alt="Ivan Flores Silvar" className="w-full h-full object-cover"/>
                    </div>
                    {/* text div */}
                    <div className="mx-auto p-8 md:pt-32 md:pb-32">
                        <span className="text-2xl font-bold text-navy"><p className="text-center md:text-justify">Ivan Flores Silvar</p></span>
                        <span className="block text-gray-600 text-md">Electronics Engineer | Full Stack Developer | Software Tester</span>
                        <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-3">
                <div className="">
                    <img src={CPP} className="" />
                </div>
                <div>
                    <img src={UCI} />
                </div>
                <div>
                    <img src={SIX} />
                </div>

            </div>
        </div>
    </div>
        )
}