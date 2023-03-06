import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to EMZY Salon</h1>
      <p>We provide high-quality hair and beauty services at affordable prices. Our experienced and friendly staff will make you feel welcome and relaxed.</p>
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>"I've been coming to EMZY for years and they never disappoint. Their stylists are knowledgeable and skilled, and they always make me feel beautiful."</p>
        <p>- Jane D.</p>
      </div>
      <div className="testimonial">
        <p>"I recently had my hair done at EMZY and it looks amazing! The stylist really listened to what I wanted and gave me the perfect cut and color."</p>
        <p>- John S.</p>
      </div>
    </div>
  );
}

export default Home;
