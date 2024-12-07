import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Pages } from "../../../constants/pages";
import { useAppSelector, useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";

export const useNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [displayedText, setDisplayedText] = useState<string>("Login");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const storedUser: any = useAppSelector((state) => state.User.user);
  console.log("NAVBAR CHECK", storedUser);

  const handleClickHome = (page: any) => {
    setSelectedPage(page.name);
    navigate(page.route);
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickLogout = () => {
    dispatch(addUser({}));
    dispatch(addToken(""));
    navigate("/login");
  };

  const handleClickUser = () => {
    navigate("/dashboard");
  };

  const handleClickBookAppointment = () => {
    navigate("/book-appointment");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);  // Set anchor element to the icon or user name container
  };

  const handleMenuClose = () => {
    setAnchorEl(null);  // Close menu
  };

  return {
    Pages,
    currentPath,
    storedUser,
    displayedText,
    selectedPage,
    isMenuOpen,
    anchorEl,
    handleClickHome,
    handleClickLogin,
    handleClickLogout,
    handleClickBookAppointment,
    handleClickUser,
    handleMenuOpen,
    handleMenuClose
  };
};
