// import React from "react";

// const Banner = ({ heading, img, text, buttonText, imgPosition }) => {
//   return (
//     <div className="px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-400">
//       <div
//         className={`flex flex-col justify-start  bg-green-900 md:flex-row items-start md:items-center mt-9 md:mt-0 ${imgPosition === "left" ? "lg:flex-row-reverse" : "flex-col"
//           }`}
//       >
//         <div className="flex-1 flex justify-center md:justify-start px-4 md:px-0 bg-purple-400 ">
//           <div>
//             <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 text-center md:text-left">
//               {heading}
//             </h1>
//             <p className=" text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mt-6 md:mt-6 text-center md:text-left">
//               {text}
//             </p>
//             <div className="flex justify-center md:justify-start mt-6">
//               {" "}
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold">
//                 {" "}
//                 {buttonText}{" "}
//               </button>{" "}
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex justify-center md:justify-end mt-6 bg-pink-500 md:mt-0 px-4 md:px-0">
//           <img className="max-w-full h-auto" src={img} alt="Hero" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import BlurIn from "@/components/magicui/blur-in";
import React from "react";

const Banner = ({ heading, img, text, buttonText, imgPosition }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24  mt-14 mb-14 ">
      <div
        className={`flex flex-col md:flex-row  items-center mt-9 md:mt-0 ${imgPosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
      >
        {/* Text Container */}
        <div
          className={`flex-1 flex justify-center ${imgPosition === "left" ? "md:mr-8" : "md:ml-8"
            } px-4 md:px-0 `}
        >
          <div>
            <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 text-center md:text-left">
              <BlurIn word={heading} />
              {/* {heading}  */}
             
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mt-6 md:mt-6 text-center md:text-left">
              {text}
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold">
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex justify-center px-4 md:px-0">
          <img className="max-w-full h-auto" src={img} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
