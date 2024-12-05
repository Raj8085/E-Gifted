// import "../../../src/App.css";

// const GiftCards = () => {

//   const giftCardData = [
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com',image:"public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com',image:"public/eGiftedImages/currency_fp01.png" },
//     // { text: 'Gift Card 3', brand: 'Apple', website: 'apple.com' },
//     // { text: 'Gift Card 4', brand: 'Amazon', website: 'amazon.com' },
//     // { text: 'Gift Card 5', brand: 'Google', website: 'google.com' },
//     // { text: 'Gift Card 6', brand: 'Microsoft', website: 'microsoft.com' },
//     // { text: 'Gift Card 7', brand: 'Sony', website: 'sony.com' },
//     // {brand: 'Samsung', website: 'samsung.com',image:'public/19vBsz-gift-png-picture.png' },
//     // { text: 'Gift Card 9', brand: 'Starbucks', website: 'starbucks.com' },
//     // { text: 'Gift Card 10', brand: 'Walmart', website: 'walmart.com' },
//     // { text: 'Gift Card 11', brand: 'Best Buy', website: 'bestbuy.com' },
//     // { text: 'Gift Card 12', brand: 'Target', website: 'target.com' }
//   ]

//   // const giftCards = Array(12).fill(null); // Create an array of 12 cards

//   return (
//     <div className="gift-grid">
//       {giftCardData.map((card, index) => (
//         <div key={index} className="gift-container">
//           <div className="gift">
//             <div className="text">{card.text}</div>
//             {index === 1 || index === 0 ? ( // 8th card (index 7) will display image
//               <img src={card.image} alt="Gift Card" className="gift-image" />
//             ) : (
//               <>
//                 <div className="website">{card.website}</div>
//               </>
//             )}
//         </div>
//         <div className="divider"></div>
//         <div className="brand">{card.brand}</div>
      
//         </div>
//       ))}

//     </div>
//   );
// };
// export default GiftCards;



// import "../../../src/App.css";

// const GiftCards = () => {
//   const giftCardData = [
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" }, { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" }, 
    
   
//   ];

//   return (
//     <div className="gift-grid gap-2 ml-24">
//       {giftCardData.map((card, index) => (
//         <div key={index} className="gift-container">
//           <div className="gift">
//             {/* <div className="text text-sky-400 text-lg">{card.text}</div> */}
//             <img src={card.image} alt="Gift Card" className="gift-image mt-10" />
//           </div>
//           <div className="divider"></div>
//           <div className="brand">{card.brand}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GiftCards; 




import { useState } from "react";
import "../../../src/App.css";
import GiftCardApp from "../../components/PaymentPage/buyGift"; // Make sure to import the GiftCardApp component
import {  useNavigate } from "react-router-dom";
// import BuyCryptoCards from "../BuyForCrypto/buyForCrypto";
const GiftCards = ({showInput = true}) => {
  const giftCardData = [
    { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
    { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
    { text: 'Gift Card 3', brand: 'Ernest jones', website: 'adidas.com', image: "public/cardsImage/1073526_fp01.png" },
    { text: 'Gift Card 4', brand: 'Primark', website: 'adidas.com', image: "public/cardsImage/1073557_fp01.png" },
    { text: 'Gift Card 5', brand: 'Virgin', website: 'nike.com', image: "public/cardsImage/1073575_fp01.png" },
    { text: 'Gift Card 6', brand: 'M&S', website: 'adidas.com', image: "public/cardsImage/1073585_fp01.png" },
    { text: 'Gift Card 7', brand: 'Ikea', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
    { text: 'Gift Card 8', brand: 'E-Voucher', website: 'adidas.com', image: "public/cardsImage/1073601_fp01.png" },
    { text: 'Gift Card 9', brand: 'Boots', website: 'nike.com', image: "public/cardsImage/1073651_fp01.png" },
    { text: 'Gift Card 10', brand: 'WHSmith', website: 'adidas.com', image: "public/cardsImage/1073683_fp01.png" },
    { text: 'Gift Card 11', brand: 'Stone', website: 'adidas.com', image: "public/cardsImage/1073689_fp01.png" },
    { text: 'Gift Card 12', brand: 'Habitats', website: 'adidas.com', image: "public/cardsImage/1081483_fp01.png" },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    const card = giftCardData[index];
    console.log(card)
    setSelectedCard(card);  // Ensure `setSelectedCard` gets the correct card data
    // navigate('/paymentRedirect');
    // navigate('/paymentRedirect', { state: { selectedCard: card } });
    navigate("/cards")
  };

  return (
    <>
    {/* <div className="flex justify-between">
    <h1 className="ml-40 text-4xl ">All Cards</h1>
    <input placeholder="Search" className="border-2 border-gray-400 mr-24 rounded-full "/>
    </div> */}
    {/* {showInput && (
        <div className="flex justify-between">
          <h1 className="ml-40 text-4xl">All Cards</h1>
          <input placeholder="Search" className="border-2 border-gray-400 mr-24 rounded-full" />
        </div>
      )} */}
    <div className="gift-grid gap-2 ml-24">
      {selectedCard ? (
        <GiftCardApp selectedCard={selectedCard}/>
      ) : (
        giftCardData.map((card, index) => (
          
          <div key={index} className="gift-container cursor-pointer" onClick={() => handleCardClick(index)}>
            <div className="gift">
              <img src={card.image} alt="Gift Card" className="gift-image mt-10" />
            </div>
            <div className="divider"></div>
            <div className="brand">{card.brand}</div>
          </div>
         
        ))
      )}
    </div>
    </>
  );
};
export default GiftCards;





// const GiftCards = () => {
//   const giftCardData = [
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "/eGiftedImages/cardCurrency.png", alt: "" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" }, 
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "public/eGiftedImages/cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "public/eGiftedImages/currency_fp01.png" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//       {giftCardData.map((card, index) => (
//         <div key={index} className="bg-black rounded-lg shadow-lg">
//           <div className="relative">
//             <img
//               src={card.image}
//               alt="Gift Card"
//               className="w-30 h-20 object-cover bg-white"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2">
//               <div className="text-lg font-semibold">{card.text}</div>
//             </div>
//           </div>
//           <div className="px-4 py-2">
//             <div className="text-sm text-gray-500">{card.brand}</div>
//             <div className="text-xs text-gray-400">{card.website}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GiftCards;


// const GiftCards = () => {
//   const giftCardData = [
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com', image: "cardCurrency.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" },
//     { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com', image: "currency_fp01.png" }, 
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//       {giftCardData.map((card, index) => (
//         <div key={index} className="bg-white rounded-lg shadow-lg ">
//           <div className="relative gap-16">
//             {/* Image section */}
//             <img
//               src={`/eGiftedImages/${card.image}`}
//               alt="Gift Card"
//               className="w-full h-30 object-cover"  // Makes sure the image fills the space and maintains its aspect ratio
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2">
//               <div className="text-lg font-semibold">{card.text}</div>
//             </div>
//           </div>
//           <div className="px-4 py-2">
//             <div className="text-sm text-gray-500">{card.brand}</div>
//             <div className="text-xs text-gray-400">{card.website}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GiftCards;
