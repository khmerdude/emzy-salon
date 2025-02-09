import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import AnitaImage from '../../assets/Anita.jpg';
import AnitaImage2 from '../../assets/anita2.jpg';
import AnitaImage3 from '../../assets/anita3.jpg';

const SpaServicesModal = ({ isOpen, onClose }) => {
    const handleBackdropClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-3xl font-bold w-full text-center">Healing Touch Program</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors absolute right-6"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                    {/* Description Section */}
                    <div>
                        <p className="text-gray-600 text-center">
                            Our certified Healing Touch Practitioner Anita provides a program where she helps balance 
                            the energy of your mind, body and spirit by using a gentle touch. The perfect way to 
                            complete your overall well-being!
                        </p>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Practitioner Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Anita Groeschke</h3>
                        
                        {/* Anita's Image */}
                        <div className="flex justify-center mb-6">
                            <img 
                                src={AnitaImage} 
                                alt="Anita Groeschke" 
                                className="w-64 rounded-lg shadow-md"
                            />
                        </div>

                        <div className="text-center text-gray-600 mb-4 italic">
                            Certified: Healing Touch Practitioner, Clinical Aromatherapy, and Medical Intuitive
                        </div>
                        <div className="text-center font-semibold">
                            Schedule Sessions: Wednesday 11 am to 4pm
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Services Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Services</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Healing Touch Introduction</span>
                                <span className="font-semibold">$30</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Aroma Therapy Consultation</span>
                                <span className="font-semibold">$45</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Healing Touch</span>
                                <span className="font-semibold">$60</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Medical Intuitive</span>
                                <span className="font-semibold">$70</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Information Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">What is healing touch?</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Healing Touch uses gentle, light or near-body touch to clear, balance, energize 
                                and support the human energy systems to facilitate and support healing for the 
                                whole person "mind, body, and spirit".
                            </p>
                            <p>
                                The goal of Healing Touch is to restore harmony and balance in the human energy 
                                system thus creating an optimal environment for the body's innate tendency for 
                                healing to occur.
                            </p>
                            <p className="italic">
                                Aromatherapy increases the energy flow during the healing touch.
                            </p>

                            {/* Healing Touch Images */}
                            <div className="flex justify-center gap-4 mt-6">
                                <img 
                                    src={AnitaImage2} 
                                    alt="Healing Touch Service" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                                <img 
                                    src={AnitaImage3} 
                                    alt="Healing Touch Service" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaServicesModal; 