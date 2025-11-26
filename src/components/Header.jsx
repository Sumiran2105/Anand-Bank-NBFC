import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown states
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ⭐ UPDATED NAV ITEMS
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },

    // NEW LOANS DROPDOWN
    {
      label: "Loans",
      type: "dropdown",
      submenu: [
        { path: "/personal-loan", label: "Personal Loan" },
        { path: "/business-loan", label: "Business Loan" },
        { path: "/investment", label: "Investment Plans" },
        { path: "/financial-advice", label: "Financial Advisors" },
      ],
    },

    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;
  const isDropdownActive = (submenu) =>
    submenu.some((s) => s.path === location.pathname);

 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  
  useEffect(() => {
    setIsMenuOpen(false);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
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
         {/* LOGO */}
<Link
  to="/"
  className="flex items-center space-x-2 md:space-x-3 group overflow-hidden whitespace-nowrap"
>
  {/* Founder Image - Smaller on mobile */}
  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm flex-shrink-0">
    <img
      src="/assets/founder.jpg"
      alt="Founder"
      className="w-full h-full object-cover object-top"
    />
  </div>

  {/* LOGO + TEXT */}
  <div className="flex items-center space-x-2 flex-shrink overflow-hidden">
    <img
      src="assets/Anandhlogo.png"
      alt="Anand Logo"
      className="w-6 h-8 md:w-10 md:h-12 object-contain flex-shrink-0"
    />

    <div className="flex flex-col items-start leading-tight overflow-hidden">
      <h1 className="text-sm md:text-xl font-bold text-blue-800 truncate">
        <span className="text-orange-500">ANAND </span>
        BANK NBFC
      </h1>
      <p className="text-[10px] md:text-xs text-gray-600 italic truncate">
        "Dharmo Rakshati Rakshitah"
      </p>
    </div>
  </div>
</Link>


          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-4">

            {navItems.map((item) =>
              item.type !== "dropdown" ? (
                /* Normal Desktop Links */
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    isActiveLink(item.path)
                      ? "text-blue-700 bg-blue-100 border border-blue-200"
                      : "text-blue-800 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                /* LOANS DROPDOWN */
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                    className={`
                      px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition
                      ${
                        desktopDropdownOpen || isDropdownActive(item.submenu)
                          ? "text-blue-700 bg-blue-100 border border-blue-200"
                          : "text-blue-800 hover:bg-blue-50"
                      }
                    `}
                  >
                    {item.label}
                    <span
                      className={`transition-transform duration-300 ${
                        desktopDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {desktopDropdownOpen && (
                    <div
                      className="
                        absolute left-0 top-12 w-60 py-3 bg-white shadow-xl rounded-xl
                        border border-gray-200 z-50
                      "
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="
                            block px-4 py-2.5 text-blue-900 rounded-lg
                            hover:bg-blue-50 transition
                          "
                          onClick={() => setDesktopDropdownOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-blue-700 text-4xl p-2"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-2 pt-3">

              {navItems.map((item) =>
                item.type !== "dropdown" ? (
                  /* Normal Mobile Link */
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  /* MOBILE LOANS DROPDOWN */
                  <div key={item.label} className="px-4">
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="py-3 text-left font-semibold w-full"
                      >
                        {item.label}
                      </button>

                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="p-3 text-xl"
                      >
                        <span
                          className={`transition-transform ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                    </div>

                    {mobileDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                            onClick={() => {
                              setTimeout(() => {
                                setIsMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }, 120);
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
