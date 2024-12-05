import Footer from "../Footer/footer"
import GiftCards from "../gifts/giftCards"
import RatingFeature from "../SecondBottom/ratingFeature"
// import { Input } from "../ui/input"

const BuyBusinessCards = () => {
  return (
    <div className="mt-32">
      {/* <Input placeholder="Search for cards" className="w-60 ml-40 mb-5 border-2 rounded-full"/> */}
      <GiftCards showInput={false}/>
      <RatingFeature/>
      <Footer/>
    </div>
  )
}
export default BuyBusinessCards