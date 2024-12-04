// import { useState } from "react";
// import "../../../src/App.css";
// import GiftCardApp from "../../components/PaymentPage/buyGift"; 
// import {  useNavigate } from "react-router-dom";
// const GiftCardsDuplicate = () => {
//   const giftCardData = [
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
//   const [selectedCard, setSelectedCard] = useState(null);
//   const navigate = useNavigate();

//   const handleCardClick = (index) => {
//     const card = giftCardData[index];
//     console.log(card)
//     setSelectedCard(card);  // Ensure `setSelectedCard` gets the correct card data
//     // navigate('/paymentRedirect');
//     // navigate('/paymentRedirect', { state: { selectedCard: card } });
//     navigate("/duplicate")
//   };

//   return (
//     <>
//     <div className="flex justify-between">
//     <h1 className="ml-40 text-4xl ">All Cards</h1>
//     <input placeholder="Search" className="border-2 border-gray-400 mr-24 rounded-full "/>
//     </div>
    
//     <div className="gift-grid gap-2 ml-24">
//       {selectedCard ? (
//         <GiftCardApp selectedCard={selectedCard}/>
//       ) : (
//         giftCardData.map((card, index) => (
          
//           <div key={index} className="gift-container cursor-pointer" onClick={() => handleCardClick(index)}>
//             <div className="gift">
//               <img src={card.image} alt="Gift Card" className="gift-image mt-10" />
//             </div>
//             <div className="divider"></div>
//             <div className="brand">{card.brand}</div>
//           </div>
         
//         ))
//       )}
//     </div>
//     </>
//   );
// };
// export default GiftCardsDuplicate;