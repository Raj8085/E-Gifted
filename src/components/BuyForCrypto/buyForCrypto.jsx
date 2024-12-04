import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import "./buyForCrypto.css";

const BuyCrypto = () => {
    const features = [
        {
          title: "Desktop & Mobile Web",
          description: "Use Cryptocurrency to buy Gift Cards at eGifter.com.",
          image : "public/eGiftedImages/crypto_001.png",
        },
        {
          title: "1,000+ Brands",
          description: "1,000+ Gift Cards are available for purchase with Cryptocurrency.",
          image: "public/eGiftedImages/crypto_002-no-number.png",
        },
        {
          title: "No Additional Fees",
          description: "Simple checkout process with no additional fees.",
          image: "public/eGiftedImages/crypto_003.png",
        },
        {
          title: "Fast Transactions",
          description: "Cryptocurrency offers fast and secure payments.",
          image: "public/eGiftedImages/crypto_004.png",
          
        },
        {
            title: "Find Answers",
            description: "Got questions? We've got answers in our.",
          image: "public/eGiftedImages/crypto_006.png",
            
          },
          
      ];
    return (
        <>
      <div className="crypto-hero-container">
        <img
          src="public/eGiftedImages/crypto-hero-image.png"
          alt="Crypto Hero"
          className="crypto-hero-image"
        />
        <h1 className="crypto-hero-heading ">
         <h1 className="crypto-hero-subheading"> Buy Gift Cards with Cryptocurrency</h1>
          <p>
          Shop from Hundreds of Gift Cards with Cryptocurrency</p>
          <Link to="/cards">
          <Button className="mt-16 bg-sky-600 rounded-full">BUY WITH CRYPTOCURRENCY</Button>
          </Link>
        </h1>
      </div>
      <div className="app-container">
      <header className="header">
        <h1>eGifter Accepts Cryptocurrency for Gift Cards</h1>
        <p>See why eGifter is your best option for Gift Cards with Cryptocurrency</p>
      </header>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-container"><img src={feature.image} alt={feature.title} /></div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* <div className="app-container">
        <h1 className="">Shop Gift Cards from 1,000+ Retailers</h1>
        <p>eGifter has the largest selection of Gift Cards to buy with Cryptocurrency</p>
       
    </div> */}

      </>
    );
  };
  
  export { BuyCrypto };




const BuyCryptoCards = () => {
  return (
    <div>
         <div className="cards-crypto-container">
    <h1 className="cards-crypto-title">Cards you can buy with Cryptocurrency on eGifter</h1>
    <div className="cards-crypto-grid ml-36">
      <ul>
        <li>Adidas</li>
        <li>Arsenal</li>
        <li>B&Q</li>
        <li>Blackwells</li>
        <li>BoohooMAN</li>
        <li>Burton</li>
        <li>Caffè Nero</li>
        <li>Cineworld</li>
        <li>Crown Carveries</li>
        <li>DigiiGifts</li>
        <li>Dorothy Perkins</li>
        <li>Entertainer</li>
        <li>Farmhouse Inns</li>
        <li>FlystayGift</li>
        <li>Global Hotel Card</li>
      </ul>
      <ul>
        <li>AirlineGift</li>
        <li>ASDA</li>
        <li>Baby Blooms</li>
        <li>Bloom & Wild</li>
        <li>Boots</li>
        <li>Butlin by Inspire</li>
        <li>Champneys</li>
        <li>Clarks</li>
        <li>Costa</li>
        <li>Currys</li>
        <li>Dine</li>
        <li>Eating Inn</li>
        <li>Ernest Jones</li>
        <li>FatFace</li>
        <li>Foot Locker</li>
      </ul>
      <ul>
        <li>All Bar One</li>
        <li>Ask Italian</li>
        <li>Beer52</li>
        <li>Body Shop</li>
        <li>Borrow My Doggy</li>
        <li>Buyagift</li>
        <li>Charity Shop</li>
        <li>Daymade</li>
        <li>Dining Out Card</li>
        <li>eLearnGift</li>
        <li>Eurostar</li>
        <li>Fayre & Square</li>
        <li>Footasylum</li>
        <li>GlobalGiving</li>
        <li>Go Ape</li>
      </ul>
      <ul>
        <li>Argos</li>
        <li>B&M</li>
        <li>Bella Italia</li>
        <li>Boohoo</li>
        <li>Browns</li>
        <li>Café Rouge</li>
        <li>Chef & Brewer</li>
        <li>Côte</li>
        <li>Deliveroo</li>
        <li>Disneyland Paris</li>
        <li>Ember Inns</li>
        <li>FarmFoods</li>
        <li>Flaming Grill</li>
        <li>Global Experiences Card</li>
        <li>Good Night Inns</li>
      </ul>
    </div>
  </div>
    </div>
  )
}
export default BuyCryptoCards



export  function CryptoFAQ() {
  const faqs = [
    {
      question: "eGifter Cryptocurrency FAQ",
      answer: "",
    },
    {
      question: "What are Cryptocurrencies?",
      answer:
        "Cryptocurrencies are digital currencies that use blockchain technology. You can use them to buy goods and services or trade them for other currencies (both other cryptocurrencies or traditional currencies like US dollars).",
    },
    {
      question: "What can I buy with Cryptocurrencies?",
      answer:
        "eGifter sells eGift Cards from over 1,000 international brands. Almost all of our eGift Cards can be purchased with cryptocurrency. You can purchase gift cards from categories like food, clothing, gaming, entertainment, and merchandise of almost every kind using cryptocurrency at eGifter.",
    },
    {
      question: "Are there any fees for paying with Cryptocurrencies?",
      answer: "eGifter does not charge any fees for paying with cryptocurrencies.",
    },
    {
      question: "Why use eGifter?",
      answer:
        "We have been involved with the cryptocurrency community since the beginning. We have been working with and in the community for years now - and have the experience and track record that you can trust. We want to help grow and support the cryptocurrency community by expanding the range of goods and services you can purchase with your cryptocurrency.",
    },
    {
      question: "How do I get started?",
      answer:
        "Go to our Gift Cards page and select your country to start purchasing cards in your browser, or download our mobile app for iOS or Android to start buying Gift Cards in the US. Select Cryptocurrency as your payment method at checkout.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          eGifter Cryptocurrency FAQ
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
