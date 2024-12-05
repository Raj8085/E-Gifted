// import "./signIn.css";

// function SignIn() {
//   return (
//     <div className="sign-in-container">
//       <div className="sign-in-card">
//         {/* Sign-In Header */}
//         <div className="sign-in-header">
//           <h2>Sign In</h2>
//         </div>

//         {/* Sign-In Form */}
//         <div className="sign-in-form">
//           <p>Enter your email address</p>
//           <input type="email" placeholder="Your Email" className="email-input" />
//           <button className="continue-button">CONTINUE</button>

//           <div className="divider">
//             <hr />
//             <span>or</span>
//             <hr />
//           </div>

//           {/* Social Login Options */}
//           <div className="social-login-buttons">
//             <button className="social-button apple">
//               <span> Sign in with Apple</span>
//             </button>
//             <button className="social-button google">
//               <span>Sign in with Google</span>
//             </button>
//             <button className="social-button facebook">
//               <span>Sign in with Facebook</span>
//             </button>
//             <button className="social-button amazon">
//               <span>Sign in with Amazon</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;




// import "./signIn.css";

// function SignIn({ closeSignIn }) { // Accept closeSignIn function as a prop
//   return (
//     <div className="sign-in-container mt-40 w-[700px]">
//       <div className="sign-in-card">
//         {/* Sign-In Header */}
//         <div className="sign-in-header text-xl">
//           <h2>Sign In</h2>
//         </div>

//         {/* Sign-In Form */}
//         <div className="sign-in-form">
//           <input type="text" placeholder="Your Name" className="email-input" />
//           <input type="password" placeholder="Paasword" className="email-input" />
//           <input type="email" placeholder="Your Email" className="email-input" />
//           <button className="continue-button">CONTINUE</button>

//           <div className="divider">
//             <hr />
//             <span>or</span>
//             <hr />
//           </div>

//           {/* Social Login Options */}
//           <div className="social-login-buttons">
//             <button className="social-button apple">
//               <img src="public/socialMedia/apple-logo-black.svg" alt="" className="h-4 w-5"/>
//               <span>Sign in with Apple</span>
//             </button>
//             <button className="social-button google">
//             <img src="public/socialMedia/google-colored-logo.svg" alt="" className="h-4 w-5"/>
//               <span>Sign in with Google</span>
//             </button>
//             <button className="social-button facebook">
//               <img src="public/socialMedia/download (1).svg" className="h-4 w-5" alt=""/>
//               <span>Sign in with Facebook</span>
//             </button>
//             <button className="social-button amazon">
//             <img src="public/socialMedia/download (2).svg" className="h-4 w-5" alt=""/>
//             <span>Sign in with Facebook</span>
//             </button>
//           </div>
//         </div>

//         {/* Close button for Sign-In */}
//         {/* <button className="close-sign-in" onClick={closeSignIn}>Close</button> */}
//       </div>
//     </div>
//   );
// }

// export default SignIn;









import  { useState } from "react";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    if (!formData.name || !formData.password || !formData.email) {
      alert("Please fill in all fields!");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("User data saved successfully!");

    navigate("/")
    window.location.reload(); 

  };


  const handleGoogleLogin = (response) => {
    if (response.profileObj) {
      const userData = {
        name: response.profileObj.name,
        email: response.profileObj.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    }
  };

  return (
    <div className="sign-in-container mt-40 w-[700px]">
      <div className="sign-in-card">
        {/* Sign-In Header */}
        <div className="sign-in-header text-xl">
          <h2>Sign In</h2>
        </div>

        {/* Sign-In Form */}
        <div className="sign-in-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="email-input"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="email-input"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="email-input"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button className="continue-button" onClick={handleContinue}>
            CONTINUE
          </button>

          <div className="divider">
            <hr />
            <span>or</span>
            <hr />
          </div>

          {/* Social Login Options */}
          <div className="social-login-buttons">
            <button className="social-button apple">
              <img
                src="public/socialMedia/apple-logo-black.svg"
                alt=""
                className="h-4 w-5"
              />
              <span>Sign in with Apple</span>
            </button>

            <GoogleOAuthProvider
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Sign in with Google"
              onSuccess={handleGoogleLogin}
              onFailure={(error) => console.error(error)}
              className="social-button google"
            />



            <button className="social-button google">
              <img
                src="public/socialMedia/google-colored-logo.svg"
                alt=""
                className="h-4 w-5"
              />
              <span>Sign in with Google</span>
            </button>
            <button className="social-button facebook">
              <img
                src="public/socialMedia/download (1).svg"
                className="h-4 w-5"
                alt=""
              />
              <span>Sign in with Facebook</span>
            </button>
            <button className="social-button amazon">
              <img
                src="public/socialMedia/download (2).svg"
                className="h-4 w-5"
                alt=""
              />
              <span>Sign in with Amazon</span>
            </button>
          </div>
        </div>

        {/* Close button for Sign-In */}
        {/* <button className="close-sign-in" onClick={closeSignIn}>Close</button> */}
      </div>
    </div>
  );
}

export default SignIn;



