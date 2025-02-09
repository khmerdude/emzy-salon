import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import WaxingImage from '../../assets/other2.jpg';
import SpecialEventsImage from '../../assets/other1.jpg';
import WeddingImage from '../../assets/wedding.jpg';

const BeautyServicesModal = ({ isOpen, onClose }) => {
    // Move useCallback before any conditional returns
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
                    <h2 className="text-3xl font-bold w-full text-center">Beauty Services</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors absolute right-6"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                    {/* Waxing Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Waxing</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Eyebrow</span>
                                <span className="font-semibold">$15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Lip</span>
                                <span className="font-semibold">$15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Chin</span>
                                <span className="font-semibold">$15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Cheeks</span>
                                <span className="font-semibold">$16</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Full Face</span>
                                <span className="font-semibold">$55</span>
                            </div>
                            
                            {/* Waxing Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={WaxingImage} 
                                    alt="Waxing Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Special Events Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Special Events</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Basic Updo</span>
                                <span className="font-semibold">$60*</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Makeup</span>
                                <span className="font-semibold">$60*</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Updo & Makeup</span>
                                <span className="font-semibold">$120</span>
                            </div>

                            {/* Special Events Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={SpecialEventsImage} 
                                    alt="Special Events Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Wedding Package Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Wedding Package</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Hair Trial</span>
                                <span className="font-semibold">$15 OFF updo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Bride Updo</span>
                                <span className="font-semibold">$75+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Bride Makeup</span>
                                <span className="font-semibold">$75+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Guest Updo</span>
                                <span className="font-semibold">$60+</span>
                            </div>
                            <div className="text-sm text-gray-600 ml-4">
                                (Bridesmaid, maid of honor, mother of bride, and others)
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Children's Updo</span>
                                <span className="font-semibold">$50+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Guest Makeup</span>
                                <span className="font-semibold">$60+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Booking Fee</span>
                                <span className="font-semibold">$50</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Travel/Convenience fee</span>
                                <span className="font-semibold">$60+</span>
                            </div>
                            <div className="text-sm text-gray-600">
                                *Prices may increase depending on travel distance
                            </div>

                            {/* Wedding Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={WeddingImage} 
                                    alt="Wedding Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    <p className="text-sm text-gray-600 italic">
                        *The starting price (Price may increase)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BeautyServicesModal; 