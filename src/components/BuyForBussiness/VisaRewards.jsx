import  { useEffect, useState } from 'react';

/* 
 *  1) VisaRewards
 *  Visa® & American Express® Rewards
 */
const VisaRewards = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headings */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Visa® & American Express® Rewards
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 text-center mb-8">
          The flexible reward your recipients will love.
        </h2>

        {/* Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Send <strong>Visa®</strong> or <strong>American Express®</strong> Reward cards for employee rewards, 
              customer promotions, marketing incentives, and more. Send digital reward cards by email or send 
              physical cards by traditional mail — the choice is yours!
            </p>
            <p className="text-gray-700 leading-relaxed">
              Available from $5 to $2,000 and accepted anywhere Visa or American Express 
              is accepted in the US or Canada.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="/eGiftedImages/VISAERC6MOB2B_fp01.png"
              alt="Reward Card"
              className="w-full max-w-sm rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VisaRewards };

/* 
 *  2) VisaRewardsReverse
 *  Not sure which eGift Card brand to send?
 */
const VisaRewardsReverse = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headings */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Not sure which eGift Card brand to send?
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 text-center mb-8">
          The all-digital eGifter Rewards Choice Card™ lets your recipient choose 
          their favorite gift card from among 300+ top brands
        </h2>

        {/* Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center order-2 md:order-1">
            <img
              src="/eGiftedImages/rewards-choice-card.jpg"
              alt="Reward Card"
              className="w-full max-w-sm rounded shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <p className="text-gray-700 leading-relaxed">
              Your choice card recipient can choose from categories like dining, travel, apparel 
              and streaming. Delivered instantly by email or text, you can send it with a personal 
              message, eGreeting Card and your logo to drive engagement in your reward and incentive programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VisaRewardsReverse };

/* 
 *  3) VisaRewardsApi
 *  eGifter Gift Card API™
 */
const VisaRewardsApi = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          eGifter Gift Card API™
        </h1>

        {/* Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 leading-relaxed">
              Drive your rewards program with the power of our lightning fast API. 
              Available exclusively in the <span className="font-bold">eGifter Rewards™</span> platform, 
              <span className="font-bold"> the eGifter Gift Card API </span> allows you to integrate 
              gift cards into your mobile app or other rewards and incentives program. Deliver 
              gift cards in real-time for <span className="font-bold">300+ top gift card brands.</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="/eGiftedImages/gift-card-api.jpg"
              alt="Reward Card"
              className="w-full max-w-sm rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VisaRewardsApi };

/* 
 *  4) HomeVisaRewards 
 *  Sliding images example
 */
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
  }, [images]);

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Gift Card Rewards Solutions That Scale With Your Business
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Order gift cards in multiple quantities with{' '}
            <span className="font-bold">Rewards Express™</span> or explore 
            scalable enterprise solutions with{' '}
            <span className="font-bold">eGifter Rewards™</span>.
          </p>
        </div>

        {/* Image (Sliding) Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageUrl}
            alt="Reward Card"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export { HomeVisaRewards };
