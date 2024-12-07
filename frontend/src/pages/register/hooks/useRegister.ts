import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { AuthRequest } from "../../../utils/requests/auth.request";
import { useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";
import { EmailRegex } from "../../../constants/regex-validation";

export const useRegister = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userFullName, setuserFullName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [hasCompleteValidInput, setHasCompleteValidInput] =
      useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChangeInputFullName = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Client Fullname:", e.target.value);
        setuserFullName(e.target.value);
      };
    
      const handleChangeInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
      };
    
      const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    
      const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };
    
      const handleClickSignUp = async () => {
        setIsLoading(true);
        const response = await AuthRequest({
          process: "register",
          full_name: userFullName,
          phone: phone,
          email: email,
          password: password,
        });
    
        setIsLoading(false);
        if (response.status === 200 || response.status === 201) {
          dispatch(addUser(response.user));
          dispatch(addToken(response.token));
          console.log("Navigate to dashboard from register");
          navigate("/");
        } else {
          console.log("ERROR", response);
          setErrorMessage(response.message);
        }
      };
    
      useEffect(() => {
        if (
          email.length !== 0 &&
          password.length !== 0 &&
          userFullName.length !== 0 &&
          phone.length !== 0 &&
          EmailRegex.test(email)
        ) {
          setHasCompleteValidInput(true);
        } else {
          setHasCompleteValidInput(false);
        }
      }, [email, password, userFullName, phone]);
      return {
        EmailRegex,
        isLoading,
        userFullName,
        handleChangeInputFullName,
        phone,
        handleChangeInputPhone,
        email,
        handleChangeInputEmail,
        password,
        handleChangeInputPassword,
        hasCompleteValidInput,
        handleClickSignUp,
        errorMessage,
      };
}