import React from "react";
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
    <header className="bg-navy">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to="/" exact className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest">
                Home Link
                </NavLink>
            </nav>
            <div className="inline-flex items-center justify-center shadow-md rounded-full mt-2 mb-2 pr-3">
                <SocialIcon url="https://www.linkedin.com/in/ivan-f-silvar/" className="" target="_blank" fgColor="fff" style={{ height: 50, width: 50 }} />
            </div>
        </div>
    </header>
    )
}