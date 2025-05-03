import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useDarkmode = (language) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("darkMode") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "orange");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("darkMode", newTheme);

    toast.success(
      language === "tr"
        ? `Tema ${newTheme === "dark" ? "koyu" : "açık"} moda ayarlandı!`
        : `Theme set to ${newTheme === "dark" ? "dark" : "light"} mode!`
    );
  };

  const setOrangeTheme = () => {
    setTheme("orange");
    localStorage.setItem("darkMode", "orange");
  };

  return { theme, toggleTheme, setOrangeTheme };
};
