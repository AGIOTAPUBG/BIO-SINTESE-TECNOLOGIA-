import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your interest in BIO SÍNTESE - TECNOLOGIA. A specialist will contact you shortly.');
    setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: 'General Inquiry',
        message: ''
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-6">{t('contact.title')}</h1>
            <p className="text-slate-400 text-lg mb-8">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mr-4">
                  <MapPin className="h-6 w-6 text-naxxos-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t('contact.hq')}</h3>
                  <p className="text-slate-400 text-sm">Tech Park Corporate Center</p>
                  <p className="text-slate-400 text-sm">Sector 4, Building B - Brasília, DF</p>
                  <p className="text-slate-400 text-sm">Brazil</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mr-4">
                  <Mail className="h-6 w-6 text-naxxos-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t('contact.email')}</h3>
                  <p className="text-slate-400 text-sm">Business: business@biosintese.tech</p>
                  <p className="text-slate-400 text-sm">Support: support@biosintese.tech</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 mr-4">
                  <Phone className="h-6 w-6 text-naxxos-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t('contact.call')}</h3>
                  <p className="text-slate-400 text-sm">+55 (61) 3000-0000</p>
                  <p className="text-slate-500 text-xs mt-1">Mon-Fri, 9am - 6pm (GMT-3)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">{t('contact.form_title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.company')}</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.corporate_email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.area')}</label>
                <select 
                  name="interest"
                  value={formState.interest}
                  onChange={handleChange}
                  className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Government Systems</option>
                  <option>Financial Solutions (REG/SIBAVEC)</option>
                  <option>Data Intelligence</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">{t('contact.message')}</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-naxxos-black border border-slate-700 rounded p-3 text-white focus:border-naxxos-red focus:ring-1 focus:ring-naxxos-red outline-none transition-colors"
                ></textarea>
              </div>

              <Button type="submit" className="w-full justify-center">
                <Send className="mr-2 h-4 w-4" /> {t('contact.submit')}
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                {t('contact.disclaimer')}
              </p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;