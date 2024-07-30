import React from "react";

const Features = () => {
    return (
        <div className="mt-40 mb-40 px-4 md:px-8 lg:px-16 xl:px-24  bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 rounded-lg">
            {/* Horizontal line on top */}
            <div className="border-t border-gray-400 mb-10"></div>

            <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10">
                <div className="flex items-center justify-center space-x-4">
                    <img src="./img/wallet.png" alt="wallet" className="w-24 h-24" />
                    <p className="text-gray-600 font-bold    text-2xl lg:text-3xl">
                        50+ million wallets created
                    </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <img src="./img/shield.webp" alt="wallet" className="w-24 h-24" />
                    <p className="text-gray-600 font-bold text-2xl lg:text-3xl">
                        Safe, easy & secure
                    </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <img src="./img/support.webp" alt="wallet" className="w-24 h-24" />
                    <p className="text-gray-600 font-bold text-2xl lg:text-3xl">
                        24/7 human support
                    </p>
                </div>
            </div>

            {/* Horizontal line on bottom */}
            <div className="border-b border-gray-400 mt-10"></div>
        </div>
    );
};

export default Features;
