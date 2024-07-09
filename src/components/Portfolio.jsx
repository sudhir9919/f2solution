import React from "react";
import Finance from "../assets/portfolio/Finance.jpg";
import insurance from "../assets/portfolio/insurance.jpg";
import loan from "../assets/portfolio/loan.jpg";
import homeloan from "../assets/portfolio/homeloan.jpg";
import mudra from "../assets/portfolio/mudra.jpg";
import msme from "../assets/portfolio/msme.jpg";
import subsidary from "../assets/portfolio/subsidary.jpeg";
import solar from "../assets/portfolio/solar.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Finance,
      // link: 'https://crypto-info-api.cyclic.app/',
      // repo: 'https://github.com/rahulkarda/crypto-info-api'
    },
    {
      id: 2,
      src: loan,
      // link: 'https://webpostman.netlify.app/',
      // repo: 'https://github.com/rahulkarda/Web-Postman'
    },
    {
      id: 3,
      src: insurance,
      // link: 'https://apodbyrahul.netlify.app/',
      // repo: 'https://github.com/rahulkarda/NASA-APOD'
    },
    {
      id: 4,
      src: homeloan,
      // link: 'https://waveatrahul.netlify.app/',
      // repo: 'https://github.com/rahulkarda/Wave-Portal'
    },
    {
      id: 5,
      src: mudra,
      // link: 'https://nftportalbyrahul.netlify.app/',
      // repo: 'https://github.com/rahulkarda/NFT-Portal'
    },
    {
      id: 6,
      src: msme,
      // link: 'https://trackmyip.netlify.app/',
      // repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
    {
      id: 7,
      src: subsidary,
      // link: 'https://trackmyip.netlify.app/',
      // repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
    {
      id: 8,
      src: solar,
      // link: 'https://trackmyip.netlify.app/',
      // repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
    // {
    //   id: 7,
    //   src: Solar Financing,
    //   link: 'https://trackmyip.netlify.app/',
    //   repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    // },
    // {
    //   id: 8,
    //   src: Subsidy loan,
    //   link: 'https://trackmyip.netlify.app/',
    //   repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    // },
  ];

  return (
    <div
      name="Service"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 " >
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 w h-full"
              />
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
