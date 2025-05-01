import React, { useContext } from "react";
import { languageContext } from "../App";

export default function ProfilSection() {
  const { lang } = useContext(languageContext);

  return (
    <div className=" font-inter text-white py-24 bg-[var(--color-customBlue)]">
      <div className=" flex-col mx-90">
        <h1 className="text-[#CBF281] font-bold text-[48px]">{lang.profile}</h1>

        <div className="flex flex-row gap-8 mt-4">
          <div>
            <h1 className="text-[30px] font-medium">{lang.profile2}</h1>

            <div className="flex flex-row gap-5 mt-4">
              <div className="flex flex-col text-[#CBF281] font-semibold  gap-6 text-[16px]">
                <p>{lang.birthDate}</p>
                <p>{lang.location}</p>
                <p>{lang.education}</p>
                <p className="mt-5">{lang.position}</p>
              </div>

              <div className="flex flex-col text-[16px] font-normal gap-6">
                <p>20.06.1998</p>
                <p>Antalya</p>
                <p>{lang.school}</p>
                <p>Frontend,UI</p>
              </div>
            </div>
          </div>
          <img
            className="rounded-[10px] w-[290px] h-[300px]"
            src="https://picsum.photos/290/300"
          />

          <div className="max-w-[340px]">
            <h1 className="text-[30px]">{lang.about}</h1>
            <p>{lang.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
