import React from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_yh3h6ir', 'template_4cpwkmi', e.target, 'user_B2FDX4Yf2m7bX1gPzpC5b')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div  id="contact" className="mx-auto bg-gray-200 p-10 min-h-full">
            <div className="container mx-auto min-h-scree*">
                <h1 className="text-bold text-4xl text-center text-navy">Contact</h1>
                <div className="sm:w-5/6 lg:w-1/2 md:w-2/3 bg-white rounded-3xl p-8 flex flex-col mx-auto mt-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Lets Connect!</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Communication is 🔑. Contact me for jobs, feedback, or just to say "Hi!"</p>
                    <form onSubmit={sendEmail}>
                    <div class="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                        <input type="subject" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button type="submit" className="text-white bg-linkedin-blue border-0 py-2 px-6 focus:outline-none hover:bg-navy rounded text-lg">Send</button>
                    </form>
                    <p class="text-xs text-gray-500 mt-3">Thank you for your time.</p>
                </div>
            </div>
        </div>
)}