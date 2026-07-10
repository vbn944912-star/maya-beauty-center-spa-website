import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';

type Locale = 'en' | 'ar';

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, variables?: Record<string, string>) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('maya_language');
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('maya_language', newLocale);
  };

  useEffect(() => {
    // Update HTML attributes dynamically for RTL / LTR layout support
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string, variables?: Record<string, string>): string => {
    const dict = TRANSLATIONS[locale] || TRANSLATIONS['en'];
    let text = (dict as any)[key] || (TRANSLATIONS['en'] as any)[key] || key;
    
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
    }
    return text;
  };

  const isRtl = locale === 'ar';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
