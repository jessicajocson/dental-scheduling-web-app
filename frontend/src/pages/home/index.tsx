import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ToothIcon from '/dentist.png';
import Navbar from '../../components/navbar';
import Services from '../../components/home-services';
import { useHome } from "./hooks/useHome";

const Home = () => {
    const { ...hooks } = useHome();

    return (
        <div className="linear-gradient min-h-screen">
            <Navbar />
            {/* Contact Bar */}
            <div className="bg-white text-gray-600 p-2">
                <div className="flex justify-center items-center space-x-20">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="text-gray-600" />
                        <span className="text-sm">+1 (123) 456-7890</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <LocationOnIcon className="text-gray-600" />
                        <span className="text-sm">Address: 4994 Oakwood Circle, Riverside, CA</span>
                    </div>
                </div>
            </div>

            <section className="relative">
                <div className="container mx-auto">
                    <div className="relative flex">
                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-gray-600">
                            <p>
                                Managing your dental care has never been more convenient. Our experienced team is dedicated to delivering exceptional dental treatments in a comfortable, welcoming environment.
                            </p>
                            <br></br>
                            <h2>
                                <strong className='text-gray-600'>Start Your Journey to a Healthier Smile Today!</strong>
                            </h2>
                            <button
                                className="mt-8 bg-[#7895F7] text-white px-3 py-1 rounded-md"
                                onClick={hooks.handleClickBookAppointment}
                            >
                                <span>
                                    <CalendarMonthIcon className="text-white mb-1 mr-2" />
                                </span>
                                Book Appointment
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img
                                src={ToothIcon}
                                alt="Dental Model"
                                className="w-3/4 md:w-1/2 h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Services />
        </div>
    );
};

export default Home;
