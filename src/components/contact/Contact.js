import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">For inquiries or to schedule an appointment, please call us at <a href="tel:555-555-5555" className="text-blue-500 hover:text-blue-700">555-555-5555</a> or email us at <a href="mailto:info@emzysalon.com" className="text-blue-500 hover:text-blue-700">info@emzysalon.com</a>.</p>
    </div>
  );
}

export default Contact;