import React from "react";
import Me from "../images/portfoliopic.png"
import CPP from "../images/CPP-Logo.png"
import UCI from "../images/UCI-Logo.png"
import SIX from "../images/Lean-6.png"

export default function About() {
    return (
    <div id="about" className="mx-auto bg-gray-200 p-10 min-h-full">
        <div className="container mx-auto mb-5">
            <h1 className="text-bold text-4xl text-center text-navy">About Me</h1>
            {/* card container */}
            <div className="mt-10 md:flex gap-10 ">
                {/* card div */}
                <div className="card mx-auto lg:flex">
                    {/* img div */}
                    <div className="bg-navy sm:flex-shrink-0">
                        <img src={Me} alt="Ivan Flores Silvar" className="w-full h-full object-cover"/>
                    </div>
                    {/* text div */}
                    <div className="mx-auto p-8 lg:mt-16 lg:mb-16">
                        <span className="text-2xl font-bold text-navy"><p className="text-center lg:text-justify">Ivan Flores Silvar</p></span>
                        <span className="block font-bold text-gray-800 text-md"><p className="font-bold text-center lg:text-justify">Electronics Engineer | Full Stack Developer | Software Tester</p></span>
                        <p class="mt-2 text-gray-600">Skilled and self-driven bilingual professional with 7 years of engineering experience. Currently have a Bachelor's degree from Cal Poly, Pomona in electronics engineering (2013), earned Lean Six Sigma Green Belt Certificate (2019), and will be reveiving my full stack web develment certificate from the University of California, Irvine (2021). I am team player with a demonstrated ability in determining effective methods to ensure efficiency while meeting demanding deadlines. Very hands on, highly organized, and a fast learner with strong communication skills. Experiened in end userstyle software testing and seeking new learning and growth opportunities as a software developer.</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 grid grid-cols-3 lg:w-1/2">
                <div className="">
                    <img src={CPP} alt="cpp logo" className="transform hover:scale-105" />
                </div>
                <div>
                    <img src={UCI} alt="uci logo" className="transform hover:scale-105" />
                </div>
                <div>
                    <img src={SIX} alt="six sigma logo" className="transform hover:scale-105" />
                </div>

            </div>
        </div>
    </div>
        )
}