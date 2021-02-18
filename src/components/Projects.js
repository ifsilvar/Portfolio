import React from "react";

export default function About() {
    return (
        <div className="p-10">
        <h1 className="text-bold text-4xl text-center">My Projects</h1>

        <div className="mt-10 grid lg:grid-cols-4 gap-10">
            <div className="card">
                <div className="sm:flex-shrink-0">
                    <img src="https://via.placeholder.com/150" alt="proj1" className="w-full h-full sm:h-48 object-cover"/>
                    </div>
                <div className="m-4">
                    <span className="font-bold">This Project</span>
                    <span className="block text-gray-500 text-sm">Project Description</span>
                </div>
            </div>

            <div className="card h-50 w-50">
                <img src="https://via.placeholder.com/150" alt="proj2" className="w-full h-32 sm:h-48 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">This Project</span>
                    <span className="block text-gray-500 text-sm">Project Description</span>
                </div>
            </div>

            <div className="card">
                <img src="https://via.placeholder.com/150" alt="proj3" className="w-full h-32 sm:h-48 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">This project</span>
                    <span className="block text-gray-500 text-sm">Project Description</span>
                </div>
            </div>

            <div className="card">
                <img src="https://via.placeholder.com/150" alt="proj3" className="w-full h-32 sm:h-48 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">This project</span>
                    <span className="block text-gray-500 text-sm">Project Description</span>
                </div>
            </div>
        </div>
        </div>
    )
}