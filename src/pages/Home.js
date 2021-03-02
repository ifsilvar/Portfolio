import React from "react";
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import Card from "../components/Card"
import NavBar from "../components/NavBar.js"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
    <main className="bg-navy">
        <NavBar />
        <Jumbotron />
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* <Card /> */}
    </main>
        )
}