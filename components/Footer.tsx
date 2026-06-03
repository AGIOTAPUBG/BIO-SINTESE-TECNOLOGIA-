import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language?.substring(0, 2) || 'pt';

  const getLinkPath = (path: string) => {
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  return (
    <footer className="bg-naxxos-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-naxxos-red to-naxxos-orange flex items-center justify-center mr-3">
                <span className="text-white font-display font-bold text-sm">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-md tracking-wider leading-none">BIO SÍNTESE</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-naxxos-red transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-naxxos-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-naxxos-red transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><Link to={getLinkPath('/about')} className="text-slate-400 hover:text-white text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to={getLinkPath('/systems')} className="text-slate-400 hover:text-white text-sm transition-colors">{t('nav.systems')}</Link></li>
              <li><Link to={getLinkPath('/security')} className="text-slate-400 hover:text-white text-sm transition-colors">{t('nav.security')}</Link></li>
              <li><Link to={getLinkPath('/contact')} className="text-slate-400 hover:text-white text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">LGPD Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{t('footer.transparency')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-naxxos-red mr-3 mt-0.5" />
                <span className="text-slate-400 text-sm">Tech Park Corporate Center<br/>Brasília, DF - Brazil</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-naxxos-red mr-3" />
                <span className="text-slate-400 text-sm">contact@biosintese.tech</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-naxxos-red mr-3" />
                <span className="text-slate-400 text-sm">+55 (61) 3000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} BIO SÍNTESE - TECNOLOGIA. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0">
             <span className="text-slate-600 text-xs">{t('footer.dev')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;