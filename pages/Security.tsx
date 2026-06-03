import React from 'react';
import Section from '../components/Section';
import { DIFFERENTIALS } from '../constants';
import { Lock, ShieldCheck, FileCheck, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Security: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('security.hero_title')}</h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg">
           {t('security.hero_desc')}
        </p>
      </Section>

      {/* Differentials Grid */}
      <Section darker>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((diff, i) => (
                <div key={i} className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:bg-slate-900 transition-colors">
                    <diff.icon className="h-8 w-8 text-naxxos-red mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{t(diff.title)}</h3>
                    <p className="text-slate-400 text-sm">{t(diff.description)}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Deep Dive Security */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Lock className="mr-3 text-naxxos-orange" /> {t('security.sec_info')}
                </h2>
                <p className="text-slate-400 mb-4">
                    {t('security.sec_info_desc')}
                </p>
                <ul className="list-disc pl-5 text-slate-500 space-y-2">
                    <li>AES-256 Encryption</li>
                    <li>Multi-Factor Authentication (MFA) enforcement</li>
                    <li>Zero-Trust Network Architecture</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FileCheck className="mr-3 text-naxxos-orange" /> {t('security.lgpd')}
                </h2>
                <p className="text-slate-400 mb-4">
                    {t('security.lgpd_desc')}
                </p>
                <ul className="list-disc pl-5 text-slate-500 space-y-2">
                    <li>Anonymization of sensitive data</li>
                    <li>Granular access control policies</li>
                    <li>Automated compliance reporting</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Server className="mr-3 text-naxxos-orange" /> {t('security.cloud')}
                </h2>
                <p className="text-slate-400 mb-4">
                    {t('security.cloud_desc')}
                </p>
            </div>
             <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <ShieldCheck className="mr-3 text-naxxos-orange" /> {t('security.audit')}
                </h2>
                <p className="text-slate-400 mb-4">
                    {t('security.audit_desc')}
                </p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Security;