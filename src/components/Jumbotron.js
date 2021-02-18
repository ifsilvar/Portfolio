import React from "react";
import image from "../background.png"

export default function Jumbotron() {
    return (
        // <div className="container h-3/6 mx-auto flex justify-around pb-64">
        // <img src={image} alt="homescreen background" className="absolute object-cover h-3/6 w-screen" />
        // <section className="relative  pt-64">
        //     <h1 className="text-6xl text-blue-600 font-bold leading-none ">Hello I'm Ivan</h1>
        // </section>
        // </div>
        <div className="">
            <div className="relative flex flex-wrap content-center ">
                <img src={image} alt="homescreen background" className="w-full h-96 object-cover" />
                    <div className="absolute">
                        <span className="text-6xl text-blue-600 font-bold mx-auto">Hello I'm Ivan</span>
                    </div>
            </div>
        </div>
    )
}