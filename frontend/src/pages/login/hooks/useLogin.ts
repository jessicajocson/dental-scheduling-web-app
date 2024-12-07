import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import useAuthStore from "../../../states/stores/auth-store";
import { useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";
// import { addAppointment } from "../../../states/details/appointment.slice";
import { AuthRequest } from "../../../utils/requests/auth.request";
import { UserRequest } from "../../../utils/requests/user.request";
import { EmailRegex } from "../../../constants/regex-validation";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [hasCompleteValidInput, setHasCompleteValidInput] =
        useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        if (
            email.length !== 0 &&
            password.length !== 0 &&
            EmailRegex.test(email)
        ) {
            setHasCompleteValidInput(true);
        } else {
            setHasCompleteValidInput(false);
        }
    }, [email, password]);

    const handleClickLogin = async () => {
        setIsLoading(true);
        const response = await AuthRequest({
            process: "login",
            email: email,
            password: password,
        });

        if (response.status === 200 || response.status === 201) {
            console.log("USER", response.token);
            dispatch(addUser(response.user));
            dispatch(addToken(response.token));

            const appointmentList = await handleFetchAppointmentList(
                response.user.id,
                response.token
            );
            console.log("TEST", appointmentList);
            if (appointmentList.status == 200) {

                // dispatch(addAppointment(appointmentList.appointments));
                setIsAuthenticated(true);
                setIsLoading(false);
                navigate("/");
            }
        } else {
            setIsAuthenticated(false);
            setIsLoading(false);
            setErrorMessage(response.message);
        }
    };

    const handleFetchAppointmentList = async (id: string, token: string) => {
        const appointmentList = await UserRequest({
            method: "GET",
            id: id,
            token: token,
        });
        if (appointmentList.status == 200) {
            for (let i = 0; i < appointmentList.appointments.length; i++) {
                appointmentList.appointments[i]["id"] = i;
                appointmentList.appointments[i]["appointment_date"] = new Date(
                    appointmentList.appointments[i]["appointment_date"]
                );
            }
        }

        console.log("appointment list await", {
            status: appointmentList.status,
            appointments: appointmentList.appointments,
        });
        return {
            status: appointmentList.status,
            appointments: appointmentList.appointments,
        };
    };

    const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return {
        isLoading,
        email,
        password,
        hasCompleteValidInput,
        handleChangeInputEmail,
        handleChangeInputPassword,
        handleClickLogin,
        errorMessage,
        handleFetchAppointmentList,
    };
}