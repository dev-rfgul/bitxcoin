import React from "react";

const TrustedPartners = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "./img/p1.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p2.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p3.svg",
    },

    {
      name: "Partner 1",
      logo: "./img/p4.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p5.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p6.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p7.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p8.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p9.svg",
    },
    {
      name: "Partner 1",
      logo: "./img/p10.svg",
    },
  ];
  return (
    <div className="px-4 py-8  bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 rounded-lg">
      <h2 className=" text-blue-600 sm:text-3xl lg:text-4xl font-bold text-center mb-6">
        Trusted Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md w-24 h-24 sm:w-32 sm:h-32"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
