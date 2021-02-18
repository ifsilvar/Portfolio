import React from "react";
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import Card from "../components/Card"
import NavBar from "../components/NavBar.js"

export default function Home() {
    return (
    <main className="">
        <NavBar />
        <Jumbotron />
        <About />
        <Card />
    </main>
        )
}