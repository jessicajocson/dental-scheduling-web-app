import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../states/hook";

export const useHome = () => {
    const navigate = useNavigate();
    const storedToken: string = useAppSelector((state) => state.Token.token);
    console.log("Check Token", storedToken);
    const handleClickBookAppointment= () => {
        navigate("/booking");
    };

    return {
        handleClickBookAppointment,
    };
};
