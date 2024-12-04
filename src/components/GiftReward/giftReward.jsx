// import "./giftReward.css"; // Import the CSS file for styling
// import Card from "./card";
// const GiftRewards = () => {
//   return (
//     <div className="container">
//       <Card
//         image="bitcoin-icon.png"
//         title="Buy Gift Cards with Bitcoin"
//         description="Shop from 300+ brands using Bitcoin. No additional fees with Bitcoin."
//         buttonText="Shop Now"
//       />
//       <Card
//         image="personal-touch-icon.png"
//         title="Send Digital Gift Cards with a Personal Touch"
//         description="Customize your gift with an eGreeting card, photo, or video and a personal message."
//         buttonText="Buy Now"
//       />
//     </div>
//   );
// }



// export default GiftRewards;



import './giftReward.css';
const GridComponent = ({ title,image }) => {
  return (
    <div className="grid-component">
      <div className="grid">
      {image ? (
          <img 
            src={image} 
            alt={`${title} visual representation`} 
            className="grid-image"
          />
        ) : (
          <p className="grid-title">{title}.</p>
        )}
      </div>
    </div>
  );
};
export default GridComponent;