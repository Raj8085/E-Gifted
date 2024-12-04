import "./buyForBusiness.css";

const Rewards = () => {
  return (
    <div className="rewards-container">
      <h1 className="rewards-header text-4xl font-bold">
        Which Rewards Solution Is Right For Your Business?
      </h1>
      <img src="/eGiftedImages/arrows (1).png" alt="arrow" className="mb-8 w-[700px]"/>
      {/* <div className="rewards-divider">
        <div className="divider-line"></div>
        <div className="divider-arrow"></div>
        <div className="divider-line"></div>
      </div> */}

      <div className="rewards-grid">
        {/* Left Column */}
        <div className="reward-item">
          <h2 className="text-3xl font-bold">
            A Fast And Simple Way to Send Gift Cards Today
          </h2>
          <img
            src="/eGiftedImages/rewards-express-value-prop.png" // Replace with actual image path
            alt="Rewards Express Logo"
            className="reward-logo"
          />
          <p className="text-2xl font-sans">
            <strong>Rewards Express™</strong> is the fastest and easiest way to
            send digital gift cards by email, whether you need 1 or 100. Add
            personalization to your order with a thoughtful message and your
            logo or a video greeting.
          </p>
        </div>

        {/* Right Column */}
        <div className="reward-item">
          <h2 className="text-3xl font-bold">
            A Complete Solution For Your Rewards Program
          </h2>
          <img
            src="/eGiftedImages/egifter-rewards-value-prop.png" // Replace with actual image path
            alt="eGifter Rewards Logo"
            className="reward-logo"
          />
          <p className="text-2xl font-sans">
            <strong>eGifter Rewards™</strong> is the perfect solution for all
            corporate gift card programs. Reward your employees, incentivize
            customers, and more with custom branding, optional integrations,
            and tons of reporting.
          </p>
        </div>
      </div>
    </div>
  );
};



export default Rewards;
