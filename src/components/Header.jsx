import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    {
      label: "Services",
      type: "dropdown",
      submenu: [
        { path: "/personal-loan", label: "Personal Loan" },
        { path: "/business-loan", label: "Business Loan" },
        { path: "/investment", label: "Investment Plans" },
        { path: "/savings", label: "Savings & Deposits" },
        { path: "/financial-advice", label: "Financial Advisors" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  const isDropdownActive = (submenu) => {
    return submenu.some((sub) => location.pathname === sub.path);
  };

  useEffect(() => {
    if (isDropdownActive(navItems[1].submenu)) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 border-b ${
        isScrolled ? "shadow-md border-gray-300" : "border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="assets/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="assets/Anandhlogo.png"
                  alt="Anand Logo"
                  className="w-8 h-10 md:w-10 md:h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg md:text-xl font-bold text-blue-800">
                    <span className="text-orange-500">ANAND </span>BANK NBFC
                  </h1>
                  <p className="text-xs text-gray-600 italic mt-1">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 relative">
            {navItems.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDropdownOpen(!isDropdownOpen);
                      window.location.href = "/services";
                    }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    className={`px-4 py-2 font-semibold rounded-lg transition-all duration-200 ${
                      isDropdownActive(item.submenu)
                        ? "text-blue-700 bg-blue-100 border border-blue-200"
                        : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item.label} ▾
                  </button>

                  {isDropdownOpen && (
                    <div
                      className="absolute bg-white shadow-md border rounded-lg top-12 left-0 w-56 py-2"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block px-5 py-2 rounded-lg cursor-pointer transition ${
                            location.pathname === sub.path
                              ? "bg-blue-100 text-blue-700 font-semibold"
                              : "hover:bg-blue-50 text-gray-700"
                          }`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    isActiveLink(item.path)
                      ? "text-blue-700 bg-blue-100 border border-blue-200"
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-blue-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-2 pt-3">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="block w-full text-left px-4 py-3 font-medium bg-gray-50 rounded-lg"
                    >
                      {item.label} ▾
                    </button>

                    {isDropdownOpen && (
                      <div className="pl-6 space-y-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base rounded-lg hover:bg-blue-50"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
