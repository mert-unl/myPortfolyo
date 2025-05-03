import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { languageContext } from "../App.jsx";
import axios from "axios";
import { toast } from "react-toastify";

import dataLang from "../store/data.json";

export function HeroSection() {
  console.log("json:" + JSON.stringify(dataLang));

  const { language, setLanguage, lang } = useContext(languageContext);

  const initialTheme = localStorage.getItem("theme") || "light";

  //const localLang = localStorage.getItem("lang") || language;

  const [theme, setTheme] = useState(initialTheme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (language === "tr") {
      toast.success(
        `Tema ${newTheme === "dark" ? "koyu" : "açık"} moda ayarlandı!`
      );
    } else {
      toast.success(
        `Theme set to ${newTheme === "dark" ? "dark" : "light"} mode!`
      );
    }
  };

  const handleLanguageChange = () => {
    if (language === "en") {
      localStorage.setItem("lang", "tr");
      setLanguage("tr");
      toast.success("Dil Türkçe'ye ayarlandı!");
    } else {
      localStorage.setItem("lang", "en");
      setLanguage("en");
      toast.success("Language switched to English!");
    }
  };

  const handleOrange = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" || "dark" ? "orange" : "light"
    );

    localStorage.setItem("theme", theme === "light" ? "dark" : "light");

    setTheme("orange");
    document.documentElement.classList.add("orange");
  };

  const data = lang.heroSection;

  /*
  axios
    .post(
      "https://reqres.in/api/register",
      {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )
    .then((res) => {
      console.log("Kayıt başarılı:", res.data);
    })
    .catch((err) => {
      console.error("Kayıt hatası:", err.response?.data || err.message);
    });

  axios
    .post(
      "https://reqres.in/api/login",
      {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )
    .then((res) => {
      console.log("Giriş başarılı:", res.data);
    })
    .catch((err) => {
      console.error("Giriş hatası:", err.response?.data || err.message);
    }); */

  axios
    .post(
      "https://reqres.in/api/workintech",
      {
        dataLang,
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )
    .then((res) => {
      console.log("Workintech başarılı:", res.data);

      console.log(res.data.tr.heroSection.name);
    })
    .catch((err) => {
      console.error("Workintech hatası:", err.response?.data || err.message);
    });

  return (
    <section
      className={`bg-[linear-gradient(to_right,_var(--color-customBlue)_70%,_var(--color-customYellow)_33%)] flex flex-col h-screen font-[var(--font-inter)] items-center`}
    >
      <div className="flex flex-row ms-45 md:ms-158 justify-center font-bold text-sm mt-6  space-x-5">
        <p
          onClick={handleLanguageChange}
          className="text-[var(--color-customLang1)] cursor-pointer gap-1  flex flex-col sm:flex-row"
        >
          {data.lang1}
          <span className="text-[var(--color-customLang2)]">{data.lang2}</span>
        </p>

        <div className="flex sm:flex-row flex-col gap-2">
          <div className="relative inline-block ">
            {/*Dış kısmı */}
            <input
              checked={theme === "light"}
              id="switch-component-1"
              type="checkbox"
              onChange={toggleTheme}
              className="peer appearance-none w-11 h-5  bg-[var(--color-customSwitch)] rounded-full   cursor-pointer transition-colors duration-300"
            />

            {/* İç kısmı */}
            <label
              htmlFor="switch-component-1"
              className="absolute bottom-1 w-5 h-5 flex items-center justify-center rounded-full transition-transform duration-400 peer-checked:translate-x-6 cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4 text-[#FFE86E] "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-[#FFE86E]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3
             m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707
             m12.728 0l-.707.707M6.343 17.657l-.707.707
             M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              )}
            </label>
          </div>

          <p className="text-[var(--color-customDarkLight)] text-sm font-bold">
            {theme === "dark" ? `${data.lightTheme}` : `${data.darkTheme}`}
          </p>
        </div>
      </div>

      <div className="flex   mr-70 md:mr-204 flex-col">
        <p className="text-[#CBF281] text-4xl font-bold ">{data.name}</p>
        <p
          onClick={handleOrange}
          className="text-white font-medium cursor-pointer text-sm"
        >
          Special Theme
        </p>
      </div>

      <div className="flex sm:flex-row flex-col md:mt-36 space-x-45 items-center">
        <div className="flex flex-col  max-w-[529px]  space-y-5 pt-10">
          <h1 className="text-3xl  md:text-5xl  font-inter font-bold text-[#CBF281]">
            {data.title}
          </h1>
          <p className="text-white font-inter  text-md md:text-2xl ">
            {data.description}
          </p>

          <div className="flex flex-col  sm:flex-row gap-1">
            <button
              onClick={() =>
                window.open(
                  data.socials[0].link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              type="button"
              className="text-[var(--color-customGithubText)] bg-[var(--color-customGithubBack)] border border-white hover:bg-[var(--color-customLang1)]  text-l font-medium rounded-[6px] w-32 h-13 p-4 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <FaGithub className="w-6 h-6 mr-3" />
              {data.socials[0].alt_text}
            </button>

            <button
              onClick={() =>
                window.open(
                  data.socials[1].link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              type="button"
              className="text-[var(--color-customGithubText)]  bg-[var(--color-customGithubBack)] border border-white text-l  hover:bg-[var(--color-customLang1)] font-medium rounded-[6px] w-35 h-13  p-4 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <FaLinkedinIn className="w-6 h-6 mr-3 " />
              {data.socials[1].alt_text}
            </button>
          </div>
        </div>

        <img
          className="rounded-2xl  md:mr-0 mr-40 size-40  md:size-76"
          src={data.profileImage}
          alt="profilepic"
        />
      </div>
    </section>
  );
}
