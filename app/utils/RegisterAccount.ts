import axios from "axios";
import React from "react";

interface RegisterAccountProps {
  userId: string;
  email: string;
  password: string;
}

const RegisterAccount = async (userInfo: RegisterAccountProps) => {
  try {
    const response = await axios.post("http://localhost:5000/api/users/signup", userInfo);
    console.log("response", response);
  } catch (error) {
    console.error("계정 등록 중 오류 발생:", error);
  }
};
export default RegisterAccount;
