import React from "react";
import Ashish from "../assets/Ashish.jpeg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center w-full h-full p-4">
        
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Details
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-0 lg:space-x-0 w-full h-full bg-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-6  pl-16 flex-1 tracking-widest">
            <img
              src={Ashish}
              alt="Employer"
              className="rounded-full w-32 h-32 mb-4 border-4 border-gray-500"
            />
            <p className="text-2xl font-bold mb-2">Ashish Kumar Rai</p>
            <p className="text-xl mb-2 mt-9">Phone: +91 8830909543</p>
            <p className="text-xl">Email: sales.ffs@gmail.com</p>
          </div>

          <div className="flex flex-col p-6 flex-1 border-l border-gray-500">
            <h1 className="text-2xl font-bold mb-4">Address</h1>
            <p className="text-xl mt-9 tracking-widest">
              115 Narmada Society, Bhupesh Nagar, Katol Road, Nagpur<br /><br />
              Branch Office: 32 B Near Bank of Baroda,<br /><br />
              Anant Nagar, Katol Road, Nagpur,<br /><br />
              Maharashtra 440013
            </p>
          </div>

          <div name="location" className="flex flex-col items-start p-6 flex-1 border-l border-gray-500">
            <h1 className="text-2xl font-bold mb-14">Location</h1>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.2937341212187!2d79.0571514752608!3d21.18048728050714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzQ5LjgiTiA3OcKwMDMnMzUuMCJF!5e0!3m2!1sen!2sin!4v1718536809620!5m2!1sen!2sin" 
              className="w-full h-60 rounded-lg border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
