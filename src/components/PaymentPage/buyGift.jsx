// import "./buyGift.css";

// const GiftCardPayment = () => {
//   return (
//     <div className="gift-card-container">
//       {/* Header Section */}
//       <div className="header">
//         <div className="card-image">
//           <img src="/eGiftedImages\cardCurrency.png" alt="Adidas Gift Card" />
//         </div>
//         <h1>Adidas eGift Card</h1>
//       </div>

//       {/* Features Section */}
//       <div className="features">
//         <div className="feature">
//           <span className="icon">🛒</span>
//           <p>Use Online</p>
//         </div>
//         <div className="feature">
//           <span className="icon">🏬</span>
//           <p>Use In-Store</p>
//         </div>
//         <div className="feature">
//           <span className="icon">⚡</span>
//           <p>Instant Delivery</p>
//         </div>
//         <div className="feature">
//           <span className="icon">🔒</span>
//           <p>Secure Payment</p>
//         </div>
//       </div>

//       {/* Reviews and Payment Section */}
//       <div className="reviews-and-payment">
//         <div className="reviews">
//           <p>
//             <strong>Great</strong>{" "}
//             <span className="rating">⭐⭐⭐⭐☆</span>
//             <span> 7,262 reviews on Trustpilot</span>
//           </p>
//         </div>
//         <div className="payment-options">
//           <p>You can pay for Adidas eGift Cards with:</p>
//           <img src="/eGiftedImages\cardCurrency.png" alt="Skrill" />
//           <img src="/eGiftedImages\cardCurrency.png" alt="Crypto" />
//         </div>
//         <p className="note">
//           📍 Geographic restrictions apply. Review the Terms for details.
//         </p>
//       </div>

//       {/* Pricing Section */}
//       <div className="pricing">
//         <div className="price-adjuster">
//           <button>-</button>
//           <span>£25.00</span>
//           <button>+</button>
//         </div>
//         <p className="price-range">(£1 to £400)</p>
//         <div className="price-options">
//           <button>£5</button>
//           <button className="active">£25</button>
//           <button>£50</button>
//           <button>£100</button>
//           <button>£250</button>
//         </div>
//         <button className="send-to-friend">Send to a Friend</button>
//         <button className="add-to-cart">Add to Cart</button>
//       </div>

//       {/* Tabs Section */}
//       <div className="tabs">
//         <div className="tab active">Description</div>
//         <div className="tab">Terms</div>
//         <div className="tab">Why to buy</div>
//         <div className="tab">How to buy</div>
//       </div>
//       <div className="tab-content">
//         <p>
//           Adidas is the brand with the Three Stripes, the icon. From the stadium
//           to the streets. From the courts to the catwalk.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GiftCardPayment;




// import {
//     ResizableHandle,
//     ResizablePanel,
//     ResizablePanelGroup,
//   } from "@/components/ui/resizable"
// import { Button } from "../ui/button"
  
//   const GiftCardPayment = () => {
//     return (
//       <ResizablePanelGroup
//         direction="horizontal"
//         className="max-w-md rounded-lg border md:min-w-[450px] ml-80 mt-96 height-[200px]"
//       >
//         <ResizablePanel defaultSize={50}>
//           <div className="flex h-[200px] items-center justify-center p-6">
//           <div className="pricing">
//          <div className="price-adjuster">
//            <Button>-</Button>
//            <span>£25.00</span>
//            <Button>+</Button>
//          </div>
//          <p className="price-range">(£1 to £400)</p>
//          <div className="price-options">
//            <Button>£5</Button>
//            <Button className="active">£25</Button>
//            <Button>£50</Button>
//            <Button>£100</Button>
//            <Button>£250</Button>
//          </div>
//          <Button className="send-to-friend">Send to a Friend</Button>
//          <Button>Add to Cart</Button>
//        </div>
//           </div>
//         </ResizablePanel>
//         <ResizableHandle />
//         <ResizablePanel defaultSize={50}>
//           <ResizablePanelGroup direction="vertical">
//             <ResizablePanel defaultSize={25}>
//               <div className="flex h-full items-center justify-center p-6">
//                 <span className="font-semibold">Two</span>
//               </div>
//             </ResizablePanel>
//             <ResizableHandle />
//             <ResizablePanel defaultSize={75}>
//               <div className="flex h-full items-center justify-center p-6">
//                 <span className="font-semibold">Three</span>
//               </div>
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         </ResizablePanel>
//       </ResizablePanelGroup>
//     )
//   }
  
