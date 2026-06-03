import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Systems from './pages/Systems';
import Security from './pages/Security';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Syncs URL param :lang with i18n
const LanguageHandler = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['pt', 'en', 'es'].includes(lang)) {
       // Defensive check: ensure i18n is initialized and has changeLanguage method
       if (i18n && typeof i18n.changeLanguage === 'function') {
         if (i18n.language !== lang) {
           i18n.changeLanguage(lang);
         }
       }
    }
  }, [lang, i18n]);

  return <Outlet />;
};

// Redirects root "/" to the detected language or default
const RootRedirect = () => {
  const { i18n } = useTranslation();
  
  // Determine best language from i18n state (which includes detection)
  let targetLang = 'pt';
  if (i18n && i18n.language) {
    if (i18n.language.startsWith('en')) targetLang = 'en';
    else if (i18n.language.startsWith('es')) targetLang = 'es';
    else if (i18n.language.startsWith('pt')) targetLang = 'pt';
  }

  return <Navigate to={`/${targetLang}`} replace />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        
        <Route path="/:lang" element={<LanguageHandler />}>
          <Route element={<Layout><Outlet /></Layout>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="systems" element={<Systems />} />
            <Route path="security" element={<Security />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>

        {/* Catch-all for unknown routes -> redirect to default home */}
        <Route path="*" element={<Navigate to="/pt" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;