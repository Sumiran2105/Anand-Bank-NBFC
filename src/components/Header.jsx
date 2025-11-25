import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // separate desktop & mobile dropdown states
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    {
      label: "Services",
      type: "dropdown",
      submenu: [
        { path: "/personal-loan", label: "Personal Loan" },
        { path: "/business-loan", label: "Business Loan" },
        { path: "/investment", label: "Investment Plans" },
        { path: "/financial-advice", label: "Financial Advisors" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;
  const isDropdownActive = (submenu) =>
    submenu.some((s) => s.path === location.pathname);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click-outside (desktop only)
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close all menus on route change
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

          {/* ⭐ RESTORED OLD LOGO STYLE */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="/assets/founder.jpg"
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

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-3 relative">

            {navItems.map((item) =>
              item.type !== "dropdown" ? (
                
                /* NORMAL DESKTOP LINKS */
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
                /* DESKTOP SERVICES DROPDOWN (click-only) */
                <div key={item.label} className="relative flex items-center" ref={dropdownRef}>
  
  {/* LEFT PART → NAVIGATE TO SERVICES PAGE */}
  <button
    onClick={() => navigate("/services")}
    className={`px-4 py-2 font-semibold rounded-l-lg min-w-[120px] transition ${
      isDropdownActive(item.submenu)
        ? "bg-blue-100 border border-blue-200 text-blue-700"
        : "text-blue-800 hover:bg-blue-50"
    }`}
  >
    {item.label}
  </button>

  {/* RIGHT PART → OPEN/CLOSE DROPDOWN */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      setDesktopDropdownOpen(!desktopDropdownOpen);
    }}
    className={`px-2 py-2 rounded-r-lg border border-l-0 transition
      ${desktopDropdownOpen ? "bg-blue-100 border-blue-200" : "hover:bg-blue-50"}`}
  >
    <span
      className={`transition-transform duration-300 ${
        desktopDropdownOpen ? "rotate-180" : ""
      }`}
    >
      ▾
    </span>
  </button>

  {/* DROPDOWN MENU */}
  {desktopDropdownOpen && (
    <div className="
      absolute left-0 top-12 w-64 py-4
      bg-white/30 backdrop-blur-xl shadow-xl
      border border-white/40 rounded-2xl animate-glass-dropdown z-50
    ">
      {item.submenu.map((sub) => (
        <Link
          key={sub.path}
          to={sub.path}
          className="
            block px-5 py-2.5 mx-2 mb-1 rounded-xl
            hover:bg-white/40 transition text-blue-900
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

          {/* MOBILE HAMBURGER ICON */}
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
                  
                  /* NORMAL MOBILE LINKS */
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                ) : (
                  /* MOBILE SERVICES MENU */
                  <div key={item.label} className="px-4">

                    {/* SERVICES ROW */}
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg">

                      {/* TEXT → GO TO /services */}
                      <button
                        onClick={() => {
                          navigate("/services");
                          setIsMenuOpen(false);
                        }}
                        className="py-3 text-left font-semibold w-full"
                      >
                        {item.label}
                      </button>

                      {/* ARROW → OPEN SUBMENU */}
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

                    {/* MOBILE SUBMENU LIST */}
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
