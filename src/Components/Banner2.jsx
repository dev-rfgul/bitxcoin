    
import React from "react";

const Banner2 = ({ heading, mainImg, features = [], imgPosition }) => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 py-8 mt-16 ">
            <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 text-center md:text-left">
                {heading}
            </h1>
            <div className={`flex flex-col md:flex-row mt-8 md:mt-11 ${imgPosition === "left" ?  "lg:flex-row-reverse" : console.log({imgPosition})}`}>
                <div className="md:w-1/2 flex flex-col justify-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center my-4">
                            <img
                                className="w-12 h-12 md:w-14 md:h-14 mr-4"
                                src={feature.img}
                                alt=""
                            />
                            <p className="text-xl md:text-2xl text-gray-600 lg:text-3xl">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
                        src={mainImg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner2;
