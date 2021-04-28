import React from "react";

const Blax = () => {
  return (
    <div>
      <div class="py-4">
        <div class="shadow-lg group container  rounded-md bg-red-900  ">
          <div>
            <div class="w-full image-cover rounded-t-md"></div>
            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
              <span class="block text-lg text-gray-800 font-bold tracking-wide">
                Book a flight
              </span>
              <span class="block text-gray-600 text-sm">
                Vivamus ac ligula sit amet erat luctus laoreet ac quis
              </span>
            </div>
          </div>
          <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
            <div class="pt-8 text-center">
              <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blax;
