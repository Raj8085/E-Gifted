import BuyCryptoCards, { BuyCrypto, CryptoFAQ } from "../BuyForCrypto/buyForCrypto"
import Footer from "../Footer/footer"
import RatingFeature from "../SecondBottom/ratingFeature"
import Navbar from "./navbar"

const BuyGiftCards = () => {
  return (
    <div>
      <BuyCrypto/>
      <CryptoFAQ/>
      <RatingFeature/>
      <BuyCryptoCards/> 
      <Footer/>
    </div>
  )
}

export default BuyGiftCards