import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  // Close login form on body click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const form = document.getElementById("loginForm");
      const button = document.getElementById("loginButton");

      if (form) {
        setIsLoginFormVisible(false);
      }
    };

    if (isLoginFormVisible) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isLoginFormVisible]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setUser(name);
    setIsLoginFormVisible(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div
          className="container mx-auto flex justify-between
      items-center px-2 py-4 md:px-10 lg:px-32 bg-transparent"
        >
          <div className="flex flex-row">
            <img src={assets.logo_dark} alt="Logo" className="w-12 h-10" />
            <h1 className="text-white text-3xl font-bold font-dancing-script tracking-wider px-2">
              Nirvana
            </h1>
          </div>
          <ul className="hidden md:flex gap-7 text-white font-roboto">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </ul>
          <div className="flex items-center gap-4">
            <button
              id="loginButton"
              onClick={(e) => {
                e.stopPropagation(); // Prevent body click from firing
                setIsLoginFormVisible(true);
              }}
              className="md:block bg-white px-8 py-2 rounded-full lg:block hidden"
            >
              Login
            </button>
            {user && (
              <span className="text-white absolute right-0 px-3 sm:ps-8 lg:block hidden">
                {user}
              </span>
            )}
          </div>
          <img
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt="Menu Icon"
          />
        </div>
        {/* Mobile Menu */}

        <div
          className={`md:hidden fixed top-0 bottom-0 transition-all duration-500 ease-in-out
    ${
      showMenu
        ? "right-0 w-full bg-cover bg-center"
        : "-right-full w-0 bg-transparent"
    } Mobile-overlay-menu`}
          style={{
            backgroundImage: showMenu
              ? "url(https://media.istockphoto.com/id/471493324/photo/modern-australian-home.jpg?s=612x612&w=0&k=20&c=MPIJqofNobYaKD418X3IYXX3_Etj1DIJz4wo6RWVdKo=)"
              : "",
          }}
        >
          {showMenu && (
            <div className="absolute inset-0 bg-black opacity-50"></div>
          )}
          <div className="flex justify-between flex-row p-6 cursor-pointer">
            {/* <a className="z-10" href="#"> <span className="text-white mx-auto ">Welcome, {user}</span></a>  */}
            <a className="z-10" href="#">
              {" "}
              {user && <span className="text-white  ">Welcome, {user}</span>}
            </a>
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-6 z-10"
              alt="Close Icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setShowMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block text-white z-10"
            >
              Home
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block text-white z-10"
            >
              About
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block text-white z-10"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block text-white z-10"
            >
              Testimonials
            </a>

            <a
              id="loginButton"
              onClick={(e) => {
                e.stopPropagation(); // Prevent body click from firing
                setIsLoginFormVisible(true);
              }}
              className="md:block bg-white px-8 py-2 rounded-full  z-10 "
            >
              Login
            </a>
          </ul>
        </div>
      </div>

      {/* login Form */}
      {isLoginFormVisible && (
        <section
          id="loginForm"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className="w-full max-w-md bg-white rounded-lg shadow p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl font-bold mb-4">Log in to access your account</h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {/* <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div> */}
              <div className="flex items-start">
                {/* <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div> */}
                {/* <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div> */}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p> */}
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
