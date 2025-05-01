import { createContext, useState } from "react";
import { FirstSection } from "./components/firstSection";
import FooterSection from "./components/footerSection";
import ProfilSection from "./components/profilSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import { languages } from "./data";

export const languageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  const sayi = "21";

  const lang = languages[language];

  return (
    <languageContext.Provider value={{ language, setLanguage, sayi, lang }}>
      <>
        <FirstSection />
        <SkillsSection />
        <ProfilSection />
        <ProjectsSection />
        <FooterSection />
      </>
    </languageContext.Provider>
  );
}

export default App;
