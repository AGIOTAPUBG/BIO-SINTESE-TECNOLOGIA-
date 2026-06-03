import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  // Get lang from URL, fallback to i18n or 'pt'
  const params = useParams();
  const currentLang = params.lang || i18n.language?.substring(0, 2) || 'pt';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const switchLanguage = (targetLang: string) => {
    // Construct new path by replacing the language segment
    // Assumes path starts with /:lang
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // If we are at root or just /:lang
    if (pathSegments.length === 0) {
        navigate(`/${targetLang}`);
        return;
    }

    // Replace the first segment (lang) with targetLang
    pathSegments[0] = targetLang;
    navigate(`/${pathSegments.join('/')}`);
  };

  const getLinkPath = (path: string) => {
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  const isLinkActive = (path: string) => {
    const linkPath = getLinkPath(path);
    // Exact match or handle the root case specifically if needed
    return location.pathname === linkPath;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-naxxos-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex-shrink-0 flex items-center group">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-naxxos-red to-naxxos-orange flex items-center justify-center mr-3 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-display font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-md tracking-wider leading-none mb-1">BIO SÍNTESE</span>
              <span className="text-naxxos-accent text-[9px] tracking-[0.15em] font-bold">TECNOLOGIA</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={getLinkPath(item.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    isLinkActive(item.path)
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t(item.label)}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-naxxos-red transform transition-transform duration-300 origin-left ${
                    isLinkActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Language / Action */}
          <div className="hidden md:flex items-center space-x-4">
             <div className="flex items-center bg-slate-800/50 rounded-lg p-1 border border-slate-700">
               <button 
                onClick={() => switchLanguage('pt')} 
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${currentLang === 'pt' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:text-white'}`}
               >
                 PT
               </button>
               <div className="w-px h-3 bg-slate-700 mx-1"></div>
               <button 
                onClick={() => switchLanguage('en')} 
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${currentLang === 'en' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:text-white'}`}
               >
                 EN
               </button>
               <div className="w-px h-3 bg-slate-700 mx-1"></div>
               <button 
                onClick={() => switchLanguage('es')} 
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${currentLang === 'es' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:text-white'}`}
               >
                 ES
               </button>
             </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-naxxos-black border-b border-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={getLinkPath(item.path)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isLinkActive(item.path)
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
          <div className="flex items-center space-x-2 px-3 py-4 border-t border-slate-800 mt-2">
               <button 
                onClick={() => switchLanguage('pt')} 
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${currentLang === 'pt' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:bg-slate-800'}`}
               >
                 PT
               </button>
               <button 
                onClick={() => switchLanguage('en')} 
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${currentLang === 'en' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:bg-slate-800'}`}
               >
                 EN
               </button>
               <button 
                onClick={() => switchLanguage('es')} 
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${currentLang === 'es' ? 'bg-naxxos-red text-white' : 'text-slate-400 hover:bg-slate-800'}`}
               >
                 ES
               </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;