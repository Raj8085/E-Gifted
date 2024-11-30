import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>For Consumers</h4>
        <ul>
          <li><a href="#buy-gift-cards">Buy Gift Cards</a></li>
          <li><a href="#last-minute-gifts">Last Minute Gifts</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Payment Options</h4>
        <ul>
          <li><a href="#skrill">Buy with Skrill</a></li>
          <li><a href="#bitcoin">Buy with Bitcoin</a></li>
          <li><a href="#litecoin">Buy with Litecoin</a></li>
          <li><a href="#ethereum">Buy with Ethereum</a></li>
          <li><a href="#shiba-inu">Buy with Shiba Inu</a></li>
          <li><a href="#crypto">Other Cryptocurrencies</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>For Business</h4>
        <ul>
          <li><a href="#contact-sales">Contact Sales</a></li>
          <li><a href="#buy-in-bulk">Buy in Bulk</a></li>
          <li><a href="#api">eGift Card API</a></li>
          <li><a href="#platform">Platform</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#clients">Clients</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#press">Press</a></li>
          <li><a href="#news">In the News</a></li>
          <li><a href="#blog">eGifter Stories Blog</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#order-status">Order Status</a></li>
          <li><a href="#help-center">Help Center</a></li>
          <li><a href="#contact-support">Contact Support</a></li>
          <li><a href="#cookie-preferences">Cookie Preferences</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <h4>Got Gift? Connect with us!</h4>
          <div className="icons">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#pinterest"><i className="fab fa-pinterest"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="mobile-app">
          <h4>Gift on the go with the eGifter app!</h4>
          <div className="app-links">
            <a href="#app-store"><img src="/path-to-appstore-logo.png" alt="App Store" /></a>
            <a href="#play-store"><img src="/path-to-googleplay-logo.png" alt="Google Play" /></a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2011 - 2024 eGifter.com. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#sitemap">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
