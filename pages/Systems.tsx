import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SYSTEMS } from '../constants';
import { useTranslation } from 'react-i18next';

const Systems: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="bg-naxxos-black py-20 px-4">
         <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('nav.systems')} & {t('systems.label')}</h1>
            <p className="text-lg text-slate-400">
                {t('systems.title')}
            </p>
         </div>
      </div>

      <Section darker>
        <div className="grid grid-cols-1 gap-12">
            {SYSTEMS.map((system, index) => (
                <div key={system.id} className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-naxxos-red/30 transition-all duration-300 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 p-6 bg-naxxos-black rounded-lg border border-slate-800 shadow-lg">
                        <system.icon className="h-16 w-16 text-naxxos-red" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                             <h3 className="text-2xl font-display font-bold text-white">{t(system.title)}</h3>
                             <span className="px-2 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">v3.0</span>
                        </div>
                        <h4 className="text-naxxos-orange font-medium mb-4">{t(system.subtitle)}</h4>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t(system.description)}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {/* Mock tags based on description context */}
                            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Secure API</span>
                            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Cloud Native</span>
                            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Real-time</span>
                        </div>
                        <Button variant="outline" className="text-sm px-4 py-2">{t('systems.request_demo')}</Button>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Systems;