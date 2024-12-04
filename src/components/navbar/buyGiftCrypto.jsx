import Rewards from "../BuyForBussiness/buyForBusiness"
import FeatureComparison from "../BuyForBussiness/featureComparison"
import { HomeVisaRewards, VisaRewards, VisaRewardsApi, VisaRewardsReverse } from "../BuyForBussiness/VisaRewards"
import Footer from "../Footer/footer"
import RatingFeature from "../SecondBottom/ratingFeature"

const BuyGiftCrypto = () => {
  return (
    <div className="mt-16">
      <HomeVisaRewards/>
      <Rewards/>
      <FeatureComparison/>
      <VisaRewards/>
      <VisaRewardsReverse/>
      <VisaRewardsApi/>
      <RatingFeature/>
      <Footer/>
    </div>
  )
}

export default BuyGiftCrypto