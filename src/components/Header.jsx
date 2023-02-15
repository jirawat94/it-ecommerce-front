import React from "react";
import BasketIcon from "../assets/icon/basket.png";
import SinginIcon from "../assets/icon/Vector.png";
import iconMenu from "../assets/icon/iconMenu.png";

const Header = () => {
  return (
    <header className="h-24 bg-white-500 flex items-center">
      <div className="container 2xl mx-auto flex flex-row justify-between items-center ">
        <h1>Jirashop</h1>
        <form className="basis-1/2">
          <input
            type="search"
            className="w-11/12 h-16 rounded-2xl bg-gray-100 hover:bg-gray-200 pl-4"
            value="Search here..."
          />
          <button
            type="submit"
            className=" mt-3 mr-4 relative right-10 w-10"
            style={{ backgroundColor: "#FF8C00" }}
          ></button>
        </form>
        <div className="flex flex-row basis-1/4 justify-between items-center">
          <img src={iconMenu} className="w-8" />
          <img src={BasketIcon} className="w-8" />
          <button className="right bg-orange-500 w-64 h-18 rounded-xl">
            <img src={SinginIcon} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
