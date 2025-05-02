import { createContext, useState } from "react";
import { HeroSection } from "./components/heroSection";
import FooterSection from "./components/footerSection";
import ProfilSection from "./components/profilSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import data from "./store/data.json";
import { ToastContainer, Zoom } from "react-toastify";

export const languageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  const lang = data[language];

  return (
    <languageContext.Provider value={{ language, setLanguage, lang }}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <>
        <HeroSection />
        <SkillsSection />
        <ProfilSection />
        <ProjectsSection />
        <FooterSection />
      </>
    </languageContext.Provider>
  );
}

export default App;
