import "./SnowEffect.css"
const SnowEffect = () => {
  return (
    <div>
          <div className="snowflakes">
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
        <div className="snowflake">*</div>
    </div>
    </div>
  )
}

export default SnowEffect

// import "./SnowEffect.css";

// const SnowEffect = () => {
//   const snowflakeCount = 500; // Set the number of snowflakes you want

//   const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => (
//     <div key={index} className="snowflake">❄</div>
//   ));

//   return (
//     <div className="snowflakes">
//       {snowflakes}
//     </div>
//   );
// };

// export default SnowEffect;
