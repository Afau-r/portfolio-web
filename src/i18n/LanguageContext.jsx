import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitialLang = () => {
  const stored = localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;

  const browserLang = navigator.language || navigator.languages?.[0] || "es";
  return browserLang.toLowerCase().startsWith("en") ? "en" : "es";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
