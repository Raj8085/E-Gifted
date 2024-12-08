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




import GridComponent from '../../components/GiftReward/giftReward';
import "../../../src/App.css";

function GiftComponent() {
  return (
    <div className="app mt-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 p-2">
        {/* First Grid Item */}
        <GridComponent
        
          image="/eGiftedImages/egifter-rewards.png"
        />
        

        {/* Second Grid Item */}
        {/* <GridComponent
          title={
            <>
              The Gift Card Rewards
              <br />
              Program that has it all,
              <br />
              try <span className="text-blue-600 font-semibold mr-16">eGifter Rewards™</span>
              
            </>
          }
          extraClasses="h-110"
          showButton={true}

        /> */}

<GridComponent
  title={
    <div className='card-content1'>
      <span className="">
        The Gift Card Rewards
      </span>
      <br />
      <span className="">
        Program that has it all,
      </span>
      <br />
      <span className="text-blue-600 font-semibold sm:mr-16 block">
        try eGifter Rewards™
      </span>
    </div>
  }
  extraClasses="h-110"
  showButton={true}
/>
      </div>
    </div>
  );
}

export default GiftComponent;
