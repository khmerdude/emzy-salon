import React from 'react';
import AwardImage from '../../assets/award.jpg'; // Make sure to add the award image to assets folder

const Awards = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Awards</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Award Image */}
            <div className="w-full md:w-1/3">
              <img 
                src={AwardImage} 
                alt="2022 Best of North Olmsted Award" 
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Award Content */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-6">
                Emzy Salon and Spa Receives 2022 Best of North Olmsted Award
              </h3>
              
              <p className="text-gray-600 mb-6 italic">
                North Olmsted Award Program Honors the Achievement
              </p>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  NORTH OLMSTED January 21, 2022 -- Emzy Salon and Spa has been selected for the 2022 Best of North Olmsted Award 
                  in the Beauty Salons category by the North Olmsted Award Program.
                </p>
                
                <p>
                  Each year, the North Olmsted Award Program identifies companies that we believe have achieved exceptional marketing 
                  success in their local community and business category. These are local companies that enhance the positive image 
                  of small business through service to their customers and our community. These exceptional companies help make the 
                  North Olmsted area a great place to live, work and play.
                </p>
                
                <p>
                  Various sources of information were gathered and analyzed to choose the winners in each category. The 2022 North 
                  Olmsted Award Program focuses on quality, not quantity. Winners are determined based on the information gathered 
                  both internally by the North Olmsted Award Program and data provided by third parties.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-xl font-bold mb-4">About North Olmsted Award Program</h4>
            <p>
              The North Olmsted Award Program is an annual awards program honoring the achievements and accomplishments of 
              local businesses throughout the North Olmsted area. Recognition is given to those companies that have shown 
              the ability to use their best practices and implemented programs to generate competitive advantages and 
              long-term value.
            </p>
            <p className="mt-4">
              The North Olmsted Award Program was established to recognize the best of local businesses in our community. 
              Our organization works exclusively with local business owners, trade groups, professional associations and 
              other business advertising and marketing groups. Our mission is to recognize the small business community's 
              contributions to the U.S. economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 