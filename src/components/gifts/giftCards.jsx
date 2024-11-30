import "../../../src/App.css";

const GiftCards = () => {

  const giftCardData = [
    { text: 'Gift Card 1', brand: 'Nike', website: 'nike.com' },
    { text: 'Gift Card 2', brand: 'Adidas', website: 'adidas.com' },
    { text: 'Gift Card 3', brand: 'Apple', website: 'apple.com' },
    { text: 'Gift Card 4', brand: 'Amazon', website: 'amazon.com' },
    { text: 'Gift Card 5', brand: 'Google', website: 'google.com' },
    { text: 'Gift Card 6', brand: 'Microsoft', website: 'microsoft.com' },
    { text: 'Gift Card 7', brand: 'Sony', website: 'sony.com' },
    {brand: 'Samsung', website: 'samsung.com',image:'public/19vBsz-gift-png-picture.png' },
    { text: 'Gift Card 9', brand: 'Starbucks', website: 'starbucks.com' },
    { text: 'Gift Card 10', brand: 'Walmart', website: 'walmart.com' },
    { text: 'Gift Card 11', brand: 'Best Buy', website: 'bestbuy.com' },
    { text: 'Gift Card 12', brand: 'Target', website: 'target.com' }
  ]

  // const giftCards = Array(12).fill(null); // Create an array of 12 cards

  return (
    <div className="gift-card-grid">
      {giftCardData.map((card, index) => (
        <div key={index} className="gift-card-container">
          <div className="gift-card">
            <div className="text">{card.text}</div>
            {index === 7 ? ( // 8th card (index 7) will display image
              <img src={card.image} alt="Gift Card" className="gift-card-image" />
            ) : (
              <>
                <div className="website">{card.website}</div>
              </>
            )}
        </div>
        <div className="divider"></div>
        <div className="brand">{card.brand}</div>

        </div>
      ))}

    </div>
  );
};
export default GiftCards;