import { useEffect, useState } from "react";
import "./VisaRewards.css";

const VisaRewards = () => {
  return (
    <div className="visa-rewards-all">
     <h1 className="visa-rewards-heading">Visa® & American Express® Rewards</h1>
     <h2 className="visa-rewards-subheading">The flexible reward your recipients will love.</h2>
    <div className="visa-rewards-container">
        
      <div className="visa-text-section">
        {/* <h1>Visa® & American Express® Rewards</h1>
        <h2>The flexible reward your recipients will love.</h2> */}
        <p>
          Send <strong>Visa®</strong> or <strong>American Express®</strong> Reward
          cards for employee rewards, customer promotions, marketing incentives,
          and more. Send digital reward cards by email or send physical cards by
          traditional mail — the choice is yours!
        </p>
        <p>
          Available from $5 to $2,000 and accepted anywhere Visa or American
          Express is accepted in the US or Canada.
        </p>
      </div>
      <div className="visa-image-section">
        <img src="public/eGiftedImages/VISAERC6MOB2B_fp01.png" alt="Reward Card" className="reward-card-image" />
      </div>
    </div>
    </div>
  );
};

export {VisaRewards};




const VisaRewardsReverse = () => {
  return (
    <div className="visa-rewards-all">
     <h1 className="visa-rewards-heading">Not sure which eGift Card brand to send?</h1>
     <h2 className="visa-rewards-subheading-reverse">The all-digital eGifter Rewards Choice Card™ lets your recipient choose their favorite gift card from among 300+ top brands</h2>
    <div className="visa-rewards-container">

    <div className="visa-image-section">
        <img src="/eGiftedImages\rewards-choice-card.jpg" alt="Reward Card" className="reward-card-image" />
      </div>
        
      <div className="visa-text-section">
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
      <div className="visa-rewards-all">
       <h1 className="visa-rewards-heading">eGifter Gift Card API™</h1>
      <div className="visa-rewards-container-api">
        <div className="visa-text-section">
          {/* <h1>Visa® & American Express® Rewards</h1>
          <h2>The flexible reward your recipients will love.</h2> */}
          <p>
          Drive your rewards program with the power of our lightning fast API.
          Available exclusively in the <span className="bold-text">eGifter Rewards™</span> platform, <span className="bold-text">the eGifter Gift Card API </span> allows you to integrate gift cards into your mobile app or other rewards and incentives program. Deliver gift cards in real-time for <span className="bold-text">300+ top gift card brands.</span>
          </p>
        </div>

        <div className="visa-image-section">
          <img src="public/eGiftedImages/gift-card-api.jpg" alt="Reward Card" className="reward-card-image-api" />
        </div>
        
      </div>
      </div>
    );
  };
  
  export {VisaRewardsApi};



  
const HomeVisaRewards = () => {


    const [imageUrl, setImageUrl] = useState('https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190');

    const images = [
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
      'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190'
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
      <div className="visa-rewards-all">
      <div className="visa-rewards-container-api">
        <div className="visa-text-section">
          {/* <h1>Visa® & American Express® Rewards</h1>
          <h2>The flexible reward your recipients will love.</h2> */}
          <p>
            <span className="text-4xl font-extrabold font-serif">
          Gift Card Rewards Solutions That Scale With Your Business
          </span>
          </p>

        <p>Order gift cards in multiple quantities with <span className="bold-text">Rewards Express™ </span>or explore scalable enterprise solutions with <span className="bold-text">eGifter Rewards™</span>.
         </p>
        </div>

        <div className="visa-image-section">
          <img src={imageUrl} alt="Reward Card" className="reward-card-image-api" />
        </div>
        
      </div>
      </div>
    );
  };
  
  export {HomeVisaRewards};