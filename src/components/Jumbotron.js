import React from "react";
import image from "../images/background.png"

export default function Jumbotron() {
    return (
        <div className="min-w-full h-64 relative">
            <div className="absolute inset-0 bg-cover bg-center z-0">
            <img src={image} alt="homescreen background" className="object-cover h-64 min-w-full" />
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold shadow-md">Greetings I'm Ivan</div>
        </div>
    )
}