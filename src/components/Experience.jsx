import React from "react";

import CERT1 from "../assets/CERT1.jpeg";
import CERT2 from "../assets/CERT2.jpeg";
import CERT3 from "../assets/CERT3.jpeg";
import CERT4 from "../assets/CERT4.jpeg";
import CERT5 from "../assets/CERT5.jpg";
import CERT6 from "../assets/CERT6.jpg";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: CERT1,
      title: "ONBOARD",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CERT2,
      title: "EXCELLENCE",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: CERT3,
      title: "Achievements",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: CERT4,
      title: "Appreciation",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: CERT5,
      title: "Welcome certificate",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: CERT6,
      title: "Taxation",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="Achievements"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Achievements
          </p>
          <p className="py-6">Achievements earned by Financial Frontier solutions.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className={`${
                  id === 1 ? "h-full object-cover rounded-lg" : "w-25 h-13 mx-auto"
                }`}
              />
              <p className="pt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
