import "./featureComparison.css";

const FeatureComparison = () => {
  const features = [
    "300+ Digital Gift Cards",
    "eGifter Rewards Choice Cards™",
    "Visa® & American Express® Rewards Cards",
    "Send by email",
    "Send to one or multiple recipients",
    "Pay by Credit Card, ACH or Wire",
    "Reporting and Order Tracking",
    "Custom Email Templates",
    "Physical Gift Cards",
    "Manage Users, Departments & Budgets",
    "Single Sign-On Available",
    "API & Integrations Available",
  ];

  const rewardsExpressChecks = [true, true, true, true, true, true, true, false, true, false, false, false];
  const egifterRewardsChecks = [true, true, true, true, true, true, true, true, true, true, true, true];

  return (
    <div className="feature-comparison-container">
      <div className="header">
      </div>
      <table className="comparison-table">
        <thead>
          <tr>
        <th></th>
            <th>
              <img src="/eGiftedImages/rewards-express-value-prop.png" alt="Rewards Express" className="logo" />
            </th>
            <th>
              <img src="/eGiftedImages\egifter-rewards-value-prop.png" alt="eGifter Rewards" className="logo" />
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature}
              </td>
              <td>{rewardsExpressChecks[index] ? "✔️" : ""}</td>
              <td>{egifterRewardsChecks[index] ? "✔️" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FeatureComparison;