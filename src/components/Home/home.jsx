import Footer from "../Footer/footer"
import GiftComponent, { GroupGiftEnd, GroupGiftSectionEnd } from "../GiftReward/card"
import GiftCards from "../gifts/giftCards"
import HeroSection from "../HeroSection/heroSection"
import SecondBottomGifter from "../SecondBottom/bottomCard"
import RatingFeature from "../SecondBottom/ratingFeature"

import "../../../src/App.css";
import SnowEffect from "../HeroSection/SnowEffect/SnowEffect"
import GroupGiftSection from "../GiftReward/GroupGiftSection"

const Home = () => {

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
  return (
    <div>
         <HeroSection/>
  {/* <div className="snow-container">{generateSnowflakes(15)}</div> */}
  <div className="mt-20 mb-24">
  <h1 className="flex items-center justify-center text-5xl font-semibold home-hero-heading">Shop from Hundreds of Gift Cards</h1>
  <p className="flex items-center justify-center mt-5 mb-8 text-3xl home-hero-para">Buy,Send And Claim Gifts Cards. Chip in with Friends. Store and Manage Gift Cards.</p>
  </div>
    <GiftCards/>
    {/* <GiftCardsDuplicate/> */}
    <GiftComponent/>
    <GroupGiftSection/>
    <GroupGiftSectionEnd/>
    <GroupGiftEnd/>
    <SecondBottomGifter/>
    <RatingFeature/>
    <Footer/>
    
   

{/* <GiftCards/> */}
    </div>
  )
}

export default Home