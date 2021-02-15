import React from "react";
import image from "../background.png"

export default function Home() {
    return (
    <main>
        <img src={image} alt="homescreen background" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-green-300 font-bold leading-none lg:leading-snug">Hello Im Ivan</h1>
        </section>
    </main>
        )
}