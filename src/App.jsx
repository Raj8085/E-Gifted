// import { Button } from './components/ui/button'


// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// const App = () => {
//   return (
//     <div className='px-16'>
//     <Button>Hello shadcn</Button>
//     <Card>
//   <CardHeader>
//     <CardTitle>Card Title</CardTitle>
//     <CardDescription>Card Description</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <p>Card Content</p>
//   </CardContent>
//   <CardFooter>
//     <p>Card Footer</p>
//   </CardFooter>
// </Card>

//     </div>
//   )
// }

// export default App


// import '../src/App.css'
// const AdidasGiftCard = () => {
//   return (
//     <div className="gift-card-container">
//       <div className="gift-card">
      
//         <div className="text">gift card.</div>
//         <div className="website">adidas.com</div>
//       </div>
//       <div className="brand">Adidas</div>
//     </div>
//   );
// };

// export default AdidasGiftCard;

// import GiftCards from "./components/gifts/giftCards";


// function App() {
//   return (
//     <div className="App">
//      <GiftCards/>
//     </div>
//   );
// }

// export default App;


import "../src/App.css";
import Navbar from "./components/navbar/navbar";
import GiftCards from "./components/gifts/giftCards";
import HeroSection from "./HeroSection/heroSection";
import Footer from "./Footer/footer";

// import { Input } from "@/components/ui/input"
const generateSnowflakes = (num) => {
  const snowflakes = [];
  for (let i = 0; i < num; i++) {
    // Random values for each snowflake's movement
    const moveX1 = `${Math.random() * 100 - 50}vw`;
    const moveY1 = `${Math.random() * 100 - 50}vh`;
    const moveX2 = `${Math.random() * 100 - 50}vw`;
    const moveY2 = `${Math.random() * 100 - 50}vh`;
    const moveX3 = `${Math.random() * 100 - 50}vw`;
    const moveY3 = `${Math.random() * 100 - 50}vh`;
    const moveX4 = `${Math.random() * 100 - 50}vw`;
    const moveY4 = `${Math.random() * 100 - 50}vh`;
    const duration = Math.random() * 10 + 10; // Random duration between 5s and 10s
    const delay = Math.random() * 3; // Random delay between 0s and 3s

    snowflakes.push(
      <div
        key={i}
        className="snowflake"
        style={{
          "--moveX1": moveX1,
          "--moveY1": moveY1,
          "--moveX2": moveX2,
          "--moveY2": moveY2,
          "--moveX3": moveX3,
          "--moveY3": moveY3,
          "--moveX4": moveX4,
          "--moveY4": moveY4,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          top: `${Math.random() * 100}vh`, // Random initial position
          left: `${Math.random() * 100}vw`, // Random initial position
        }}
      >
        *
      </div>
    );
  }
  return snowflakes;
};

const App = () => {
  return( 
    <>

    <Navbar/>
    <HeroSection/>
  <div className="snow-container">{generateSnowflakes(20)}</div>
  <h1 className="heading">Shop from Hundreds of Gift Cards</h1>
  <p className="description">Buy,Send And Claim Gifts Cards. Chip in with Friends. Store and Manage Gift Cards.</p>
    <GiftCards/>
    <Footer/>

  
  </>
);
};
export default App;