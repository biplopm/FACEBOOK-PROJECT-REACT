import React, { useState } from "react";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import "./Auth.scss";
import Modal from "../../components/Modal/Modal";

const Auth = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Meta title="Facebook-log in-sing up" />
      {modal && <Modal hide={setModal}>
        <form action="" className="sing-up-form">
          <div className="h-form">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="surename"/>
          </div>
          <input type="text" placeholder="Mobile number or email address"/>
          <input type="password" placeholder="New-password"/>
        </form>
        </Modal>}

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
