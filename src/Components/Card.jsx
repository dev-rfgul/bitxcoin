//  import React from "react";

// const VCardComponent = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 py-4 px-4 rounded-lg">
//       <div className="bg-white text-blue-600 rounded-lg shadow-2xl p-8 w-full max-w-lg text-center">
//         <div className="flex flex-col items-center mb-6 md:flex-row md:justify-center">
//           <img
//             src="logo.svg"
//             alt="Verse Logo"
//             className="w-12 h-12 mr-0 md:mr-3"
//           />
//           <h1 className="text-lg md:text-4xl lg:text-4xl font-extrabold">
//             BitXcoin
//           </h1>
//           <span className="text-lg md:text-4xl lg:text-4xl font-extrabold ml-2">
//             | V-Card
//           </span>
//         </div>
//         <img
//           src="./img/vcard.webp"
//           alt="V-Card"
//           className="w-full h-auto mb-6"
//         />
//         <p className="text-gray-700 mb-6 text-base md:text-xl">
//           BitXcoin.com’s V-Card enables you to spend cryptocurrency anywhere
//           Mastercard® is accepted. You can top up the card with BTC, BCH, ETH,
//           USDC, USDT, and Bitcoin.com’s VERSE token.
//         </p>
//         <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
//           V-Card Coming Soon
//         </button>
//         <div className="flex justify-center mt-8 space-x-6">
//           <img
//             src="./img/btc.svg"
//             alt="Bitcoin"
//             className="w-12 h-12 transform transition-transform hover:scale-110"
//           />
//           <img
//             src="./img/USDT.svg"
//             alt="USDC"
//             className="w-12 h-12 transform transition-transform hover:scale-110"
//           />
//           <img
//             src="./img/ETH.svg"
//             alt="USDT"
//             className="w-12 h-12 transform transition-transform hover:scale-110"
//           />
//           <img
//             src="./img/USDC.svg"
//             alt="Ethereum"
//             className="w-12 h-12 transform transition-transform hover:scale-110"
//           />
//           <img
//             src="./img/BCH.svg"
//             alt="Verse"
//             className="w-12 h-12 transform transition-transform hover:scale-110"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VCardComponent;



import React from "react";

const VCardComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 py-4 px-4 rounded-lg">
      <div className="bg-white text-blue-600 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-lg text-center">
        <div className="flex flex-col items-center mb-4 sm:mb-6 md:flex-row md:justify-center">
          <img
            src="logo.svg"
            alt="Verse Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 mr-0 sm:mr-3"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold">
              BitXcoin
            </h1>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold ml-0 sm:ml-2">
              | V-Card
            </span>
          </div>
        </div>
        <img
          src="./img/vcard.webp"
          alt="V-Card"
          className="w-full h-auto mb-4 sm:mb-6"
        />
        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
          BitXcoin.com’s V-Card enables you to spend cryptocurrency anywhere
          Mastercard® is accepted. You can top up the card with BTC, BCH, ETH,
          USDC, USDT, and Bitcoin.com’s VERSE token.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-full transition-transform transform hover:scale-105">
          V-Card Coming Soon
        </button>
        <div className="flex flex-wrap justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-4">
          <img
            src="./img/btc.svg"
            alt="Bitcoin"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform hover:scale-110"
          />
          <img
            src="./img/USDT.svg"
            alt="USDC"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform hover:scale-110"
          />
          <img
            src="./img/ETH.svg"
            alt="USDT"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform hover:scale-110"
          />
          <img
            src="./img/USDC.svg"
            alt="Ethereum"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform hover:scale-110"
          />
          <img
            src="./img/BCH.svg"
            alt="Verse"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default VCardComponent;
