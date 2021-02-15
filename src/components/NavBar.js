import React from "react";
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
    <header className="bg-blue-500">
        <div className="container mx-auto flex justify-between">
            <nav>
                <NavLink to="/">
                Home Link
                </NavLink>
            </nav>
        </div>
    </header>
    )
}