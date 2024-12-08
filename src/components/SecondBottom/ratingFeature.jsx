import "./ratingFeature.css";

function RatingFeature() {
  return (
    <div className="App">
      {/* Featured In Section */}
      <section className="featured-in">
        <h2 className="text-3xl font-extrabold">Featured In</h2>
        <div className="logos">
          <img src="/download (3).svg" className="bg-white text-white" alt="CBS News" />
          <img src="/sideBar/download (2).jpeg" className="h-10 w-14" alt="CoinDesk" />
          <img src="/sideBar/forbes.svg" alt="Forbes" />
          <img src="/download (4).svg" alt="TechCrunch" />
          <img src="/download (5).svg" alt="Wall Street Journal"  className="h-10 w-14"/>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews">
        <h2>What Our Customers Are Saying</h2>
        <div className="trustpilot">
          <div className="rating">
            <h3>Great</h3>
            <div className="stars">⭐⭐⭐⭐</div>
            <p>Based on 7,256 reviews</p>
          </div>
          <div className="review-list">
            <div className="review">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>Good fast service good</p>
              <small>Bruce, 2 hours ago</small>
            </div>
            <div className="review">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>Good, reliable, fast, trusted</p>
              <small>haha, 18 hours ago</small>
            </div>
            <div className="review">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>Quick delivery</p>
              <small>NA, 1 day ago</small>
            </div>
          </div>
        </div>
        <button className="see-more">See More Reviews</button>
      </section>
    </div>
  );
}

export default RatingFeature;
