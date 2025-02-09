import React from 'react';

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        {/* EmbedSocial Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="embedsocial-reviews" 
            data-ref="1" 
            data-widget-id="YOUR_WIDGET_ID"
            data-powered="false"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 