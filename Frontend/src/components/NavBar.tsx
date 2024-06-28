import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

//Import Needed Icons
import { Category2, CloseCircle } from "iconsax-react";
import Dropdown from "./connectWallet/Dropdown";
import { useAccount, useDisconnect } from 'wagmi'

const NavBar = () => {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const location = useLocation();

  return (
    <main className="relative">
      <div className="flex justify-between items-center md:text-sm xl:text-base py-6 md:py-8 px-5 sm:px-10 md:px-15 xl:px-20">
        <Link to="/" className="text-xl md:text-2xl xl:text-3xl font-bold">
          Brandts
        </Link>
        <div className="md:hidden">
          <Category2
            size="28"
            onClick={toggleMenu}
            className="text-primaryBlue cursor-pointer"
          />
        </div>
        <div
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static top-0 left-0 w-72 p-4 md:p-0 md:w-auto h-full md:h-auto bg-primaryBlue md:bg-white transition-transform duration-300 ease-in-out z-50`}
        >
          <CloseCircle size="32" variant="Bold" className="md:hidden absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}/>

          <nav className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:items-center md:gap-x-3 xl:gap-x-5 mt-20 md:mt-0">
            <Link
              to="create"
              className={`${location.pathname === "/campaign/create" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              Create Campaign
            </Link>
            <Link
              to="view"
              className={`${location.pathname === "/view" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              View Campaign
            </Link>
            <Link
              to="dashboard"
              className={`${location.pathname === "/dashboard" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              Dashboard
            </Link>
            <div className="border-b-2 border-black my-4 md:hidden"></div>
            <div className="relative">
              {
                account.status != 'connected'
                  ?
                  (<button
                    className="px-5 p-3 bg-white text-black md:text-white md:bg-primaryBlue border-2 md:border-primaryBlue md:hover:border-primaryBlue md:hover:text-inherit hover:border-white hover:text-white hover:bg-inherit rounded-xl hover:rounded-3xl duration-300"
                    onClick={toggleDropdown}
                  >
                    Connect Wallet
                  </button>)
                  :
                  (
                    <div style={{ display: 'flex', alignItems: 'center' }}> {/* Use inline styles for custom spacing */}
                      <p style={{ marginRight: '10px' }}>{account.address}</p> {/* Adjust marginRight for more spacing */}
                      <button
                        className="px-5 p-3 bg-white text-black md:text-white md:bg-primaryBlue border-2 md:border-primaryBlue md:hover:border-primaryBlue md:hover:text-inherit hover:border-white hover:text-white hover:bg-inherit rounded-xl hover:rounded-3xl duration-300"
                        onClick={() => {
                          disconnect();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Disconnect Wallet
                      </button>
                    </div>
                  )
              }
              {isDropdownOpen && account.status != 'connected' && (
                <div className="absolute right-0 mt-2 w-full z-10">
                  <Dropdown />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleMenu}
        ></div>
      )}
    </main>
  );
};

export default NavBar;