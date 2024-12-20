import { useEffect, useState } from "react";
import "./VisaRewards.css";

const VisaRewards = () => {
  return (
    <div className="visa-rewards-all1">
     <h1 className="visa-rewards-heading1">Visa® & American Express® Rewards</h1>
     <h2 className="visa-rewards-subheading1">The flexible reward your recipients will love.</h2>
    <div className="visa-rewards-container1">
        
      <div className="visa-text-section1">
        {/* <h1>Visa® & American Express® Rewards</h1>
        <h2>The flexible reward your recipients will love.</h2> */}
        <p className="visa-rewards-paragraph-p">
          Send <strong>Visa®</strong> or <strong>American Express®</strong> Reward
          cards for employee rewards, customer promotions, marketing incentives,
          and more. Send digital reward cards by email or send physical cards by
          traditional mail — the choice is yours!
        </p>
        <p className="visa-rewards-paragraph-p">
          Available from $5 to $2,000 and accepted anywhere Visa or American
          Express is accepted in the US or Canada.
        </p>
      </div>
      <div className="visa-image-section1">
        <img src="/eGiftedImages/VISAERC6MOB2B_fp01.png" alt="Reward Card" className="reward-card-image1" />
      </div>
    </div>
    </div>
  );
};

export {VisaRewards};




const VisaRewardsReverse = () => {
  return (
    <div className="visa-rewards-all2">
     <h1 className="visa-rewards-heading2">Not sure which eGift Card brand to send?</h1>
     <h2 className="visa-rewards-subheading-reverse2">The all-digital eGifter Rewards Choice Card™ lets your recipient choose their favorite gift card from among 300+ top brands</h2>
    <div className="visa-rewards-container2">

    <div className="visa-image-section2">
        <img src="/eGiftedImages\rewards-choice-card.jpg" alt="Reward Card" className="reward-card-image2" />
      </div>
        
      <div className="visa-text-section2">
        {/* <h1>Visa® & American Express® Rewards</h1>
        <h2>The flexible reward your recipients will love.</h2> */}
        <p>
        Your choice card recipient can choose from categories like dining, travel, apparel and streaming. Delivered instantly by email or text, you can send it with a personal message, eGreeting Card and your logo to drive engagement in your reward and incentive programs.
        </p>
      </div>
      
    </div>
    </div>
  );
};

export {VisaRewardsReverse};



const VisaRewardsApi = () => {
    return (
      <div className="visa-rewards-all3">
       <h1 className="visa-rewards-heading3">eGifter Gift Card API™</h1>
      <div className="visa-rewards-container3">
        <div className="visa-text-section3">
          {/* <h1>Visa® & American Express® Rewards</h1>
          <h2>The flexible reward your recipients will love.</h2> */}
          <p>
          Drive your rewards program with the power of our lightning fast API.
          Available exclusively in the <span className="bold-text">eGifter Rewards™</span> platform, <span className="bold-text">the eGifter Gift Card API </span> allows you to integrate gift cards into your mobile app or other rewards and incentives program. Deliver gift cards in real-time for <span className="bold-text">300+ top gift card brands.</span>
          </p>
        </div>

        <div className="visa-image-section3">
          <img src="/eGiftedImages/gift-card-api.jpg" alt="Reward Card" className="reward-card-image3" />
        </div>
        
      </div>
      </div>
    );
  };
  
  export {VisaRewardsApi};



  
// const HomeVisaRewards = () => {


//     const [imageUrl, setImageUrl] = useState('https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190');

//     const images = [
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
//       'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190'
//     ];
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setImageUrl((prevImageUrl) => {
//           const currentIndex = images.indexOf(prevImageUrl);
//           const nextIndex = (currentIndex + 1) % images.length;
//           return images[nextIndex];
//         });
//       }, 2000);
//       return () => clearInterval(interval);
//     }, []);

//     return (
//       <div className="visa-rewards-all">
//       <div className="visa-rewards-container-api">
//         <div className="visa-text-section">
//           {/* <h1>Visa® & American Express® Rewards</h1>
//           <h2>The flexible reward your recipients will love.</h2> */}
//           <p>
//             <span className="text-4xl font-extrabold font-serif">
//           Gift Card Rewards Solutions That Scale With Your Business
//           </span>
//           </p>

//         <p>Order gift cards in multiple quantities with <span className="bold-text">Rewards Express™ </span>or explore scalable enterprise solutions with <span className="bold-text">eGifter Rewards™</span>.
//          </p>
//         </div>

//         <div className="visa-image-section">
//           <img src={imageUrl} alt="Reward Card" className="reward-card-image-api" />
//         </div>
        
//       </div>
//       </div>
//     );
//   };
  
//   export {HomeVisaRewards};


const HomeVisaRewards = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190'
  );

  const images = [
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
    'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl((prevImageUrl) => {
        const currentIndex = images.indexOf(prevImageUrl);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visa-rewards-all bg-gray-40 py-10">
      <div className="visa-rewards-container-api max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="visa-text-section text-center md:text-left">
          <p className="business-buy">
            <span className="text-4xl md:text-4xl font-extrabold block mb-4">
              Gift Card Rewards Solutions That Scale With Your Business
            </span>
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-10 visa-rewards-paragraph-p0">
            Order gift cards in multiple quantities with{' '}
            <span className="font-bold">Rewards Express™</span> or explore scalable enterprise solutions with{' '}
            <span className="font-bold">eGifter Rewards™</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="visa-image-section flex justify-center md:justify-end">
          <img
            src={imageUrl}
            alt="Reward Card"
            className="reward-card-image-api w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  rounded-lg shadow-lg mr-20 image-reward"
          />
        </div>
      </div>
    </div>
  );
};

export { HomeVisaRewards };