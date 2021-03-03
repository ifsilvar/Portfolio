import React from "react";
import Project1 from "../images/leafimg.png"
import Quiz from "../images/quizicon.png"
import Weather from "../images/weathericon.png"
import BasketBall from "../images/dream.png"
import Mongo from "../images/mongo.png"
import Express from "../images/express.png"
import Rreact from "../images/react.png"
import Node from "../images/node.png"

export default function About() {
    return (
        <div id="projects" className="container mx-auto p-10 min-h-scree*">
        <h1 className="text-bold text-4xl text-center text-gray-100">My Projects</h1>

        <div className="mt-10 grid lg:grid-cols-4 gap-10">
            <div className="card">
                <div className="sm:flex-shrink-0">
                    <img src={Project1} alt="proj1" className="w-full h-full object-cover"/>
                </div>
                <div className="m-4">
                    <a href="https://jdmarty.github.io/scoop/">
                    <span className="font-bold hover:underline">Nutrispot App</span>
                    </a>
                    <span className="block text-gray-500 text-sm">Nutrispot application was created in colaboration with four of my colleagues from UCI. This application takes in a food inquiry using Spoonacular API to display quality recipes and nutrition facts. In addition, the app will use Yelp API to suggest near by restaurants that may serve the food type searched. The styling for this app was created using Bulma.</span>
                </div>
            </div>

            <div className="card">
                <div className="sm:flex-shrink-0">
                    <img src={Quiz} alt="proj2" className="w-full h-full object-cover"/>
                </div>
                    <div className="m-4">
                        <a href="https://ifsilvar.github.io/Homework4/">
                        <span className="font-bold hover:underline">Javascript Quiz</span>
                        </a>
                        <span className="block text-gray-500 text-sm">I created this simple javascript quiz to practice javascript. Being one of my first javascript projects, I practiced arrays, on click events, functions, and intervals. Future improvements include a highscore board and store scored to local storage.</span>
                    </div>
            </div>

            <div className="card">
                <div className="sm:flex-shrink-0">
                    <img src={Weather} alt="proj3" className="w-full h-full  object-cover"/>
                </div>
                <div className="m-4">
                    <a href="https://ifsilvar.github.io/openWeatherApp/">
                    <span className="font-bold hover:underline">Weather App</span>
                    </a>
                    <span className="block text-gray-500 text-sm">I created a simple weather application using the OpenWeatherMap API. Search for a specific city and get weather infromation such as current temp., highs/lows, wind speed, etc. The styling for this app was created using Bootstrap.</span>
                </div>
            </div>

            <div className="card">
                <div className="sm:flex-shrink-0">
                    <img src={BasketBall} alt="proj3" className="w-full h-full  object-cover"/>
                </div>
                <div className="m-4">
                    <a href="https://dry-sierra-84720.herokuapp.com/">
                    <span className="font-bold hover:underline">Dream Team</span>
                    </a>
                    <span className="block text-gray-500 text-sm">
                    This application combines a database of the Top 1000+ scorers in NBA history and an internal API to simulate a full game of professional basketball between user created teams. Once a user has created an account, they can pick and choose players for their very own five man fantasy teams and pit these teams together in a javascript powered simulation engine to finally put those old locker room debates to rest, and determine which lineup reigns supreme.</span>
                </div>
            </div>
        </div>

        <p className="text-center mt-10 text-bold text-3xl text-gray-100">My Stack</p>
        <div className="mx-auto mt-5 grid grid-cols-4 lg:w-1/2">
                <div className="">
                    <img src={Mongo} alt="mongo db logo" className="transform hover:scale-105" />
                </div>
                <div>
                    <img src={Express} alt="express logo" className="transform hover:scale-105" />
                </div>
                <div>
                    <img src={Rreact} alt="react logo" className="transform hover:scale-105" />
                </div>
                <div>
                    <img src={Node} alt="node logo" className="transform hover:scale-105" />
                </div>
            </div>
    </div>
    )
}