// import HeroSection from "@/components/HeroSection/heroSection";
import Home from "@/components/Home/home";
import BuyBusinessCards from "@/components/navbar/buyBusinessCards";
import BuyGiftCards from "@/components/navbar/buyGiftCards";
import BuyGiftCrypto from "@/components/navbar/buyGiftCrypto";
import Navbar, { OfferBanner } from "@/components/navbar/navbar";
// import GiftCardApp from "@/components/PaymentPage/buyGift";
import SignIn from "@/components/UserCredential/signIn";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function RoutingApp() {
    return (
        <>
            <Router>
                <OfferBanner/>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/crypto" element={<BuyGiftCards/>} />
                    <Route path="/cards" element={<BuyBusinessCards/>} />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/businessBuy" element={<BuyGiftCrypto/>}/>

                </Routes>
            </Router>
        </>
    );  
}
export default RoutingApp;  