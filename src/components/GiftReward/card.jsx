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


import GridComponent from './giftReward';
import './giftReward.css';

function GiftComponent() {
  return (
    <div className="app">
      <div className="grid-middle">
        <GridComponent title="Grid 1" image="/eGiftedImages/egifter-rewards.png"/>
        {/* <GridComponent title=" The Gift Card Rewards<br />
              Program that has it all,<br />
              try eGifter Rewards™"/> */}

<GridComponent 
          title={
            <>
              The Gift Card Rewards<br />
              Program that has it all,<br />
              try eGifter Rewards™
            </>
          }
      
        />

      </div>
    </div>
  );
}





export default GiftComponent;