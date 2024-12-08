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



// import './giftReward.css';
// const GridComponent = ({ title,image }) => {
//   return (
//     <div className="grid-component">
//       <div className="grid">
//       {image ? (
//           <img 
//             src={image} 
//             alt={`${title} visual representation`} 
//             className="grid-image"
//           />
//         ) : (
//           <p className="grid-title">{title}.</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default GridComponent;







// eslint-disable-next-line react/prop-types
const GridComponent = ({ title, image, extraClasses = ''}) => {
  return (
    <div className={`bg-white rounded-lg  p-6 flex flex-col items-center ${extraClasses}`}>
      {/* Display image if provided */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-100 h-80  mb-4 ml-40 grid-title-image"
        />
      )}
      {/* Display title */}
      <h2 className="font-extrabold text-center text-4xl mr-40 grid-title p-6">{title}</h2>
      {/* <p className="mt-2 mr-20 font-semibold">order gift cards for employees with no minimums <br />or long-term commitment.</p> */}
      {/* {
        showButton && <p className="mt-2 mr-60 font-semibold">
        order gift cards for employees with no minimums
        <br />
        <span className="mr-44">or long-term commitment.</span>
      </p>
      }
      */}
      {/* <Link to="/cards">
      {showButton &&  <Button className="mt-4 rounded-full  h-10 w-52 text-xl font-bold bg-sky-800 mr-40">Start Today</Button>}</Link> */}
      {/* <Button>Start Today</Button> */}
    </div>
  );
};

export default GridComponent;
