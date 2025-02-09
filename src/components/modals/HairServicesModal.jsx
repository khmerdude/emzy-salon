import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import CutImage from '../../assets/IMG_3551.jpg';
import ColorImage from '../../assets/IMG_3525+(1).jpg';
import AdditionalImage from '../../assets/IMG_3542.jpg';

const HairServicesModal = ({ isOpen, onClose }) => {
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
                    <h2 className="text-3xl font-bold w-full text-center">Hair Services</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors absolute right-6"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                    {/* Cuts Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Cuts</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Women Cuts</span>
                                <span className="font-semibold">$28</span>
                            </div>
                            <div className="text-sm text-gray-600 ml-4">with shampoo and style - $38</div>
                            
                            <div className="flex justify-between items-center">
                                <span>Men Cuts</span>
                                <span className="font-semibold">$23</span>
                            </div>
                            <div className="text-sm text-gray-600 ml-4">with beard trim - $28</div>
                            
                            <div className="flex justify-between items-center">
                                <span>Teen Cuts (11-17)</span>
                                <span className="font-semibold">$21</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Children Cuts (Under 10)</span>
                                <span className="font-semibold">$18</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>In Between Cuts</span>
                                <span className="font-semibold">$18</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Bang Trim</span>
                                <span className="font-semibold">$15</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Beard Trim</span>
                                <span className="font-semibold">$15</span>
                            </div>

                            {/* Cut Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={CutImage} 
                                    alt="Hair Cut Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Color Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Color</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>All Over Color</span>
                                <span className="font-semibold">$75*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Partial Highlights</span>
                                <span className="font-semibold">$85*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Full Highlights</span>
                                <span className="font-semibold">$95*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Balayage</span>
                                <span className="font-semibold">$120*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Color Correction</span>
                                <span className="font-semibold">Consultation Required</span>
                            </div>

                            {/* Color Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={ColorImage} 
                                    alt="Hair Color Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Perm Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Perm</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Basic Perm</span>
                                <span className="font-semibold">$75*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Specialty Perm</span>
                                <span className="font-semibold">$85*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Spiral Perm</span>
                                <span className="font-semibold">$90*</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Treatment Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Treatment</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Brazilian Blowout</span>
                                <span className="font-semibold">$200*</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Deep Conditions</span>
                                <span className="font-semibold">$15</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Extension Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Extension</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Full Sew-In</span>
                                <span className="font-semibold">Consultation Required</span>
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                All services involving hair extensions MUST REQUIRE A CONSULTATION before booking the appointment.
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Additional Services Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Additional Services</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Shampoo</span>
                                <span className="font-semibold">$10</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Shampoo and Style</span>
                                <span className="font-semibold">$20</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Flat Iron</span>
                                <span className="font-semibold">$20</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Special Occasions (Basic Styling)</span>
                                <span className="font-semibold">$50*</span>
                            </div>

                            {/* Additional Services Image */}
                            <div className="flex justify-center mt-6">
                                <img 
                                    src={AdditionalImage} 
                                    alt="Additional Hair Services" 
                                    className="w-64 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    <p className="text-sm text-gray-600 italic">
                        *The starting price (Price may increase depending on length and thickness of hair)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HairServicesModal; 