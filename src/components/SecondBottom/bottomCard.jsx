// import "./secondBottom.css";
// import BottomGridComponent from "./secondBottom";

// export function BottomGiftComponent() {
//     return (
//       <div className="gift-app">
//         <h1>6x6 Grid Example</h1>
//         <div className="gift-container">
//           <BottomGridComponent title="Grid 1"/>
//           <BottomGridComponent title="Grid 2" image="/eGiftedImages/egifter-rewards.png"/>
//         </div>
//       </div>
//     );
//   }

// import "./secondBottom.css";
// import BottomGridComponent from "./secondBottom";

// export function BottomGiftComponent() {
//   return (
//     <div className="gift-app">
//       <h1 className="gift-header">6x6 Grid Example</h1>
//       <div className="gift-container">
//         <BottomGridComponent head="Grid 1" />
//         <BottomGridComponent
//           head="Grid 2"
//         />
//       </div>
//     </div>
//   );
// }




// App.js
import { Link } from 'react-router-dom';
import Card from './secondBottom';
import './secondBottom.css';

function SecondBottomGifter() {
  return (
    <div className="app -mt-24">
       <Link to="/cards">
      <div className="card-container">
       
        <Card
          image="/eGiftedImages/buy-with-bitcoin.png"
          title="Buy Gift Cards with Bitcoin"
          description="Shop from 300+ Brands Using Bitcoin | No Additional Fees with Bitcoin"
          buttonText="SHOP NOW"
          
        />
        <Card
          image="/eGiftedImages/egifter-personalization.png"
          title="Send Digital Gift Cards with a Personal Touch"
          description="Customize your gift with an eGreeting Card, photo or video and a personal message."
          buttonText="BUY NOW"
        />
      
      </div>
      </Link>
    </div>
  );
}


export default SecondBottomGifter;
