import React, { useState } from "react";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import "./Auth.scss";
import Modal from "../../components/Modal/Modal";
import { FaQuestionCircle } from "react-icons/fa";
import { day, month } from "../../faker/dmy";
import { createToast, isEmail } from "../../helper/Helper";

//get fb year
const years = Array.from(
  { length: new Date().getFullYear() - 1900 },
  (a, i) => 1901 + i
).reverse();

const Auth = () => {
  const [modal, setModal] = useState(false);
  const [gender, setGender] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    sureName: "",
    moe: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });

  const [border, setBorder] = useState({
    firstName: true,
    sureName: true,
    moe: true,
    password: true,
    day: true,
    month: true,
    year: true,
    gender: true,
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!input.firstName || !input.sureName || !input.moe || !input.password) {
      createToast("Please enter your mobile and email address");
    } else {
      if (!isEmail(input.moe)) {
        createToast("Please enter your email address");
        if (!isEmail(input.moe)) {
          createToast("Please enter your email address");
        } else {
          createToast("Data Stable", 'success');
        }
      } else {
        createToast("Data Stable", 'success');
      }
    }
  };
  const handleBlur = (e) => {
    if (e.target.value == "") {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };

  return (
    <>
      <Meta title="Facebook-log in-sing up" />
      {modal && (
        <Modal hide={setModal}>
          <form onSubmit={handleFormSubmit} className="sing-up-form">
            <div className="h-form">
              <input
                className={border.firstName ? "" : "red-border"}
                name="firstName"
                type="text"
                placeholder="First Name"
                value={input.firstName}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              <input
                className={border.sureName ? "" : "red-border"}
                name="sureName"
                type="text"
                placeholder="surename"
                value={input.sureName}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>
            <input
              className={border.moe ? "" : "red-border"}
              name="moe"
              type="text"
              placeholder="Mobile number or email address"
              value={input.moe}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <input
              className={border.password ? "" : "red-border"}
              name="password"
              type="password"
              placeholder="New-password"
              value={input.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <div className="reg-extra">
              <span className="reg-extra-tittle">
                Date of birth
                <FaQuestionCircle />
              </span>
              <div className="reg-extra-opt">
                <select
                  name="day"
                  id=""
                  value={input.day}
                  onChange={handleInputChange}
                >
                  <option value="">Day</option>
                  {day?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getDate() === item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  id=""
                  value={input.month}
                  onChange={handleInputChange}
                >
                  <option value="">Month</option>
                  {month?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getMonth() == index ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  id=""
                  value={input.year}
                  onChange={handleInputChange}
                >
                  <option value="">Year</option>
                  {years?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getFullYear() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="reg-extra">
              <span className="reg-extra-tittle">
                Gender
                <FaQuestionCircle />
              </span>
              <div className="reg-extra-opt">
                <label>
                  <span>Female</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Male</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Custom</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Custom"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. <Link>Learn more</Link>.
            </p>
            <p>
              By clicking Sign Up, you agree to our <Link>Terms</Link>,{" "}
              <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link>. You
              may receive SMS notifications from us and can opt out at any time.
            </p>
            <button type="submit">Sign Up</button>
          </form>
        </Modal>
      )}

      <div className="fb-auth-area">
        <div className="fb-auth-container">
          <div className="fb-auth-left">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="fb-auth-right">
            <div className="fb-auth-box">
              <form action="">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="password" placeholder="Password" />
                <button>Log in</button>
              </form>
              <Link to="">Forgotten password?</Link>
              <div className="divider"></div>
              <button className="secondary" onClick={() => setModal(true)}>
                Create new account
              </button>
            </div>
            <p className="fb-auth-dec">
              <Link to="">Create a Page</Link> for a celebrity, brand or
              business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
