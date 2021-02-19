import React from "react";

export default function Card() {
    return (
<div class="max-w-md mx-auto mb-10 mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    {/* img div */}
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Man looking at item at a store" />
    </div>

    {/* text div */}
    <div class="p-8"> 
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>

              {/* card container */}
              <div class="max-w-md mx-auto mb-10 mt-10 bg-white rounded-3xl shadow-md overflow-hidden md:max-w-2xl">
                {/* card div */}
                <div class="md:flex">
                    {/* img div */}
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="" alt="Man looking at item at a store" />
                    </div>

                    {/* text div */}
                    <div class="p-8"> 
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
</div>
)}