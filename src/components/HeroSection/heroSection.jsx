// // import { useEffect, useState } from 'react';
// // import '../../../src/App.css';

// // const HeroSection = () => {
// //   const [imageUrl, setImageUrl] = useState('https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190');

// //   const images = [
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190'
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setImageUrl((prevImageUrl) => {
// //         const currentIndex = images.indexOf(prevImageUrl);
// //         const nextIndex = (currentIndex + 1) % images.length;
// //         return images[nextIndex];
// //       });
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="container">
// //       <div className="grid-item image">
// //         <img
// //           src="/eGiftedImages/egifter.png"
// //           alt="Holiday Greetings"
// //           width="100px"
// //           height="300"
// //         />  
// //       </div>
// //       <div className="grid-item-text-content">
// //         <h1 className='text-5xl font-bold hero-heading'>Buy & Send Gift Cards Instantly With Crypto</h1>
// //         <p className='mt-8 text-3xl hero-para'>Buy premium gift cards with Cryptocurrency.</p>
// //         <input placeholder='Search for brands or products' className='w-96 h-12 mt-8 rounded-full cursor-pointer input-field'/>  
// //         {/* <Button></Button> */}
// //       </div>
      
// //       <div className="grid-item context">
// //         <h2 className='text-5xl font-bold hero-heading'>Buying for Business?</h2>
// //         <p className='mt-8 text-3xl hero-para'>Order gift cards in bulk for rewards & incentive programs.</p>
// //         {/* <h1>Image Swap Demo</h1> */}
// //         <img
// //           src={imageUrl}
// //           alt="Gift Card"
// //           width="300"
// //           height="190"
// //           className='mt-8'
// //         />

// //       </div>

// //       {/* <div className="image-container">
// //         <img className="image-top" src="https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190" alt='' />
// //         <img className="image-bottom" src="https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190" alt='' />
// //       </div> */}
// //     </div>
// //   );
// // };
// // export default HeroSection;


// // import { useEffect, useState } from 'react';
// // import { Button } from '../ui/button';
// // import { Link } from 'react-router-dom';
// // // Make sure Tailwind is properly set up in your project.
// // // Remove this if you no longer need it.
// // // import '../../../src/App.css';

// // const HeroSection = () => {
// //   const [imageUrl, setImageUrl] = useState('https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190');

// //   const images = [
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
// //     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190'
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setImageUrl((prevImageUrl) => {
// //         const currentIndex = images.indexOf(prevImageUrl);
// //         const nextIndex = (currentIndex + 1) % images.length;
// //         return images[nextIndex];
// //       });
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
// //       {/* Left Image Section */}
// //       {/* <div className="flex justify-center md:justify-start w-[30rem]">
// //         <img
// //           src="/eGiftedImages/egifter.png"
// //           alt="Holiday Greetings"
        
// //         />


// //       </div> */}

// // <div className="flex justify-center md:justify-start w-full md:w-[30rem]">
// //   <img
// //     src="/eGiftedImages/egifter.png"
// //     alt="Holiday Greetings"
// //     className="w-full h-auto object-contain"
// //   />
// // </div>


// //       {/* Text Content Section */}
// //       <div className="flex flex-col items-center md:items-start text-center md:text-left">
      
// //         <h1 className="text-3xl md:text-5xl font-bold mb-4">Buy & Send Gift Cards Instantly With Crypto</h1>
// //         <p className="text-xl md:text-3xl mb-6">Buy premium gift cards with Cryptocurrency.</p>
// //         <input 
// //           placeholder="Search for brands or products" 
// //           className="w-full md:w-96 h-12 rounded-full px-4 text-gray-700 focus:outline-none border border-gray-300"
// //         /> 
// //         <Link to="/cards">
// //         <Button className="w-[23rem] rounded-full bg-blue-900 mt-4">LEARN MORE</Button>
// //         <Button className="w-[23rem] rounded-full bg-red-400 mt-8 h-16">BUY GIFT CARDS</Button>
// //         </Link>
// //       </div>
      
// //       {/* Business Section */}
// //       <div className="flex flex-col items-center md:items-start text-center md:text-left">
// //         <h2 className="text-3xl md:text-5xl font-bold mb-4">Buying for Business?</h2>
// //         <p className="text-xl md:text-3xl mb-6">Order gift cards in bulk for rewards & incentive programs.</p>
// //         <img
// //           src={imageUrl}
// //           alt="Gift Card"
// //           width="300"
// //           height="190"
// //           className="mt-8"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import { useEffect, useState } from 'react';
// import { Button } from '../ui/button';
// import { Link } from 'react-router-dom';
// import SnowEffect from './SnowEffect/SnowEffect';

// const HeroSection = () => {
//   const [imageUrl, setImageUrl] = useState('https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190');

//   const images = [
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/UBER_fp01.png?width=300&height=190',
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/WALMART_fp01.png?width=300&height=190',
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/MACYS_fp01.png?width=300&height=190',
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/BESTBUY_fp01.png?width=300&height=190',
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/AMEREAG_fp01.png?width=300&height=190',
//     'https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ITUNESC_fp01.png?width=300&height=190'
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageUrl((prevImageUrl) => {
//         const currentIndex = images.indexOf(prevImageUrl);
//         const nextIndex = (currentIndex + 1) % images.length;
//         return images[nextIndex];
//       });
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//          <SnowEffect/>

//     <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//       {/* Left Image Section */}
//       <div className="flex justify-center md:justify-start w-full md:w-[30rem]">
//         <img
//           src="/eGiftedImages/egifter.png"
//           alt="Holiday Greetings"
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* Text Content Section */}
//       <div className="flex flex-col items-center md:items-start text-center md:text-left">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Buy & Send Gift Cards Instantly With Crypto
//         </h1>
//         <p className="text-xl md:text-3xl mb-6">
//           Buy premium gift cards with Cryptocurrency.
//         </p>
//         <input
//           placeholder="Search for brands or products"
//           className="w-full md:w-96 h-12 rounded-full px-4 text-gray-700 focus:outline-none border border-gray-300"
//         />
        
//         <Link to="/cards" className="w-full md:w-auto">
//           {/* Set button widths to be full on small screens, fixed on larger screens */}
//           <Button className="w-full md:w-[23rem] rounded-full bg-blue-900 mt-4">LEARN MORE</Button>
//           <Button className="w-full md:w-[23rem] rounded-full bg-red-400 mt-4 h-16">BUY GIFT CARDS</Button>
//         </Link>
//       </div>
      
//       {/* Business Section */}
//       <div className="flex flex-col items-center md:items-start text-center md:text-left">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4">
//           Buying for Business?
//         </h2>
//         <p className="text-xl md:text-3xl mb-6">
//           Order gift cards in bulk for rewards & incentive programs.
//         </p>
//         <img
//           src={imageUrl}
//           alt="Gift Card"
//           className="mt-8 w-full md:w-[300px] h-auto object-contain"
//         />
//       </div>
//     </div>
//     </>
//   );
// };

// export default HeroSection;


import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import SnowEffect from './SnowEffect/SnowEffect';

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
    <>

    <div className="container relative overflow-hidden"> 
      {/* The hero section wrapper is now relative and overflow-hidden */}
      <SnowEffect /> 
      {/* SnowEffect is now absolutely positioned within this container */}

      <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start w-full md:w-[30rem]">
          <img
            src="/eGiftedImages/egifter.png"
            alt="Holiday Greetings"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Buy & Send Gift Cards Instantly With Crypto
          </h1>
          <p className="text-xl md:text-3xl mb-6">
            Buy premium gift cards with Cryptocurrency.
          </p>

          <input
            placeholder="Search for brands or products"
            className="w-full md:w-96 h-12 rounded-full px-4 text-gray-700 focus:outline-none border border-gray-300"
          />
          
          <Link to="/cards" className="w-full md:w-auto">
            <Button className="w-full md:w-[23rem] rounded-full bg-blue-900 mt-4">LEARN MORE</Button>
            <Button className="w-full md:w-[23rem] rounded-full bg-red-400 mt-4 h-16">BUY GIFT CARDS</Button>
          </Link>
        </div>
        
        {/* Business Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Buying for Business?
          </h2>
          <p className="text-xl md:text-3xl mb-6">
            Order gift cards in bulk for rewards & incentive programs.
          </p>
          <img
            src={imageUrl}
            alt="Gift Card"
            className="mt-8 w-full md:w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
