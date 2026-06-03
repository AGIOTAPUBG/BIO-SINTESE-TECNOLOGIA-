import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ECOSYSTEMS, SYSTEMS, DIFFERENTIALS } from '../constants';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language?.substring(0, 2) || 'pt';

  const getLinkPath = (path: string) => {
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-naxxos-black pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-naxxos-black via-transparent to-naxxos-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-naxxos-red/10 via-transparent to-transparent opacity-50" />
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-naxxos-red/30 bg-naxxos-red/5 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-naxxos-red animate-pulse"></span>
            <span className="text-xs text-naxxos-red font-medium tracking-wide uppercase">{t('hero.pill')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
            {t('hero.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-naxxos-red to-naxxos-orange">{t('hero.title_struct')}</span>
            {t('hero.title_2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-naxxos-orange to-white">{t('hero.title_trans')}</span> {t('hero.title_3')}
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 font-light">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={getLinkPath('/systems')}>
              <Button icon>{t('hero.cta_explore')}</Button>
            </Link>
            <Link to={getLinkPath('/contact')}>
              <Button variant="outline">{t('hero.cta_talk')}</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SUMMARY SECTION */}
      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-naxxos-red font-bold tracking-widest uppercase text-sm mb-2">{t('about_summary.label')}</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{t('about_summary.title')}</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {t('about_summary.text')}
            </p>
            <Link to={getLinkPath('/about')} className="inline-flex items-center text-naxxos-orange hover:text-white transition-colors font-medium">
              {t('about_summary.link')} <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-naxxos-red to-naxxos-orange rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="text-center">
                    <span className="block text-6xl font-display font-bold text-white mb-2">10M+</span>
                    <span className="text-slate-400">{t('about_summary.stat')}</span>
                </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ECOSYSTEMS SECTION */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t('ecosystems.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('ecosystems.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ECOSYSTEMS.map((eco, index) => (
            <div key={index} className="group p-6 bg-slate-900/50 border border-slate-800 hover:border-naxxos-red/50 rounded-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-naxxos-red group-hover:text-white transition-colors text-naxxos-red">
                <eco.icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-bold mb-2 text-sm">{t(eco.title)}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* KEY SYSTEMS PREVIEW */}
      <Section darker>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-naxxos-red font-bold tracking-widest uppercase text-sm mb-2">{t('systems.label')}</h2>
             <h3 className="text-3xl md:text-4xl font-display font-bold text-white">{t('systems.title')}</h3>
          </div>
          <Link to={getLinkPath('/systems')} className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors">
            {t('systems.view_all')} <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEMS.slice(0, 4).map((sys) => (
            <div key={sys.id} className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <sys.icon className="h-8 w-8 text-naxxos-orange" />
                <span className="text-xs text-slate-500 font-mono">{sys.id.toUpperCase()}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{t(sys.title)}</h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">{t(sys.description)}</p>
              <Link to={getLinkPath('/systems')} className="text-naxxos-red text-sm font-medium hover:underline">{t('systems.learn_more')}</Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to={getLinkPath('/systems')}>
              <Button variant="secondary" className="w-full">{t('systems.view_all')}</Button>
            </Link>
        </div>
      </Section>

      {/* COMPETITIVE ADVANTAGES */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{t('differentials.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIFFERENTIALS.slice(0, 3).map((diff, i) => (
                <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-naxxos-red/10 flex items-center justify-center text-naxxos-red border border-naxxos-red/20">
                            <diff.icon className="h-5 w-5" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-1">{t(diff.title)}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{t(diff.description)}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default Home;