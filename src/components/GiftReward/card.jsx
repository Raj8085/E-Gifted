// import PropTypes from "prop-types";

// function Card({ image, title, description, buttonText }) {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <h3 className="card-title">{title}</h3>
//       <p className="card-description">{description}</p>
//       <button className="card-button">{buttonText}</button>
//     </div>
//   );
// }

// // Define PropTypes for validation
// Card.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

// export default Card;

// import GridComponent from './giftReward';
// import './giftReward.css';

// function  GiftComponent() {
//   return (
//     <div className="app">
//       <div className="grid-middle">
//         <GridComponent title="Grid 1" image="/eGiftedImages/egifter-rewards.png"/>
// <GridComponent
//           title={
//             <>
//               The Gift Card Rewards<br />
//               Program that has it all,<br />
//               try eGifter Rewards™
//             </>
//           }

//         />

//       </div>
//     </div>
//   );
// }
// export default GiftComponent;

// import GridComponent from '../../components/GiftReward/giftReward';
// import "../../../src/App.css";

// function GiftComponent() {
//   return (
//     <div className="app mt-10">
//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2  gap-2 p-2">
//         {/* First Grid Item */}
//         <GridComponent

//           image="/eGiftedImages/egifter-rewards.png"
//         />

//         {/* Second Grid Item */}
//         {/* <GridComponent
//           title={
//             <>
//               The Gift Card Rewards
//               <br />
//               Program that has it all,
//               <br />
//               try <span className="text-blue-600 font-semibold mr-16">eGifter Rewards™</span>

//             </>
//           }
//           extraClasses="h-110"
//           showButton={true}

//         /> */}

// <GridComponent
//   title={
//     <div className='card-content1'>
//       <span className="">
//         The Gift Card Rewards
//       </span>
//       <br />
//       <span className="">
//         Program that has it all,
//       </span>
//       <br />
//       <span className="text-blue-600 font-semibold sm:mr-16 block">
//         try eGifter Rewards™
//       </span>
//       {/* <span>Order gift cards for employees with no minimums or long-term commitment.</span> */}
//     </div>
//   }
//   extraClasses="h-110"
//   showButton={true}
// />
//       </div>
//     </div>
//   );
// }

// export default GiftComponent;

const GroupGiftSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 max-w-6xl mx-auto px-4">
      {/* Image / Illustration side */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <img
          src="/eGiftedImages/egifter-rewards.png"
          alt="Gift illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text / Content side */}
      <div className="flex-1 md:ml-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          The Gift Card Rewards Program that has it all,
          <span className="text-blue-600 font-semibold sm:mr-16 block">
            try eGifter Rewards™
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
          Order gift cards for employees with no minimums or long-term
          commitment.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          START TODAY
        </button>
      </div>
    </section>
  );
};

export default GroupGiftSection;

const GroupGiftSectionEnd = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 max-w-6xl mx-auto px-4">
      {/* Image / Illustration side */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <img
          src="/eGiftedImages/shop-local.png"
          alt="Gift illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text / Content side */}
      <div className="flex-1 md:ml-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Shop Local Gift Cards
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
          eGifter makes supporting local businesses easy with a variety of gift
          cards from nearby shops, eateries, and services. Whether you're
          treating yourself or giving a gift, eGifter connects you to the best
          local spots.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          SHOP LOCAL
        </button>
      </div>
    </section>
  );
};

export { GroupGiftSectionEnd };

const GroupGiftEnd = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 max-w-6xl mx-auto px-4">
      {/* Image / Illustration side */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <img
          src="/eGiftedImages/egifter-choice-card.png"
          alt="Gift illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text / Content side */}
      <div className="flex-1 md:ml-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Give the Gift of Choice
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
        Gift them what they really want!
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">With the eGifter Choice Card you can give the Choice of Hundreds of Gift Cards.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          START GIFTING
        </button>
      </div>
    </section>
  );
};

export { GroupGiftEnd };
