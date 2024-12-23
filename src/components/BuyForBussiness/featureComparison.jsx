// import "./featureComparison.css";

// const FeatureComparison = () => {
//   const features = [
//     "300+ Digital Gift Cards",
//     "eGifter Rewards Choice Cards™",
//     "Visa® & American Express® Rewards Cards",
//     "Send by email",
//     "Send to one or multiple recipients",
//     "Pay by Credit Card, ACH or Wire",
//     "Reporting and Order Tracking",
//     "Custom Email Templates",
//     "Physical Gift Cards",
//     "Manage Users, Departments & Budgets",
//     "Single Sign-On Available",
//     "API & Integrations Available",
//   ];

//   const rewardsExpressChecks = [true, true, true, true, true, true, true, false, true, false, false, false];
//   const egifterRewardsChecks = [true, true, true, true, true, true, true, true, true, true, true, true];

//   return (
//     <div className="feature-comparison-container">
//       <div className="header">
//       </div>
//       <table className="comparison-table">
//         <thead>
//           <tr>
//         <th></th>
//             <th>
//               <img src="/eGiftedImages/rewards-express-value-prop.png" alt="Rewards Express" className="logo" />
//             </th>
//             <th>
//               <img src="/eGiftedImages\egifter-rewards-value-prop.png" alt="eGifter Rewards" className="logo" />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {features.map((feature, index) => (
//             <tr key={index}>
//               <td>{feature}
//               </td>
//               <td>{rewardsExpressChecks[index] ? "✔️" : ""}</td>
//               <td>{egifterRewardsChecks[index] ? "✔️" : ""}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default FeatureComparison;







import React from 'react';

const FeatureComparison = () => {
  const features = [
    '300+ Digital Gift Cards',
    'eGifter Rewards Choice Cards™',
    'Visa® & American Express® Rewards Cards',
    'Send by email',
    'Send to one or multiple recipients',
    'Pay by Credit Card, ACH or Wire',
    'Reporting and Order Tracking',
    'Custom Email Templates',
    'Physical Gift Cards',
    'Manage Users, Departments & Budgets',
    'Single Sign-On Available',
    'API & Integrations Available',
  ];

  const rewardsExpressChecks = [
    true, true, true, true, true, true, true, false, true, false, false, false,
  ];
  const egifterRewardsChecks = [
    true, true, true, true, true, true, true, true, true, true, true, true,
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Optional Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Feature Comparison
        </h2>

        {/* Horizontal scroll if table is too wide on small screens */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            {/* Table Head */}
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left"></th>
                <th className="border border-gray-300 px-4 py-2">
                  <img
                    src="/eGiftedImages/rewards-express-value-prop.png"
                    alt="Rewards Express"
                    className="h-8 mx-auto"
                  />
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <img
                    src="/eGiftedImages/egifter-rewards-value-prop.png"
                    alt="eGifter Rewards"
                    className="h-8 mx-auto"
                  />
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="even:bg-white odd:bg-gray-50" // subtle zebra striping
                >
                  {/* Feature Name */}
                  <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base font-medium text-gray-700">
                    {feature}
                  </td>

                  {/* Rewards Express Check */}
                  <td className="border border-gray-300 px-4 py-2 text-center text-sm sm:text-base">
                    {rewardsExpressChecks[index] ? '✔️' : ''}
                  </td>

                  {/* eGifter Rewards Check */}
                  <td className="border border-gray-300 px-4 py-2 text-center text-sm sm:text-base">
                    {egifterRewardsChecks[index] ? '✔️' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
