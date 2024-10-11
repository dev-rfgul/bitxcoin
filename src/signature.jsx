import React from "react";

const Signature = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                A Project by dev rf-gul
            </h2>
            <p className="text-gray-600 text-lg mb-6">
                Crafted with precision and care.
            </p>
            <div className="mt-4">
                <a
                    href="https://www.rfgul.live/"
                    className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                    Contact Developer
                </a>
            </div>
        </div>
    );
};

export default Signature;
