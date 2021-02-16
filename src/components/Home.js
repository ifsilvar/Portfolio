import React from "react";
import image from "../background.png"
import About from "./About"

export default function Home() {
    return (
    <main className="">
        <div className="container mx-auto flex justify-center">
        <img src={image} alt="homescreen background" className="absolute object-cover" />
        <section className="relative min-h-screen lg:pt-64 px-8">
            <h1 className="text-6xl text-blue-600 font-bold leading-none ">Hello I'm Ivan</h1>
        </section>
        </div>
        <div className="relative">

            <div className="static visible"><p>Static child</p></div>
                <div className="inline-block"><p>Static sibling</p></div>

                <div className="absolute"><p>Absolute child</p></div>
            <div className="inline-block"><p>Static sibling</p></div>
        </div>
    </main>
        )
}