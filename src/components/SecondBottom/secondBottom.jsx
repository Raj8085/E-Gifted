// import "./secondBottom.css";
// const BottomGridComponent = ({ title, image }) => {
//     return (
//       <div className="gift-component-bottom">
        
//         <h2>{title}</h2>
//         <div className="gift">
//           {/* Conditionally render image if the image prop is provided */}
//           {image ? (
//             <img 
//               src={image} 
//               alt={`${title} visual representation`} 
//               className="gift-image"
//             />
//           ) : (
//             <p>This is some text content for {title}.</p>
//           )}
//         </div>
        
//       </div>
//     );
//   };
//   export default BottomGridComponent;




// import "./secondBottom.css";

// const BottomGridComponent = ({ head, image }) => {
//   return (  
//     <>
//     <div className="gift-component-bottom">
//       <h2 className="gift-title">{head}</h2>
//       <div className="gift">
//         {image ? (
//           <img 
//             src={image} 
//             alt={`${head} visual representation`} 
//             className="gift-image"
//           />
//         ) : (
//           <p className="gift-text">This is some text content for {head}.</p>
//         )}
//       </div>
//     </div>
    
//     </>
//   );
// };

// export default BottomGridComponent;




// Card.js
import './secondBottom.css';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default Card;
