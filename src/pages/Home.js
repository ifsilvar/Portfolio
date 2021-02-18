import React from "react";
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import Card from "../components/Card"
import NavBar from "../components/NavBar.js"
import Projects from "../components/Projects"

export default function Home() {
    return (
    <main className="bg-navy">
        <NavBar />
        <Jumbotron />
        <About />
        <Projects />
        <Card />
    </main>
        )
}