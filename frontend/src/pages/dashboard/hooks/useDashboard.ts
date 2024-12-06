import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pages } from "../../../constants/pages";
import { useAppSelector } from "../../../states/hook";
import { UserRequest } from "../../../utils/requests/user.request";
import { useLogin } from "../../login/hooks/useLogin";

export const useDashboard = () => {
    const { ...useLoginHooks } = useLogin();
    const navigate = useNavigate();
    const [storedAppointments, setStoredAppointments] = useState<any>();
    const storedUser: any = useAppSelector((state) => state.User.user);
    const storedToken: string = useAppSelector((state) => state.Token.token);

    console.log("Dashboard Token", storedToken);

    const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
    const [selectedAction, setSelectedAction] = useState<string>("");
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalSubtitle, setModalSubtitle] = useState<string>("");

    useEffect(() => {
        const fetch = async () => {
            const storedAppointments = await useLoginHooks.handleFetchAppointmentList(
                storedUser.id,
                storedToken
            );
            console.log("STORAGE", storedAppointments);
            setStoredAppointments(storedAppointments.appointments);
        };
        fetch();
    }, []);

    const handleSelectedAppointment = (appointment: any) => {
        if (!isSelected) {
            setIsSelected(true);
            setSelectedAppointment(appointment.row);
        } else {
            setIsSelected(false);
            setSelectedAppointment(null);
        }
    };

    const handleActionSelect = (action: string) => {
        setSelectedAction(action);
        setIsModalOpen(true);
    };

    const handleConfirmAction = async () => {
        if (selectedAction === "Reschedule") {
            alert(`Reschedule confirmed for appointment with ${selectedAppointment.dentist}`);
        } else if (selectedAction === "Cancel") {
            console.log(`Action: ${selectedAction}`);
            const response = await UserRequest({
                method: "DELETE",
                id: selectedAppointment.appointment_id,
                token: storedToken,
            });

            if (response.status === 200) {
                const appointmentPlaceholder =
                    await useLoginHooks.handleFetchAppointmentList(
                        storedUser.id,
                        storedToken
                    );
                console.log("HANDLE DELETE", appointmentPlaceholder);
                setStoredAppointments(appointmentPlaceholder.appointments);

                setIsSelected(false);

                setModalTitle("Appointment Deleted Successfully!");
                setModalSubtitle(
                    "Your appointment has been deleted. We hope to see you again soon. If you need to reschedule, please visit our booking page."
                );
            } else {
                setModalTitle("Oops! Something Went Wrong");
                setModalSubtitle(
                    "We encountered an error while trying to delete your appointment. Please try again later. If the problem persists, contact our support team for assistance."
                );
            }
        }
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setModalTitle("");
        setModalSubtitle("");
        setIsModalOpen(false);
        setSelectedAction("");
        setSelectedAppointment(null);
    };

    const handleClickHome = () => {
        navigate("/");
    };

    const handleClickLogin = () => {
        navigate("/login");
    };

    return {
        Pages,
        storedAppointments,
        handleClickHome,
        handleClickLogin,
        selectedAppointment,
        handleSelectedAppointment,
        selectedAction,
        handleActionSelect,
        handleConfirmAction,
        isModalOpen,
        modalTitle,
        modalSubtitle,
        handleModalClose,
    };
};
