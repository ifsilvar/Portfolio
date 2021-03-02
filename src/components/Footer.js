import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 flex justify-center items-center mx-auto">
                <a href="https://drive.google.com/file/d/1AHJzlgisu4rUuqo2CIeY4ZfZ6kvmmhGT/view?usp=sharing" className="text-gray-900">
                    <FontAwesomeIcon className="text-gray-100 mx-5" target="_blank" rel="noreferrer"  style={{ height: 50, width: 50 }} icon={faFilePdf} />
                </a>
                <a href="https://github.com/ifsilvar" className=" text-gray-900">
                    <FontAwesomeIcon className="text-gray-100 mx-5" target="_blank" rel="noreferrer" style={{ height: 50, width: 50 }} icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/ivan-f-silvar/" className="text-gray-900">
                    <FontAwesomeIcon className="text-gray-100 mx-5" target="_blank" rel="noreferrer" style={{ height: 50, width: 50 }} icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )};