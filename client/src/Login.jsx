import React, { useEffect, useState } from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "./assets/google-icon 1.png";

const Login = () => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        setValue(data.user.email);
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setAuthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch((err) => navigate("/"));
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(true);
    }
    setCheck(false);
  }, []);

  console.log(authenticated);

  
    return (
      <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full">
        <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleGoogleSignIn}
                className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 "
              >
                <div className="flex justify-between items-center">
                  <img
                    src={google}
                    alt="google"
                    className="w-[14px] h-[14px]"
                  />
                  Sign in with Google
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
