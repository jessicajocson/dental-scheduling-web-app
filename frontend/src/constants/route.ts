import { IRoute } from "../interfaces/route";
import HomeComponent from "../pages/home";
import LoginComponent from "../pages/login";
import RegisterComponent from "../pages/register";
import BookAppointmentComponent from "../pages/booking";
import DashboardComponent from "../pages/dashboard";

export const RouteList: Array<IRoute> = [
  {
    name: "Home",
    path: "/",
    title: "Home",
    component: HomeComponent,
    protected: false,
  },
  {
    name: "Login",
    path: "/login",
    title: "Login",
    component: LoginComponent,
    protected: false,
  },
  {
    name: "Register",
    path: "/register",
    title: "Register",
    component: RegisterComponent,
    protected: false,
  },
  {
    name: "BookAppointment",
    path: "/book-appointment",
    title: "Book Appointment",
    component: BookAppointmentComponent,
    protected: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    title: "Dashboard",
    component: DashboardComponent,
    protected: true,
  },
];
