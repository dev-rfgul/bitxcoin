import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Features from "./Components/Features";
import Banner2 from "./Components/Banner2";
import Mining from "./Components/Mining";
import Partners from "./Components/Partners";
import VisitCounter from "./Components/VisitCounter";
import BannerAd from "../src/ads/Banner"
import Banner from "./Components/Banner";

const App = () => {
  const features = [
    { text: "Your keys, your coins", img: "./img/safe-secure-list-img-1.webp" },
    { text: "Encrypted key backup", img: "./img/safe-secure-list-img-2.webp" },
    { text: "Scam prevention", img: "./img/safe-secure-list-img-3.webp" },
    { text: "Multisig support", img: "./img/safe-secure-list-img-4.webp" },
    { text: "Externally audited", img: "./img/safe-secure-list-img-5.webp" },
  ];

  const features2 = [
    {
      text: "Top up your card with crypto",
      img: "./img/crypto-list-img-1.webp",
    },
    {
      text: "Spend anywhere Mastercard® is accepted",
      img: "./img/crypto-list-img-2.webp",
    },
    {
      text: "Withdraw cash from ATMs worldwide",
      img: "./img/crypto-list-img-3.webp",
    },
  ];

  const feature3 = [
    { text: "Self custodial and multichain", img: "./img/wallet-round.webp" },
    { text: "Send and receive thousands of assets", img: "./img/share.webp" },
    { text: "Quick and easy trading", img: "./img/setting.webp" },
  ];
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div>
        <Navbar />
        {isAuthenticated && <Mining />}
        {!isAuthenticated && (
          <>
            <VisitCounter />

            <BannerAd/>
            <Banner
              heading="Welcome To BitXCoin"
              text="Buy, sell, trade, and invest in Bitcoin & crypto - all in one safe and simple app"
              buttonText="Start Mining Now"
              img="./img/hero-image.png"
              imgPosition="right"
            />
            <Partners />


            <Banner2
              heading="Take control of your money"
              mainImg="./img/multi-chain-custodial.webp"
              features={feature3}
              imgPosition="right"
            />
            <Card />

            <Banner
              heading="Your gateway to web3"
              text="Connect to thousands of dApps and make the most out of your crypto experience"
              buttonText="Download Now"
              img="./img/banner-img-2.webp"
              imgPosition="left"
            />
            <Banner2
              heading="From crypto to cash in a flash"
              mainImg="./img/crypto-cash.webp"
              features={features2}
            />
            <Features />
            <Banner2
              heading="Safe and secure"
              mainImg="./img/sheild-2.png"
              features={features}
              imgPosition="left"
            />


            <Banner
              heading="Maps"
              text="Find merchants and ATMs in your area that accept BTC, BCH, ETH VERSE"
              img="./img/maps.webp"
              buttonText="Download Now"
              imgPosition="left"
            />

            <Banner
              heading="Games"
              text="Navigate the exciting realm of blockchain games and casino"
              img="./img/games.webp"
              buttonText="Start Playing"
            />

            <Banner
              heading="Reviews"
              text="Discover expert reviews on businesses and services that accept crypto. Easily browse, compare, and select the best options with just a few clicks"
              buttonText="Discover Now"
              img="./img/reviews.webp"
              imgPosition="left"
            />

            <Banner
              heading="Buy"
              img="./img/buy-banner.webp"
              text="Use your credit card, bank account, or payment app to buy Bitcoin and other select cryptocurrencies"
              buttonText="Buy Now"
            />
            <Banner
              heading="Swap"
              img="./img/swap-banner.webp"
              text="Safely and easily send, receive, buy, sell, trade, use, and manage Bitcoin (BTC), Bitcoin Cash (BCH), Ether (ETH), and the most popular cryptocurrencies."
              buttonText="Swap Now"
              imgPosition="left"
            />
            <Banner
              heading="What is Bitcoin?"
              img="./img/what-is-bitcoin.webp"
              text="Explore the Learning Center for insights on Bitcoin and crypto"
              buttonText="Get Started  Now"
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
