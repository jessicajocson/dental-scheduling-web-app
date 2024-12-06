import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CoverPhoto from '/homepage-cover-photo.png';
import Navbar from '../../components/navbar';
import Services from '../../components/home-services';
import { useHome } from "./hooks/useHome";

const Home = () => {
    const { ...hooks } = useHome();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            {/* Contact Bar */}
            <div className="bg-teal-400 text-white p-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="text-white" />
                        <span className="text-sm">+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <LocationOnIcon className="text-white" />
                        <span className="text-sm">Address: 4994 Oakwood Circle, Riverside, CA</span>
                    </div>
                </div>
            </div>

            <section className="relative">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="w-full h-96 relative">
                            <img src={CoverPhoto} alt="Dental Model" className="w-full h-full object-cover" />
                            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-400 text-white px-4 py-2 rounded-md"
                                onClick={() => hooks.handleClickBookAppointment}>
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Services/>
        </div>
    );
};




export default Home;
