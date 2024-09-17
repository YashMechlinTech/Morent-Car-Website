import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap  items-center justify-between p-4 bg-white">
        <div className="left  w-3/12 ">
          <h1 className=" font-bold text-lg md:text-xl font-[Plus Jakarta Sans] " style={{color:'#FF90BC'}}>
            MORENT™
          </h1>
          <p className="text-lg text-gray-500">
            Our vision is to provide convenience and help increse your sales
            your sales business.
          </p>
        </div>
        <div className="right flex  flex-wrap w-5/12 h-full justify-end mr-16 gap-7">
          <div className="flex flex-col items-left justify-center">
            <h1 className="font-bold text-lg ml-2 text-[rgb(26, 32, 44)]">
              About
            </h1>
            <ul className="text-gray-500 mt-4 ">
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Partnership</a>
              </li>
              <li>
                <a href="#">Business Relation</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-left justify-center">
            <h1 className="font-bold text-lg  text-[rgb(26, 32, 44)]">
              Community
            </h1>
            <ul className="text-gray-500 mt-4">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Invite a friend</a>
              </li>
            
            </ul>
          </div>
          <div className="flex flex-col items-left justify-center">
            <h1 className="font-bold text-lg  text-[rgb(26, 32, 44)]">
              Socials
            </h1>
            <ul className="text-gray-500 mt-4">
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className="h-1 border-black"/> */}
        {/* <div style={{border:''}}> */}
      </div>

      <hr />
      <div className="flex flex-wrap p-4 w-full justify-between ">
        <div className="leftsection text-[Plus Jakarta Sans] font-medium justify-start w-1/3"><p>©2022 MORENT.All rights reserved</p></div>
        <div className="rightsection flex flex-wrap mr-[20px] gap-7 text-[Plus Jakarta Sans] font-medium">
          <a href="">Privacy and policy</a>
          <a href="">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
