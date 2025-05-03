import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useLanguageSwitch = (language, setLanguage) => {
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);

    toast.success(
      newLang === "tr"
        ? "Dil Türkçe'ye ayarlandı!"
        : "Language switched to English!"
    );
  };
  return { handleLanguageChange };
};