//   export default GiftCardPayment




// import {
//     ResizableHandle,
//     ResizablePanel,
//     ResizablePanelGroup,
//   } from "@/components/ui/resizable";
//   import { Button } from "../ui/button";
// import { useState } from "react";
// //   import "./buyGift.css";
  
//   const GiftCardPayment = () => {
//     return (
//       <ResizablePanelGroup
//         direction="horizontal"
//         className="max-w-6xl  rounded-lg border shadow-lg mx-auto mt-52 "
//       >
//         {/* Left Panel */}
//         <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
//           <div className="flex flex-col h-full items-center justify-center p-8 bg-gray-50 rounded-lg">
//             <div className="pricing space-y-6 w-full max-w-sm">

//                 <img src="/eGiftedImages\cardCurrency.png" alt="imag" className="mx-auto h-40" />
//               {/* Price Adjuster */}
//               <div className="price-adjuster flex items-center justify-between space-x-4">
//                 <Button>-</Button>
//                 <span className="text-2xl font-bold">£5.00</span>
//                 <Button>+</Button>
//               </div>
//               <p className="text-center text-sm text-gray-500">(£1 to £400)</p>
  
//               {/* Quick Price Options */}
//               <div className="price-options grid grid-cols-3 gap-4">
//                 <Button className="active bg-blue-500 text-white">£5</Button>
//                 <Button>£25</Button>
//                 <Button>£50</Button>
//                 <Button>£100</Button>
//                 <Button>£250</Button>
//                 <Button>£300</Button>

//               </div>
  
//               {/* Action Buttons */}
//               <div className="space-y-4">
//                 <Button className="w-full bg-gray-100 border border-gray-300 text-gray-700">
//                   Send to a Friend
//                 </Button>
//                 <Button className="w-full bg-blue-500 text-white">Add to Cart</Button>
//               </div>
//             </div>
//           </div>
//         </ResizablePanel>
        
//         {/* Resizable Handle */}
//         {/* <ResizableHandle /> */}
        
//         {/* Right Panel */}
//         <ResizablePanel defaultSize={50} minSize={30}>
//           <ResizablePanelGroup direction="vertical">
//             {/* <ResizablePanel defaultSize={25}>
//               <div className="flex h-full items-center justify-center bg-gray-100 p-6">
//                 <span className="font-semibold">Two</span>
//               </div>
//             </ResizablePanel> */}
            
//             {/* Vertical Handle */}
//             <ResizableHandle />
//             <div>
//               <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center">Adidas eGift Card</h1>
//               </div>

//               <div className="flex justify-between mt-12 gap-4 ">
//       <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//         {/* <span className="text-gray-700 mr-2">💻</span> Icon */}
//         <img src="public/eGiftedImages/download (1).png" alt="" className="w-6 h-6 bg-gray-100"/>
//         <p  className="px-4 py-2">Use Online</p>
//       </div>
//       <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//       <img src="public/eGiftedImages/download (2).png" alt="" className="w-6 h-6"/>

//         <p className="px-4 py-2">Use In-Store</p>
//       </div>
//       <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//         <img src="public/eGiftedImages/download.png" alt="" className="w-6 h-6"/>
//         <p  className="px-4 py-2">Instant Delivery</p>
//       </div>
//       <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//         <img src="public/eGiftedImages/download (3).png" alt="" className="w-6 h-6 "/>
//         <p  className="px-4 py-2">Secure Payment</p>
//       </div>
//     </div>
            
//             {/* Bottom Right Panel */}
//             <ResizablePanel defaultSize={75}>
              
