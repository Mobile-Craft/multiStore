import React, { useEffect, useState } from 'react';

interface HeaderProps {
  storeName: string;
  logoUrl: string;
  categories: string[];
  onSearch: (query: string) => void;
  onFilterByCategory: (category: string) => void;
  selectStyle: string;
}

const Header: React.FC<HeaderProps> = ({
  storeName,
  logoUrl,
  categories,
  onSearch,
  onFilterByCategory,
  selectStyle
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos los productos');
  const [scrolled, setScrolled] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full p-4 flex items-center justify-between z-50 shadow-md transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-sm ' : 'bg-white opacity-100'
          }`}
      >
        {/* Logo + Store Name */}
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-lg font-semibold text-gray-800">{storeName}</h1>
        </div>

        <div className="hidden md:flex items-center ">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`flex-1 text-center px-4 py-2 mx-2 rounded-md transition ${activeCategory === cat ? selectStyle : 'hover:bg-blue-100 text-gray-700'}`}
              onClick={() => {
                setActiveCategory(cat);
                if (typeof onFilterByCategory === 'function') {
                  onFilterByCategory(cat);
                }
                setDrawerOpen(false);
              }}
            >
              {cat.length > 15 ? `${cat.slice(0, 10)}` : cat}
            </button>
          ))}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setDrawerOpen(!drawerOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300">
          <h2 className="text-2xl font-semibold">Categorías</h2>
          <button onClick={() => setDrawerOpen(false)}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto h-full animate-fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`block w-full text-left px-4 py-2 rounded-md transition ${activeCategory === cat ? selectStyle : 'hover:bg-blue-100 text-gray-700'
                }`}
              onClick={() => {
                setActiveCategory(cat);
                if (typeof onFilterByCategory === 'function') {
                  onFilterByCategory(cat);
                }
                setDrawerOpen(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0  bg-black opacity-70 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
