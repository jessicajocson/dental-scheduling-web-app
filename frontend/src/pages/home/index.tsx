import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import '../../styles/homepage.css'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='app-content'>
                <header>
                    <h1>Welcome to Our Dental Office</h1>
                    <p>We provide exceptional dental care to keep your smile healthy!</p>
                    <button onClick={() => navigate('/booking')}>Schedule Appointment</button>
                </header>
            </div>
        </div>
    );
};

export default Home;
