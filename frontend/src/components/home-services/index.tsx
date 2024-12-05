const Services = () => {

    return (
        <section className="mt-10 mb-10 container mx-auto">
            <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-lg shadow p-6 text-center">
                    <h3 className="text-lg font-bold text-teal-500">General Dentistry</h3>
                    <p className="text-gray-600 mt-2">
                        Comprehensive oral health check-ups, cleanings, and more.
                    </p>
                </div>


                <div className="bg-white rounded-lg shadow p-6 text-center">
                    <h3 className="text-lg font-bold text-teal-500">Cosmetic Dentistry</h3>
                    <p className="text-gray-600 mt-2">
                        Teeth whitening, veneers, and enhancing your smile.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                    <h3 className="text-lg font-bold text-teal-500">Orthodontics</h3>
                    <p className="text-gray-600 mt-2">
                        Braces, Invisalign, and correcting misaligned teeth.
                    </p>
                </div>
            </div>
        </section>
    );
};




export default Services;
