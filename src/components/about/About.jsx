import React from "react";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            {/* Main About Section */}
            <section className="max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <p className="text-lg mb-6">
                        At EMZY Salon & Spa, our main goal is to bring out your inner beauty with a one of a kind unique experience. Our skilled Artists are dedicated in creating your customized look with a wide range of services to pamper you from head to toe.
                    </p>
                    <p className="text-lg mb-6">
                        Since 2014, we take pride in our work with high end results and yet affordable without the astronomical prices.
                    </p>
                    <p className="text-lg mb-6">
                        Our mission is to provide you with an outstanding experience in a comfortable atmosphere and the confidence that you're in the right place!
                    </p>
                </div>
            </section>

            {/* Info Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Business Info */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Business Details</h2>
                    <p className="mb-2"><strong>Founded:</strong> 2014</p>
                    <p className="mb-2"><strong>Location:</strong> Cherandon Plaza</p>
                    <p><strong>Address:</strong><br />
                    26735 Brookpark Rd Ext<br />
                    North Olmsted, Ohio 44070</p>
                </div>

                {/* Staff */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Master Hair Artist</li>
                        <li className="mb-2">Nail Technician</li>
                        <li className="mb-2">Makeup Artist</li>
                        <li className="mb-2">Wax Specialist</li>
                        <li>Healing Touch Practitioner</li>
                    </ul>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Hours</h2>
                    <div className="space-y-2">
                        <p><strong>Tuesday–Thursday:</strong> 10am - 5pm</p>
                        <p><strong>Saturday:</strong> 9am–2pm</p>
                        <p><strong>Sunday, Monday, & Friday:</strong> Closed</p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="max-w-4xl mx-auto mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-2">
                    <a href="tel:4404559415" className="text-blue-600 hover:text-blue-800">
                        (440) 455-9415
                    </a>
                </p>
                <p className="mb-2">
                    <a href="mailto:emzysalonandspa@gmail.com" className="text-blue-600 hover:text-blue-800">
                        emzysalonandspa@gmail.com
                    </a>
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="https://www.instagram.com" className="text-blue-600 hover:text-blue-800">Instagram</a>
                    <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">Facebook</a>
                </div>
            </section>
        </div>
    );
}

export default About;
