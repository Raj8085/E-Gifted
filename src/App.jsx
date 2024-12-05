// // import { Button } from './components/ui/button'


// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card"

// // const App = () => {
// //   return (
// //     <div className='px-16'>
// //     <Button>Hello shadcn</Button>
// //     <Card>
// //   <CardHeader>
// //     <CardTitle>Card Title</CardTitle>
// //     <CardDescription>Card Description</CardDescription>
// //   </CardHeader>
// //   <CardContent>
// //     <p>Card Content</p>
// //   </CardContent>
// //   <CardFooter>
// //     <p>Card Footer</p>
// //   </CardFooter>
// // </Card>

// //     </div>
// //   )
// // }

// // export default App


// // import '../src/App.css'
// // const AdidasGiftCard = () => {
// //   return (
// //     <div className="gift-card-container">
// //       <div className="gift-card">
      
// //         <div className="text">gift card.</div>
// //         <div className="website">adidas.com</div>
// //       </div>
// //       <div className="brand">Adidas</div>
// //     </div>
// //   );
// // };

// // export default AdidasGiftCard;

// // import GiftCards from "./components/gifts/giftCards";


// // function App() {
// //   return (
// //     <div className="App">
// //      <GiftCards/>
// //     </div>
// //   );
// // }

// // export default App;


import "../src/App.css";
// import Navbar from "./components/navbar/navbar";
// import GiftCards from "./components/gifts/giftCards";
// import HeroSection from "./components/HeroSection/heroSection";
// import Footer from "./components/Footer/footer";
// import GiftComponent from "./components/GiftReward/card";
// // import BottomGridComponent from "./components/SecondBottom/secondBottom";
// import SecondBottomGifter from "./components/SecondBottom/bottomCard";
// import RatingFeature from "./components/SecondBottom/ratingFeature";
// import SignIn from "./components/UserCredential/signIn";


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Rewards from "./components/BuyForBussiness/buyForBusiness";
// import FeatureComparison from "./components/BuyForBussiness/featureComparison";
// import {VisaRewards, HomeVisaRewards, VisaRewardsApi, VisaRewardsReverse } from "./components/BuyForBussiness/VisaRewards";
// import BuyCryptoCards, { BuyCrypto} from "./components/BuyForCrypto/buyForCrypto";
// import GiftCardPayment, { TabLayout } from "./components/PaymentPage/buyGift";
// import SignIn from "./components/UserCredential/signIn.jsx"; 

// import { Input } from "@/components/ui/input"

import "../src/components/PaymentPage/tabLayout.css";
import RoutingApp from "./Routing/routing";
// import FrequentAskedQuestions from "./components/PaymentPage/FAQ";
// import { CardWithForm } from "./components/Cards/card";
// import { CardWithFormQr } from "./components/Cards/qrPayment";
// import RoutingApp from "./Routing/routing";
// import GiftCardApp from "./components/PaymentPage/buyGift";
// const generateSnowflakes = (num) => {
//   const snowflakes = [];
//   for (let i = 0; i < num; i++) {
//     // Random values for each snowflake's movement
//     const moveX1 = `${Math.random() * 100 - 50}vw`;
//     const moveY1 = `${Math.random() * 100 - 50}vh`;
//     const moveX2 = `${Math.random() * 100 - 50}vw`;
//     const moveY2 = `${Math.random() * 100 - 50}vh`;
//     const moveX3 = `${Math.random() * 100 - 50}vw`;
//     const moveY3 = `${Math.random() * 100 - 50}vh`;
//     const moveX4 = `${Math.random() * 100 - 50}vw`;
//     const moveY4 = `${Math.random() * 100 - 50}vh`;
//     const duration = Math.random() * 10 + 10; // Random duration between 5s and 10s
//     const delay = Math.random() * 3; // Random delay between 0s and 3s

//     snowflakes.push(
//       <div
//         key={i}
//         className="snowflake"
//         style={{
//           "--moveX1": moveX1,
//           "--moveY1": moveY1,
//           "--moveX2": moveX2,
//           "--moveY2": moveY2,
//           "--moveX3": moveX3,
//           "--moveY3": moveY3,
//           "--moveX4": moveX4,
//           "--moveY4": moveY4,
//           animationDuration: `${duration}s`,
//           animationDelay: `${delay}s`,
//           top: `${Math.random() * 100}vh`, // Random initial position
//           left: `${Math.random() * 100}vw`, // Random initial position
//         }}
//       >
//         *
//       </div>
//     );
//   }
//   return snowflakes;
// };

const App = () => {
  return( 
    <>

    {/* <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sign-in" element={<buyGiftCards />} /> 
      </Routes>
    </Router> */}

    <RoutingApp/>





    {/* <HeroSection/>
  <div className="snow-container">{generateSnowflakes(20)}</div>
  <h1 className="heading">Shop from Hundreds of Gift Cards</h1>
  <p className="description">Buy,Send And Claim Gifts Cards. Chip in with Friends. Store and Manage Gift Cards.</p>
    <GiftCards/>
    <GiftComponent/>
    <SecondBottomGifter/>
    <RatingFeature/>
    
    <Footer/> */}

    {/* <GiftCards/> */}

    {/* <GiftCardApp/> */}


    {/* <HomeVisaRewards/>
    <Rewards/>
    <FeatureComparison/>
    <VisaRewards/>
    <VisaRewardsReverse/>
    <VisaRewardsApi/> */}

    {/* <BuyCrypto/> */}
    {/* <giftCardData/>
    <GiftCards/>
    <BuyCryptoCards/> */}

    

    {/* <GiftCardPayment/> */}

    {/* <TabLayout/> */}


{/* <CardWithFormQr/> */}
    


    {/* <FrequentAskedQuestions/> */}
   </>
);
};
export default App;






// import { Card, CardContent } from "./components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./components/ui/carousel"

// function CarouselDemo() {
//   return (
//     <Carousel className="w-[600px]  ml-16">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }
// export default CarouselDemo