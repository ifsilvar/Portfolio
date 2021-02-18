import React from "react";
import Me from "../images/portfoliopic.png"

export default function About() {
    return (
    <div className="mx-auto bg-gray-100 p-10 min-h-screen">
        <div className="container mx-auto">
            <h1 className="text-bold text-4xl text-center text-navy">About Me</h1>
            {/* card container */}
            <div className="mt-10 md:flex gap-10 ">
                {/* card div */}
                <div className="card mx-auto md:flex">
                    {/* img div */}
                    <div className="sm:flex-shrink-0">
                        <img src={Me} alt="Ivan Flores Silvar" className="w-full h-full object-cover"/>
                    </div>
                    {/* text div */}
                    <div className="mx-auto p-8 md:pt-32 md:pb-32">
                        <span className="font-bold ">Ivan Flores Silvar</span>
                        <span className="block text-gray-500 text-sm">Electronics Engineer | Full Stack Developer | Software Tester</span>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            {/* card container */}
            <div class="max-w-md mx-auto mb-10 mt-10 bg-white rounded-3xl shadow-md overflow-hidden md:max-w-2xl">
                {/* card div */}
                <div class="md:flex">
                    {/* img div */}
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src={Me} alt="Man looking at item at a store" />
                    </div>

                    {/* text div */}
                    <div class="p-8"> 
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
        )
}