import React from "react";
import Me from "../images/portfoliopic.png"

export default function About() {
    return (
// container div
// {/* <div className="min-h-screen bg-gray-100 flex flex-col items center justify-center  border-2 border-indigo-600">
//     <img src={Me} alt="Ivan Flores Silvar" className="object mx-auto h-40 w-45" />
//   <div className="relative  sm:max-w-xl sm:mx-auto ">
//     <div className="absolute inset-0 z-10">

//     </div>
//   </div>
// </div> */}
    <div className="mx-auto bg-gray-100 p-10 min-h-screen">
        <div className="container mx-auto">
            <h1 className="text-bold text-4xl text-center text-navy">About Me</h1>

            <div className="mt-10 grid lg:grid-cols-2 gap-10">
                <div className="card">
                    <div className="sm:flex-shrink-0">
                        <img src={Me} alt="Ivan Flores Silvar" className="w-full h-full object-cover"/>
                    </div>
                    <div className="m-4">
                        <span className="font-bold ">About Me</span>
                        <span className="block text-gray-500 text-sm">Project Description</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
}