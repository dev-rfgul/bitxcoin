
// import BlurIn from "@/components/magicui/blur-in";
// import React from "react";
// import Btn from "./Btn";

// const Banner = ({ heading, img, text, buttonText, imgPosition }) => {
//   return (
//     <div className="px-4 md:px-8 lg:px-16 xl:px-24  mt-14 mb-14 ">
//       <div
//         className={`flex flex-col md:flex-row  items-center mt-9 md:mt-0 ${imgPosition === "left" ? "lg:flex-row-reverse" : ""
//           }`}
//       >
//         {/* Text Container */}
//         <div
//           className={`flex-1 flex justify-center ${imgPosition === "left" ? "md:mr-8" : "md:ml-8"
//             } px-4 md:px-0 `}
//         >
//           <div>
//             <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 text-center md:text-left">
//               <BlurIn word={heading}
//               duration={1} />


//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mt-6 md:mt-6 text-center md:text-left">
//               <BlurIn word={text}
//               duration={2} />

//             </p>
//             <div className="flex justify-center md:justify-start mt-6">





//             </div>

//             <Btn 
//             btnText="Start Earning"/>
//           </div>
//         </div>

//         {/* Image Container */}
//         <div className="flex-1 flex justify-center px-4 md:px-0">
//           <img className="max-w-full h-auto" src={img} alt="Hero" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import BlurIn from "@/components/magicui/blur-in";
import React from "react";
import Btn from "./Btn";

const Banner = ({ heading, img, text, buttonText, imgPosition }) => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 mt-8 mb-8 sm:mt-10 sm:mb-10">
      <div
        className={`flex flex-col sm:flex-row items-center mt-6 sm:mt-8 md:mt-9 ${imgPosition === "left" ? "sm:flex-row-reverse" : ""
          }`}
      >
        {/* Text Container */}
        <div
          className={`flex-1 flex justify-center ${imgPosition === "left" ? "sm:mr-6 md:mr-8" : "sm:ml-6 md:ml-8"
            } px-2 sm:px-4 md:px-0`}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 text-center sm:text-left">
              <BlurIn word={heading} duration={1} />
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mt-4 sm:mt-5 md:mt-6 text-center sm:text-left">
              <BlurIn word={text} duration={2} />
            </p>
            <div className="flex justify-center sm:justify-start mt-4 sm:mt-6">
              <Btn btnText="Start Earning" />
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex justify-center px-2 sm:px-4 md:px-0">
          <img className="max-w-full h-auto" src={img} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
