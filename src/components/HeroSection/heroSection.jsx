import { useEffect, useState } from 'react';
import '../../../src/App.css';

const HeroSection = () => {
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
    <div className="container">
      <div className="grid-item image">
        <img
          src="/eGiftedImages/egifter.png"
          alt="Holiday Greetings"
          width="100px"
          height="300"
        />  
      </div>
      <div className="grid-item-text-content">
        <h1 className='text-5xl font-bold'>Buy & Send Gift Cards Instantly With Crypto</h1>
        <p className='mt-8 text-3xl'>Buy premium gift cards with Cryptocurrency.</p>
        <input placeholder='Search for brands or products' className='w-96 h-12 mt-8 rounded-full cursor-pointer'/>  
      </div>
      <div className="grid-item context">
        <h2>Buying for Business?</h2>
        <p>Order gift cards in bulk for rewards & incentive programs.</p>
        <h1>Image Swap Demo</h1>
        <img
          src={imageUrl}
          alt="Gift Card"
          width="300"
          height="190"
        />

      </div>

      {/* <div className="image-container">
        <img className="image-top" src="https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190" alt='' />
        <img className="image-bottom" src="https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190" alt='' />
      </div> */}
    </div>
  );
};
export default HeroSection;