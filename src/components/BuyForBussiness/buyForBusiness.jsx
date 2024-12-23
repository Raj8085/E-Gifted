// import "./buyForBusiness.css";

// const Rewards = () => {
//   return (
//     <div className="rewards-container">
//       <h1 className="rewards-header text-4xl font-bold">
//         Which Rewards Solution Is Right For Your Business?
//       </h1>
//       <img src="/eGiftedImages/arrows (1).png" alt="arrow" className="mb-8 w-[700px]"/>
//       {/* <div className="rewards-divider">
//         <div className="divider-line"></div>
//         <div className="divider-arrow"></div>
//         <div className="divider-line"></div>
//       </div> */}

//       <div className="rewards-grid">
//         {/* Left Column */}
//         <div className="reward-item">
//           <h2 className="text-3xl font-bold">
//             A Fast And Simple Way to Send Gift Cards Today
//           </h2>
//           <img
//             src="/eGiftedImages/rewards-express-value-prop.png" // Replace with actual image path
//             alt="Rewards Express Logo"
//             className="reward-logo"
//           />
//           <p className="text-2xl font-sans">
//             <strong>Rewards Express™</strong> is the fastest and easiest way to
//             send digital gift cards by email, whether you need 1 or 100. Add
//             personalization to your order with a thoughtful message and your
//             logo or a video greeting.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="reward-item">
//           <h2 className="text-3xl font-bold">
//             A Complete Solution For Your Rewards Program
//           </h2>
//           <img
//             src="/eGiftedImages/egifter-rewards-value-prop.png" // Replace with actual image path
//             alt="eGifter Rewards Logo"
//             className="reward-logo"
//           />
//           <p className="text-2xl font-sans">
//             <strong>eGifter Rewards™</strong> is the perfect solution for all
//             corporate gift card programs. Reward your employees, incentivize
//             customers, and more with custom branding, optional integrations,
//             and tons of reporting.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default Rewards;





// import React from 'react';
// Remove the line: import "./buyForBusiness.css"; 
// Tailwind classes replace all custom CSS

const Rewards = () => { 
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Which Rewards Solution Is Right For Your Business?
        </h1>
        
        {/* Arrows Image */}
        <div className="w-full flex justify-center mb-8">
          {/* Adjust the image width responsiveness as needed */}
          <img
            src="/eGiftedImages/arrows (1).png"
            alt="arrow"
            className="max-w-full md:max-w-lg"
          />
        </div>

        {/* Two-column grid on medium+ devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              A Fast And Simple Way to Send Gift Cards Today
            </h2>
            <img
              src="/eGiftedImages/rewards-express-value-prop.png"
              alt="Rewards Express Logo"
              className="w-48 h-auto mx-auto md:mx-0"
            />
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong>Rewards Express™</strong> is the fastest and easiest way to
              send digital gift cards by email, whether you need 1 or 100. Add
              personalization to your order with a thoughtful message and your
              logo or a video greeting.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              A Complete Solution For Your Rewards Program
            </h2>
            <img
              src="/eGiftedImages/egifter-rewards-value-prop.png"
              alt="eGifter Rewards Logo"
              className="w-48 h-auto mx-auto md:mx-0"
            />
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong>eGifter Rewards™</strong> is the perfect solution for all
              corporate gift card programs. Reward your employees, incentivize
              customers, and more with custom branding, optional integrations,
              and tons of reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
