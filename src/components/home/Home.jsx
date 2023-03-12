import React from "react";
// import "./Home.css";

const Home = () => {
  return (
    // container
    <div className="mx-auto px-4 py-8 mt-16 justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">Welcome to EMZY Salon</h1>
      <p className="mb-4">We provide high-quality hair and beauty services at affordable prices. Our experienced and friendly staff will make you feel welcome and relaxed.</p>
      <h2 className="text-xl font-bold mb-2">Testimonials</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
        <p className="mb-2">&ldquo;I've been coming to EMZY for years and they never disappoint. Their stylists are knowledgeable and skilled, and they always make me feel beautiful.&rdquo;</p>
        <p className="text-right">&mdash; Jane D.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <p className="mb-2">&ldquo;I recently had my hair done at EMZY and it looks amazing! The stylist really listened to what I wanted and gave me the perfect cut and color.&rdquo;</p>
        <p className="text-right">&mdash; John S.</p>
      </div>
    </div>
  );
}



export default Home;
