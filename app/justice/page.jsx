"use client";

import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Dashboard from "./dashboard/page";
import { useFormik } from "formik";
import axios from "axios";

export default function Auth() {
  //  form inputs
  const [officialEmail, setOfficialEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // OTP state
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // State to manage OTP verification and display the dashboard
  const [isVerified, setIsVerified] = useState(false);

  // Refs to focus on inputs
  const inputRefs = useRef([]);

  //  visibility toggle
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);

  //  closing modals
  const handleModalClose = (e) => {
    if (e.target.classList.contains("auth__modal")) {
      setModalOpen(false);
      setModalOpenTwo(false);
    }
  };

 

  // -----
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }
  
  })

  const { values, errors, handleChange, handleBlur, handleSubmit } = formik

  const loginCredentials = {
    emailOrId: values.email,
    password: password
  }

  const login = async (emailOrId, password) => {
    // console.log({email, password});
    try {
      const res = await axios.post(`https://api.dev.cledas.centraconnect.ai/auth/login-Admin
`, {
        emailOrId,
        password,
      });
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };

   // Placeholder function for form submission
   const handleLoginSubmit = (e) => {
    e.preventDefault();

    const response = login(loginCredentials.emailOrId, password);

    console.log('response', response);
    if(response){

      // Save the email to local storage
    localStorage.setItem('userEmail', loginCredentials.emailOrId);
    
      setModalOpen(true);
      // <Dashboard />
    }
    
  };
  // --------


  // Handle OTP input
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Allowing only numbers and handling empty value for deletion
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    setLoading(true);

    // Simulate OTP verification process
    setTimeout(() => {
      setLoading(false);
      setIsVerified(true);
    }, 1000);
  };

  // Show dashboard if verified
  if (isVerified) {
    return <Dashboard />;
  }

  return (
    <main className="auth">
      <div className="auth__title">
        <div>
          <Image
            alt=""
            src="/assets/logo.png"
            width={66.089}
            height={66.089}
            style={{ marginBottom: "10px" }}
          />
        </div>
        CLEDAS
        <p>Centralised Law Enforcement Dentention Adminstration System</p>
      </div>

      <form className="auth__form" onSubmit={handleLoginSubmit}>
        <h2 className="auth__form__title">Login as</h2>
        <h3 className="auth__form__subtitle">Law Enforcement Agent</h3>

        <label htmlFor="" className="auth__form__label">
          Government Issued Email*
        </label>
        <input
          type="text"
          name="email"
          className="auth__form__input"
          placeholder="Enter Government Issued Email"
          required
          value= {values.email}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        <label htmlFor="" className="auth__form__label">
          Password*
        </label>

        <OutlinedInput
          className="auth__form__input"
          required
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ paddingLeft: 0, fontSize: "1.6rem" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        <h4 className="auth__form__caution">Must be at least 8 characters.</h4>

        <button className="auth__form__button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

        <h5
          className="auth__form__request pointer"
          onClick={() => (window.location.href = "/justice/request")}
        >
          Request Access
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0248 15.6829C11.8664 15.6829 11.7081 15.6246 11.5831 15.4996C11.3414 15.2579 11.3414 14.8579 11.5831 14.6163L16.1998 9.99961L11.5831 5.38294C11.3414 5.14128 11.3414 4.74128 11.5831 4.49961C11.8248 4.25794 12.2248 4.25794 12.4664 4.49961L17.5248 9.55794C17.7664 9.79961 17.7664 10.1996 17.5248 10.4413L12.4664 15.4996C12.3414 15.6246 12.1831 15.6829 12.0248 15.6829Z"
              fill="#009B07"
            />
            <path
              d="M16.9415 10.625H2.9165C2.57484 10.625 2.2915 10.3417 2.2915 10C2.2915 9.65833 2.57484 9.375 2.9165 9.375H16.9415C17.2832 9.375 17.5665 9.65833 17.5665 10C17.5665 10.3417 17.2832 10.625 16.9415 10.625Z"
              fill="#009B07"
            />
          </svg>
        </h5>

        
      </form>

      {/* First Modal */}
        {modalOpen && (
          <div className="auth__modal" onClick={handleModalClose}>
            <div className="auth__modal__inner">
              <div className="auth__modal__inner__title">OTP</div>
              <div className="auth__modal__inner__subtitle">
                Enter the OTP sent to {officialEmail}
              </div>

              <div className="auth__modal__inner__otp-group">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    className="auth__modal__inner__otp-group__input"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </div>

              <div
                className="auth__modal__inner__request pointer"
                // onClick={handleResendOtp}
              >
                Request a new code
              </div>

              <button
                // onClick={handleVerifyOtp}
                onClick={() => (window.location.href = "/justice/dashboard")}
                // disabled={loading}
              >
                {loading ? "Loading..." : "Verify OTP"}
              </button>
            </div>
          </div>
        )}
    </main>
  );
}
