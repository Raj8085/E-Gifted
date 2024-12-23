// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useState } from "react";

// // eslint-disable-next-line react/prop-types
// export function CardWithFormQr({ onBackToCart, price, quantity }) {
//   const [showQrCard, setShowQrCard] = useState(false);

//   const handleCheckoutClick = () => {
//     setShowQrCard(true);
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen">
//         {!showQrCard ? (
//           <Card className="w-[700px] shadow-lg rounded-lg border bg-white">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl font-bold">Please review your order</CardTitle>
//               <CardDescription className="text-gray-600">
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form>
//                 <div className="flex flex-col items-center space-y-4 w-[500px] ml-20">
//                   <div className="flex flex-col space-y-2 text-center w-3/4">
//                     <Label htmlFor="promo-code" className="text-lg font-medium text-gray-700">
//                       Enter your promo code
//                     </Label>
//                     <Input
//                       id="promo-code"
//                       placeholder="Enter your promo code"
//                       className="border border-gray-300 rounded-lg p-2 w-full"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </CardContent>
//             <CardFooter className="flex justify-between px-4 py-2">
//               <Button variant="outline" className="px-4 py-2">
//                 APPLY PROMO CODE
//               </Button>
//               <Button onClick={onBackToCart}>Back to cart</Button>
//               <Button className="px-4 py-2" onClick={handleCheckoutClick}>
//                 PROCEED TO CHECKOUT
//               </Button>
//             </CardFooter>
//           </Card>
//         ) : (
//           <Card className="w-[500px] shadow-lg rounded-lg border bg-white">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl font-bold">Scan to Proceed with Payment</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Use your phone&apos;s camera or a QR code scanner to complete the payment.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="flex justify-center items-center py-4">
//               <img
//                 src="/eGiftedImages/Qrcode.png"
//                 alt="QR Code for Payment"
//                 className="w-48 h-48"
//               />
//             </CardContent>
//             <CardFooter className="flex justify-center px-4 py-2">
//               <Button
//                 variant="outline"
//                 className="px-4 py-2"
//                 onClick={() => setShowQrCard(false)}
//               >
//                 BACK TO ORDER
//               </Button>
//             </CardFooter>
//           </Card>
//         )}
//       </div>
//     </>
//   );
// }








import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./card.css";

// eslint-disable-next-line react/prop-types
export function CardWithFormQr({ onBackToCart, price, quantity,name,brand }) {
  const [showQrCard, setShowQrCard] = useState(false);

  const [counter, setCounter] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect to the home page when the timer reaches 0 
      navigate("/");
    }
  }, [counter, navigate]);

  console.log(name,"name is ")

  const handleCheckoutClick = () => {
    setShowQrCard(true);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen qr-code">
        {!showQrCard ? (
          <Card className="w-[700px] shadow-lg rounded-lg border bg-white qr-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Please review your order</CardTitle>
              <CardDescription className="text-gray-600">
  Your order details:
  
</CardDescription>
          </CardHeader><CardContent>
              <div className="flex flex-col items-center space-y-4 w-[500px] ml-20 qr-card-details">
                <div className="flex flex-col space-y-2 text-center w-3/4">
                  <Label htmlFor="brand" className="text-lg font-medium text-gray-700">
                    eGift Name:
                  </Label>
                  <span className="text-xl font-bold">{brand}</span>
                </div>
                <div className="flex flex-col space-y-2 text-center w-3/4">
                  <Label htmlFor="price" className="text-lg font-medium text-gray-700">
                    Price:
                  </Label>
                  <span className="text-xl font-bold">£{price.toFixed(2)}</span>
                </div>
                <div className="flex flex-col space-y-2 text-center w-3/4">
                  <Label htmlFor="quantity" className="text-lg font-medium text-gray-700">
                    Quantity:
                  </Label>
                  <span className="text-xl font-bold">{quantity}</span>
                  <span className="text-xl font-bold">{name}</span>

                </div>
                <div className="flex flex-col space-y-2 text-center w-3/4">
                  <Label htmlFor="total" className="text-lg font-medium text-gray-700">
                    Total:
                  </Label>
                  <span className="text-xl font-bold">£{(price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex flex-col items-center space-y-4 w-[500px]">
                  <Label htmlFor="promo-code" className="text-lg font-medium text-gray-700">
                    Enter your promo code
                  </Label>
                  <Input
                    id="promo-code"
                    placeholder="Enter your promo code"
                    className="border border-gray-300 rounded-lg p-2 w-full qr-input" />
                </div>
              </div>
            </CardContent><CardFooter className="flex justify-between px-4 py-2 qr-button">
              <Button variant="outline" className="px-4 py-2">
                APPLY PROMO CODE
              </Button>
              <Button onClick={onBackToCart}>Back to cart</Button>
              <Button className="px-4 py-2" onClick={handleCheckoutClick}>
                PROCEED TO CHECKOUT
              </Button>
            </CardFooter>
          </Card>
        

        ) : (
          <Card className="w-[500px] shadow-lg rounded-lg border bg-white scan-pay">
            <CardHeader className="text-center">
            <span className="countdown font-mono text-6xl count-down">
              <span style={{ "--value": counter }}>{counter}</span>
              </span>
              <CardTitle className="text-2xl font-bold">Scan to Proceed with Payment</CardTitle>
              <CardDescription className="text-gray-600 pay-description">
                Use your phone&apos;s camera or a QR code scanner to complete the payment.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-4">
              <img
                src="/eGiftedImages/scanner-e-gifter2.jpg"
                alt="QR Code for Payment"
                className="w-48 h-48"
              />
            </CardContent>
            <CardFooter className="flex justify-center px-4 py-2">
              <Button
                variant="outline"
                className="px-4 py-2"
                onClick={() => setShowQrCard(false)}
              >
                BACK TO ORDER
              </Button>
              
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
}






















// export default function GiftCardApp() {
//     const [view, setView] = useState("cart");
//     const [price, setPrice] = useState(5);
//     const [quantity, setQuantity] = useState(1);
  
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {view === "cart" ? (
//           <div> {/* Cart Component */} </div>
//         ) : (
//           <CardWithFormQr 
//             onBackToCart={() => setView("cart")} 
//             price={price} 
//             quantity={quantity} 
//             setQuantity={setQuantity} 
//           />
//         )}
//       </div>
//     );
//   }
  