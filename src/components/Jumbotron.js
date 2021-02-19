import React from "react";
import '../index.css';
import image from "../images/background.png"

export default function Jumbotron() {
    return (
        <div className="min-w-full h-64 relative">
            <div className="absolute inset-0 bg-cover bg-center z-0">
            <img src={image} alt="homescreen background" className="object-cover h-64 min-w-full" />
            </div>
            {/* opacity-0 hover:opacity-100 duration-300 */}
            <div className="absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                <text className="textShadow">Greetings I'm Ivan</text>
            </div>
        </div>
    )
}