import React from "react";
import image from "../background.png"
import About from "./About"
import Card from "./Card"

export default function Home() {
    return (
    <main className="">
        <div className="container mx-auto flex justify-around">
        <img src={image} alt="homescreen background" className="absolute object-cover min-h-full max-w-full" />
        <section className="relative min-h-screen lg:pt-64">
            <h1 className="text-6xl text-blue-600 font-bold leading-none ">Hello I'm Ivan</h1>
        </section>
        </div>
        <About />
        <Card />
    </main>
        )
}