import React from 'react';
import Section from '../components/Section';
import { Shield, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
       {/* Header */}
       <div className="bg-naxxos-dark py-20 px-4 border-b border-slate-800">
         <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">{t('about_page.title')}</h1>
            <p className="text-xl text-slate-400">
                {t('about_page.subtitle')}
            </p>
         </div>
       </div>

       <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">{t('about_page.who_title')}</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p>{t('about_page.p1')}</p>
                    <p>{t('about_page.p2')}</p>
                    <p>{t('about_page.p3')}</p>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                    <h3 className="text-4xl font-bold text-naxxos-red mb-2">50+</h3>
                    <p className="text-sm text-slate-400">{t('about_page.integrations')}</p>
                 </div>
                 <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                    <h3 className="text-4xl font-bold text-naxxos-orange mb-2">99.9%</h3>
                    <p className="text-sm text-slate-400">{t('about_page.uptime')}</p>
                 </div>
                 <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 sm:col-span-2">
                    <h3 className="text-4xl font-bold text-white mb-2">ISO/LGPD</h3>
                    <p className="text-sm text-slate-400">{t('about_page.standards')}</p>
                 </div>
             </div>
          </div>
       </Section>

       <Section darker>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 bg-black/40 border border-slate-800 rounded-lg text-center">
                   <Target className="h-12 w-12 text-naxxos-red mx-auto mb-6" />
                   <h3 className="text-xl font-bold text-white mb-4">{t('about_page.mission')}</h3>
                   <p className="text-slate-400 text-sm">{t('about_page.mission_desc')}</p>
               </div>
               <div className="p-8 bg-black/40 border border-slate-800 rounded-lg text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-naxxos-red to-naxxos-orange"></div>
                   <Shield className="h-12 w-12 text-white mx-auto mb-6" />
                   <h3 className="text-xl font-bold text-white mb-4">{t('about_page.values')}</h3>
                   <p className="text-slate-400 text-sm">{t('about_page.values_desc')}</p>
               </div>
               <div className="p-8 bg-black/40 border border-slate-800 rounded-lg text-center">
                   <Users className="h-12 w-12 text-naxxos-orange mx-auto mb-6" />
                   <h3 className="text-xl font-bold text-white mb-4">{t('about_page.vision')}</h3>
                   <p className="text-slate-400 text-sm">{t('about_page.vision_desc')}</p>
               </div>
           </div>
       </Section>
    </div>
  );
};

export default About;