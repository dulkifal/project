import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import s from "./comp.module.css";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinksData = [
    { title: "الرئيسة", path: "/" },
    { title: "اسأل", path: "/fatwa/ask" },
    { title: "المقالات", path: "/article" },
    { title: "الفتاوى", path: "/fatwa" },
    { title: "المسائل", path: "/masael" },
    { title: "نبذة عنا", path: "/about" },
    { title: "مشرف", path: "/admin/login" },
  ];

  return (
    <nav className={s.navbar} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">التفقه</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-center space-x-4 space-x-reverse">
              {navLinksData.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    router.pathname === link.path
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <Search />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinksData.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                router.pathname === link.path
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <div className="mt-4">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Search = () => {
  const router = useRouter();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/fatwa/search?term=${term}`);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="كلمة البحث"
        className="w-full md:w-64 px-4 py-2 text-sm text-right rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

export default Navbar;