//               <div className="flex h-full items-center justify-centep-6">
//                 {/* <span className="font-semibold">Three</span> */}
//                 <div className="reviews-and-payment mt-16">
//          <div className="reviews ml-7">
//            <p className="text-2xl">
//              <strong>Great</strong>{" "}
//              <span className="rating">⭐⭐⭐⭐☆</span>
//              <span> 7,262 reviews on Trustpilot</span>
//            </p>
//          </div>
//          <div className="payment-options">
//            <p className="text-xl font-normal ml-20 mt-5">You can pay for Adidas eGift Cards with:</p>
//            <div className="flex w-24 items-center justify-between ml-36 mt-5">
//            <img src="public/eGiftedImages/skrill-text-logo.png" alt="skrill"/>
//            <img src="public/eGiftedImages/crypto-icon.png" alt="crypto"/>
//            </div>
//          </div>
//          <p className="text-xl mt-5">
//            📍 Geographic restrictions apply. Review the Terms for details.
//          </p>
//          {/* <TabLayout/> */}

//        </div>
//               </div>
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         </ResizablePanel>
//       </ResizablePanelGroup>
//     );
//   };
//   export default GiftCardPayment;



// import  { useState } from "react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { CardWithFormQr } from "../Cards/qrPayment";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";

// export default function GiftCardApp() {
//   const [view, setView] = useState("cart"); // State to manage views: "cart" or "qr"

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {view === "cart" && (
//         <ResizablePanelGroup
//           direction="horizontal"
//           className="max-w-6xl rounded-lg border shadow-lg mx-auto mt-20"
//         >
//           {/* Left Panel */}
//           <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
//             <div className="flex flex-col h-full items-center justify-center p-8 bg-gray-50 rounded-lg">
//               <div className="pricing space-y-6 w-full max-w-sm">
//                 <img
//                   src="/eGiftedImages/cardCurrency.png"
//                   alt="Card Currency"
//                   className="mx-auto h-40"
//                 />
//                 {/* Price Adjuster */}
//                 <div className="price-adjuster flex items-center justify-between space-x-4">
//                   <Button>-</Button>
//                   <span className="text-2xl font-bold">£5.00</span>
//                   <Button>+</Button>
//                 </div>
//                 <p className="text-center text-sm text-gray-500">(£1 to £400)</p>

//                 {/* Quick Price Options */}
//                 <div className="price-options grid grid-cols-3 gap-4">
//                   <Button className="active bg-blue-500 text-white">£5</Button>
//                   <Button>£25</Button>
//                   <Button>£50</Button>
//                   <Button>£100</Button>
//                   <Button>£250</Button>
//                   <Button>£300</Button>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-4">
//                   <Button className="w-full bg-gray-100 border border-gray-300 text-gray-700">
//                     Send to a Friend
//                   </Button>
//                   <Button
//                     className="w-full bg-blue-500 text-white"
//                     onClick={() => setView("qr")}
//                   >
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </ResizablePanel>

//           {/* Right Panel */}
//           <ResizablePanel defaultSize={50} minSize={30}>
//             <ResizablePanelGroup direction="vertical">
//               <ResizableHandle />
//               <div>
//                 <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center">
//                   Adidas eGift Card
//                 </h1>
//               </div>

//               <div className="flex justify-between mt-12 gap-4">
//                 <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//                   <img
//                     src="public/eGiftedImages/download (1).png"
//                     alt=""
//                     className="w-6 h-6 bg-gray-100"
//                   />
//                   <p className="px-4 py-2">Use Online</p>
//                 </div>
//                 <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//                   <img
//                     src="public/eGiftedImages/download (2).png"
//                     alt=""
//                     className="w-6 h-6"
//                   />
//                   <p className="px-4 py-2">Use In-Store</p>
//                 </div>
//                 <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//                   <img
//                     src="public/eGiftedImages/download.png"
//                     alt=""
//                     className="w-6 h-6"
//                   />
//                   <p className="px-4 py-2">Instant Delivery</p>
//                 </div>
//                 <div className="flex items-center border border-gray-300 rounded-2xl bg-gray-100">
//                   <img
//                     src="public/eGiftedImages/download (3).png"
//                     alt=""
//                     className="w-6 h-6"
//                   />
//                   <p className="px-4 py-2">Secure Payment</p>
//                 </div>
//               </div>

//               <ResizablePanel defaultSize={75}>
//                 <div className="flex h-full items-center justify-centep-6">
//                   <div className="reviews-and-payment mt-16">
//                     <div className="reviews ml-7">
//                       <p className="text-2xl">
//                         <strong>Great</strong>{" "}
//                         <span className="rating">⭐⭐⭐⭐☆</span>
//                         <span> 7,262 reviews on Trustpilot</span>
//                       </p>
//                     </div>
//                     <div className="payment-options">
//                       <p className="text-xl font-normal ml-20 mt-5">
//                         You can pay for Adidas eGift Cards with:
//                       </p>
//                       <div className="flex w-24 items-center justify-between ml-36 mt-5">
//                         <img
//                           src="public/eGiftedImages/skrill-text-logo.png"
//                           alt="skrill"
//                         />
//                         <img
//                           src="public/eGiftedImages/crypto-icon.png"
//                           alt="crypto"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-xl mt-5">
//                       📍 Geographic restrictions apply. Review the Terms for
//                       details.
//                     </p>
//                   </div>
//                 </div>
//               </ResizablePanel>
//             </ResizablePanelGroup>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       )}

//       {view === "qr" && (
//         <CardWithFormQr onBackToCart={() => setView("cart")} />

//         // <><CardWithFormQr/>  
        
//         // </>
//       )}
//     </div>
//   );
// }





// import { useState } from "react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Button } from "@/components/ui/button";
// import { CardWithFormQr } from "../Cards/qrPayment";

// export default function GiftCardApp() {
//   const [view, setView] = useState("cart"); // State to manage views: "cart" or "qr"
//   const [price, setPrice] = useState(5); // State for selected price
  

//   const handlePriceIncrease = () => {
//     if (price < 400) setPrice(price + 1);
//   };

//   const handlePriceDecrease = () => {
//     if (price > 1) setPrice(price - 1);
//   };

//   const handleQuickPriceSelect = (selectedPrice) => {
//     setPrice(selectedPrice);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {view === "cart" && (
//         <ResizablePanelGroup
//           direction="horizontal"
//           className="max-w-6xl rounded-lg border shadow-lg mx-auto mt-20"
//         >
//           {/* Left Panel */}
//           <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
//             <div className="flex flex-col h-full items-center justify-center p-8 bg-gray-50 rounded-lg">
//               <div className="pricing space-y-6 w-full max-w-sm">
//                 <img
//                   src="/eGiftedImages/cardCurrency.png"
//                   alt="Card Currency"
//                   className="mx-auto h-40"
//                 />

//                 {/* Price Adjuster */}
//                 <div className="price-adjuster flex items-center justify-between space-x-4">
//                   <Button onClick={handlePriceDecrease}>-</Button>
//                   <span className="text-2xl font-bold">£{price.toFixed(2)}</span>
//                   <Button onClick={handlePriceIncrease}>+</Button>
//                 </div>
//                 <p className="text-center text-sm text-gray-500">(£1 to £400)</p>

//                 {/* Quick Price Options */}
//                 <div className="price-options grid grid-cols-3 gap-4">
//                   {[5, 25, 50, 100, 250, 300].map((option) => (
//                     <Button
//                       key={option}
//                       onClick={() => handleQuickPriceSelect(option)}
//                       className={
//                         price === option
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-200 text-black"
//                       }
//                     >
//                       £{option}
//                     </Button>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-4">
//                   <Button className="w-full bg-gray-100 border border-gray-300 text-gray-700">
//                     Send to a Friend
//                   </Button>
//                   <Button
//                     className="w-full bg-blue-500 text-white"
//                     onClick={() => setView("qr")}
//                   >
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </ResizablePanel>

//           {/* Right Panel */}
//           <ResizablePanel defaultSize={50} minSize={30}>
//             <ResizablePanelGroup direction="vertical">
//               <ResizableHandle />
//               <div>
//                 <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center">
//                   Adidas eGift Card
//                 </h1>
//               </div>

//               <div className="flex justify-between mt-12 gap-4">
//                 {[
//                   { src: "download (1).png", text: "Use Online" },
//                   { src: "download (2).png", text: "Use In-Store" },
//                   { src: "download.png", text: "Instant Delivery" },
//                   { src: "download (3).png", text: "Secure Payment" },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center border border-gray-300 rounded-2xl bg-gray-100"
//                   >
//                     <img
//                       src={`public/eGiftedImages/${item.src}`}
//                       alt=""
//                       className="w-6 h-6"
//                     />
//                     <p className="px-4 py-2">{item.text}</p>
//                   </div>
//                 ))}
//               </div>

//               <ResizablePanel defaultSize={75}>
//                 <div className="flex h-full items-center justify-centep-6">
//                   <div className="reviews-and-payment mt-16">
//                     <div className="reviews ml-7">
//                       <p className="text-2xl">
//                         <strong>Great</strong>{" "}
//                         <span className="rating">⭐⭐⭐⭐☆</span>
//                         <span> 7,262 reviews on Trustpilot</span>
//                       </p>
//                     </div>
//                     <div className="payment-options">
//                       <p className="text-xl font-normal ml-20 mt-5">
//                         You can pay for Adidas eGift Cards with:
//                       </p>
//                       <div className="flex w-24 items-center justify-between ml-36 mt-5">
//                         <img
//                           src="public/eGiftedImages/skrill-text-logo.png"
//                           alt="skrill"
//                         />
//                         <img
//                           src="public/eGiftedImages/crypto-icon.png"
//                           alt="crypto"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-xl mt-5">
//                       📍 Geographic restrictions apply. Review the Terms for
//                       details.
//                     </p>
//                   </div>
//                 </div>
//               </ResizablePanel>
//             </ResizablePanelGroup>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       )}

//       {view === "qr" && <CardWithFormQr onBackToCart={() => setView("cart")} />}
//     </div>
//   );
// }



// This is my present code



// import { useState } from "react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Button } from "@/components/ui/button";
// import { CardWithFormQr } from "../Cards/qrPayment";

// // eslint-disable-next-line react/prop-types
// export default function GiftCardApp({ selectedCard }) {
//   console.log(selectedCard,"gifted card app")
//   const [view, setView] = useState("cart"); // State to manage views: "cart" or "qr"
//   const [price, setPrice] = useState(5); // State for selected price
//   const [quantity, setQuantity] = useState(1); // State for quantity
//   const [cart, setCart] = useState([]);

//   // if (!selectedCard) {
//   //   return <div>Loading...</div>; // Or any fallback UI
//   // }

//   const handlePriceIncrease = () => {
//     if (price < 400) setPrice(price + 1);
    
//   };

//   const handlePriceDecrease = () => {
//     if (price > 1) setPrice(price - 1);

//   };

//   const handleQuantityIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleQuantityDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleQuickPriceSelect = (selectedPrice) => {
//     setPrice(selectedPrice);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen ml-60 w-[900px]">
//       {view === "cart" && (
//         <ResizablePanelGroup
//           direction="horizontal"
//           className="max-w-6xl rounded-lg border shadow-lg mx-auto mt-20"
//         >
//           {/* Left Panel */}
//           <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
//             <div className="flex flex-col h-full items-center justify-center p-8 bg-gray-50 rounded-lg">
//               <div className="pricing space-y-6 w-full max-w-sm">
//                 <img
//                   // eslint-disable-next-line react/prop-types
//                   src={selectedCard.image}
//                   alt="Card Currency"
//                   className="mx-auto h-40"
//                 />

//                 {/* Price Adjuster */}
//                 <div className="price-adjuster flex items-center justify-between space-x-4">
//                   <Button onClick={handlePriceDecrease}>-</Button>
//                   <span className="text-2xl font-bold">£{price.toFixed(2)}</span>
//                   <Button onClick={handlePriceIncrease}>+</Button>
//                 </div>
//                 <p className="text-center text-sm text-gray-500">(£1 to £400)</p>

//                 {/* Quick Price Options */}
//                 <div className="price-options grid grid-cols-3 gap-4">
//                   {[5, 25, 50, 100, 250, 300].map((option) => (
//                     <Button
//                       key={option}
//                       onClick={() => handleQuickPriceSelect(option)}
//                       className={
//                         price === option
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-200 text-black"
//                       }
//                     >
//                       £{option}
//                     </Button>
//                   ))}
//                 </div>

//                 {/* Quantity Adjuster */}
//                 <div className="quantity-adjuster flex items-center justify-between mt-4 space-x-4">
//                   <Button onClick={handleQuantityDecrease}>-</Button>
//                   <span className="text-2xl font-bold">{quantity}</span>
//                   <Button onClick={handleQuantityIncrease}>+</Button>
//                 </div>
//                 <p className="text-center text-sm text-gray-500">
//                   (Minimum: 1)
//                 </p>

//                 {/* Total Price */}
//                 <div className="total-price text-center mt-4">
//                   <p className="text-lg font-bold">
//                     Total: £{(price * quantity).toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-4">
//                   <Button className="w-full bg-gray-100 border border-gray-300 text-gray-700">
//                     Send to a Friend
//                   </Button>
//                   <Button
//                     className="w-full bg-blue-500 text-white"
//                     onClick={() => setView("qr")}
//                   >
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </ResizablePanel>

//           {/* Right Panel */}
//           <ResizablePanel defaultSize={50} minSize={30}>
//             <ResizablePanelGroup direction="vertical">
//               <ResizableHandle />
//               <div>
//                 <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center">
//                 {selectedCard.brand} eGift Card
//                 </h1>
//               </div>

//               <div className="flex justify-between mt-12 gap-4 text-sm">
//                 {[
//                   { src: "download (1).png", text: "Use Online" },
//                   { src: "download (2).png", text: "Use In-Store" },
//                   { src: "download.png", text: "Instant Delivery" },
//                   { src: "download (3).png", text: "Secure Payment" },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center border border-gray-300 rounded-2xl bg-gray-100"
//                   >
//                     <img
//                       src={`public/eGiftedImages/${item.src}`}
//                       alt=""
//                       className="w-6 h-6"
//                     />
//                     <p className="px-4 py-2">{item.text}</p>
//                   </div>
//                 ))}
//               </div>

//               <ResizablePanel defaultSize={75}>
//                 <div className="flex h-full items-center justify-centep-6">
//                   <div className="reviews-and-payment ">
//                     <div className="reviews ml-7">
//                       <p className="text-2xl">
//                         <strong>Great</strong>{" "}
//                         <span className="rating">⭐⭐⭐⭐☆</span>
//                         <span> 7,262 reviews on Trustpilot</span>
//                       </p>
//                     </div>
//                     <div className="payment-options">
//                       <p className="text-xl font-bold flex items-center justify-center mt-5 ">
//                         You can pay for Adidas eGift Cards with:
//                       </p>
//                       <div className="flex w-24 items-center justify-between ml-36 mt-5">
//                         <img
//                           src="public/eGiftedImages/skrill-text-logo.png"
//                           alt="skrill"
//                         />
//                         <img
//                           src="public/eGiftedImages/crypto-icon.png"
//                           alt="crypto"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-xl font-semibold mt-5">
//                       📍 Geographic restrictions apply. Review the Terms for
//                       details.
//                     </p>
//                   </div>
//                 </div>
//               </ResizablePanel>
//             </ResizablePanelGroup>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       )}

//       {view === "qr" && (
//         <CardWithFormQr
//           onBackToCart={() => setView("cart")}
//           price={price}
//           quantity={quantity}
//           name={name}
//           brand={selectedCard.brand}
//         />
//       )}
//     </div>
//   );
// }




import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { CardWithFormQr } from "../Cards/qrPayment";
import Navbar from "../navbar/navbar";
import "./buyGift.css";

// eslint-disable-next-line react/prop-types
export default function GiftCardApp({ selectedCard }) {
  const [view, setView] = useState("cart"); // State to manage views: "cart" or "qr"
  const [price, setPrice] = useState(5); // State for selected price
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [cart, setCart] = useState([]); // State for the cart items

  const handlePriceIncrease = () => {
    if (price < 400) setPrice(price + 1);
  };

  const handlePriceDecrease = () => {
    if (price > 1) setPrice(price - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuickPriceSelect = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  // Function to add item to the cart
  const handleAddToCart = () => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: selectedCard.name,
        brand: selectedCard.brand,
        price: price,
        quantity: quantity,
      },
    ]);
    setView("qr"); // Switch to the QR view after adding to cart
  };

  return (
    <div className="flex items-center justify-center min-h-screen ml-60 w-[900px]">
      {view === "cart" && (
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-6xl rounded-lg border shadow-lg mx-auto mt-20"
        >
          {/* Left Panel */}
          <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
            <div className="flex flex-col h-full items-center justify-center p-8 bg-gray-50 rounded-lg">
            <h1 className="text-2xl font-bold">{selectedCard.brand} eGift Card</h1>

              <div className="pricing space-y-6 w-full max-w-sm">
                <img
                  // eslint-disable-next-line react/prop-types
                  src={selectedCard.image}
                  alt="Card Currency"
                  className="mx-auto h-40"
                />

                {/* Price Adjuster */}
                <div className="price-adjuster flex items-center justify-between space-x-4 payment-minus">
                  <Button onClick={handlePriceDecrease}>-</Button>
                  <span className="text-2xl font-bold">£{price.toFixed(2)}</span>
                  <Button onClick={handlePriceIncrease}>+</Button>
                </div>
                <p className="text-center text-sm text-gray-500">(£1 to £400)</p>

                {/* Quick Price Options */}
                <div className="price-options grid grid-cols-3 gap-4">
                  {[ 50, 100, 250, 300].map((option) => (
                    <Button
                      key={option}
                      onClick={() => handleQuickPriceSelect(option)}
                      className={
                        price === option
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }
                    >
                      £{option}
                    </Button>
                  ))}
                </div>

                {/* Quantity Adjuster */}
                <div className="quantity-adjuster flex items-center justify-between mt-4 space-x-4 payment-plus">
                  <Button onClick={handleQuantityDecrease}>-</Button>
                  <span className="text-2xl font-bold">{quantity}</span>
                  <Button onClick={handleQuantityIncrease} className="">+</Button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  (Minimum: 1)
                </p>

                {/* Total Price */}
                <div className="total-price text-center mt-4">
                  <p className="text-lg font-bold">
                    Total: £{(price * quantity).toFixed(2)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button className="w-full bg-gray-100 border border-gray-300 text-gray-700">
                    Send to a Friend
                  </Button>
                  <Button
                    className="w-full bg-blue-500 text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </ResizablePanel>

          {/* Right Panel */}
          {/* <ResizablePanel defaultSize={50} minSize={30}>
            <ResizablePanelGroup direction="vertical">
              <ResizableHandle />
              <div>
                <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center">
                  {selectedCard.brand} eGift Card
                </h1>
              </div>

              <div className="flex justify-between mt-12 gap-4 text-sm">
?
              </div>
            </ResizablePanelGroup>
          </ResizablePanel> */}

{/* 
          
               <ResizablePanel defaultSize={75}>
                 <div className="flex h-full items-center justify-centep-6">
                   <div className="reviews-and-payment ">
                     <div className="reviews ml-7">
                       <p className="text-2xl">
                         <strong>Great</strong>{" "}
                         <span className="rating">⭐⭐⭐⭐☆</span>
                         <span> 7,262 reviews on Trustpilot</span>
                       </p>
                     </div>
                     <div className="payment-options">
                       <p className="text-xl font-bold flex items-center justify-center mt-5 ">
                         You can pay for Adidas eGift Cards with:
                       </p>
                       <div className="flex w-24 items-center justify-between ml-36 mt-5">
                         <img
                           src="public/eGiftedImages/skrill-text-logo.png"
                           alt="skrill"
                         />
                         <img
                           src="public/eGiftedImages/crypto-icon.png"
                           alt="crypto"
                         />
                       </div>
                     </div>
                     <p className="text-xl font-semibold mt-5">
                       📍 Geographic restrictions apply. Review the Terms for
                       details.
                     </p>
                   </div>
                 </div>
               </ResizablePanel> */}


               <ResizablePanel defaultSize={50} minSize={30} className="payment-top">
             <ResizablePanelGroup direction="vertical">
               <ResizableHandle />
               <div>
                 <h1 className="text-3xl font-bold font-sans flex mt-4 justify-center payment-review">
                 {selectedCard.brand} eGift Card
                 </h1>
               </div>
               <div className="flex justify-between mt-12 gap-4 text-sm payment-image">
                 {[
                   { src: "download (1).png", text: "Use Online" },
                   { src: "download (2).png", text: "Use In-Store" },
                   { src: "download.png", text: "Instant Delivery" },
                   { src: "download (3).png", text: "Secure Payment" },
                 ].map((item, index) => (
                   <div
                     key={index}
                     className="flex items-center border border-gray-300 rounded-2xl bg-gray-100 payment-review"
                   >
                     <img
                       src={`public/eGiftedImages/${item.src}`}
                       alt=""
                       className="w-6 h-6"
                     />
                     <p className="px-4 py-2">{item.text}</p>
                   </div>
                 ))}
               </div>
               <ResizablePanel defaultSize={75}>
                 <div className="flex h-full items-center justify-centep-6">
                   <div className="">
                     <div className="reviews ml-7 payment-review">
                       <p className="text-2xl">
                         <strong>Great</strong>{" "}
                         <span className="rating">⭐⭐⭐⭐☆</span>
                         <span> 7,262 reviews on Trustpilot</span>
                       </p>
                     </div>
                     <div className="payment-options">
                       <p className="text-xl font-bold flex items-center justify-center mt-5 payment-review italic">
                         You can pay for Adidas eGift Cards with:
                       </p>
                       <div className="flex w-24 items-center justify-between ml-36 mt-5 payment-review h-10">
                         <img
                           src="public/eGiftedImages/skrill-text-logo.png"
                           alt="skrill"
                          className="h-[300px]"
                         />
                         <img
                           src="public/eGiftedImages/crypto-icon.png"
                           alt="crypto"
                         />
                       </div>
                     </div>
                     <p className="text-xl font-semibold mt-5 payment-review">
                       📍 Geographic restrictions apply. Review the <span className="ml-8">Terms for
                       details</span>.
                     </p>
                    </div>
                 </div>
               </ResizablePanel>
             </ResizablePanelGroup>
           </ResizablePanel>




             </ResizablePanelGroup>
      )}

      {view === "qr" && (
        <CardWithFormQr
          onBackToCart={() => setView("cart")}
          price={price}
          quantity={quantity}
          name={selectedCard.name}
          brand={selectedCard.brand}
        />
      )}

<Navbar cart={cart} />


    </div>
  );
}








  
  const TabLayout = () => {
    const [activeTab, setActiveTab] = useState("Description");
  
    const renderContent = () => {
      switch (activeTab) {
        case "Description":
          return (
            <p>
              adidas is the brand with the Three Stripes, the icon. From the stadium to
              the streets. From the courts to the catwalk.
            </p>
          );
        case "Terms":
          return <p>This card is redeemable only at participating adidas retail stores in the UK or on adidas.co.uk. For the terms, instructions of use, a list of participating stores and your current balance please check www.adidas.co.uk/giftcards. If not used, this card shall expire three years after the date of purchase. Except for in accordance with your legal rights, the card is non-returnable, non-refundable, cannot be exchanged for cash and cannot be used towards the purchase of another gift card.</p>;
        case "Why to buy":
          return <p>Why buy Adidas eGift Cards with eGifter?
Adidas eGift Cards are ideal presents for friends, family, and colleagues. It's the perfect last-minute online gift for birthdays, holidays, graduations, weddings, milestones and more. With eGifter you can effortlessly send a personalized, thoughtful gift card either by email, text or printed at home. Don't worry about loosing a gift card, all your purchases and gifts are stored in a convent wallet, ensuring it is always accessible. Discover the simplicity and satisfaction of giving a Adidas eGift Card gift card today!</p>;
        case "How to buy":
          return <p>How to buy Adidas eGift Cards with eGifter?
          Go to www.egifter.com/en-gb/giftcards/adidas-gift-card or type "Adidas eGift Card" into the gift card catalog search bar.
          Choose to buy Adidas eGift Cards for yourself or send as a gift with a personal message, photo or video. Choose an e-greeting card design and schedule the delivery date and time for email or text.
          Pay for Adidas eGift Cards.</p>;
        default:
          return null;
      }
    };
  
    return (
      <div className="tab-layout">
        <div className="tabs">
          {[
            "Description",
            "Terms",
            "Why to buy",
            "How to buy",
          ].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    );
  };
  
  export {TabLayout};