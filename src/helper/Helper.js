import { toast } from "react-toastify";

export const createToast = (msg, type = "error") => {
  return toast[type](msg);
};

//Email validation

export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-_\.]{1,}\.[a-z\.]{2,}$/.test(email);
};

//Mobile validation

export const isMobile = (mobile) => {
  return /^(01 | 8801|\+8801)[0-9]{9}$/.test(mobile);
};

/* // OTP validation

export const createOtp = (length = 5) => {
  let length = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};

//Genarate Random Password

export const genarateRandomPassword = (length = 10) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_+={}[]|;,.:<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
};
 */