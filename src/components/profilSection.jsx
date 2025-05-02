import React, { useContext } from "react";
import { languageContext } from "../App";

export default function ProfilSection() {
  const { lang } = useContext(languageContext);
  const data = lang.profileSection;

  return (
    <div className="flex justify-center font-inter text-white py-26 bg-[var(--color-customBlue)]">
      <div className=" flex-col justify-center">
        <h1 className="text-[#CBF281] font-bold text-[48px]">{data.title}</h1>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div>
            <h1 className="text-[30px] font-medium">{data.basicInfo}</h1>

            <div className="flex flex-row gap-5 mt-4">
              <div className="flex flex-col text-[#CBF281] font-semibold  gap-6 text-[16px]">
                <p>{data.birthDate}</p>
                <p>{data.location}</p>
                <p>{data.education}</p>
                <p className="mt-5">{data.position}</p>
              </div>

              <div className="flex flex-col text-[16px] font-normal gap-6">
                <p>{data.birthInfo}</p>
                <p>{data.locationInfo}</p>
                <p>{data.school}</p>
                <p>{data.roleInfo}</p>
              </div>
            </div>
          </div>
          <img
            className="rounded-[10px] w-[290px] h-[300px]"
            src={data.aboutPhoto}
          />

          <div className="max-w-[340px]">
            <h1 className="text-[30px]">{data.aboutTitle}</h1>
            <p>{data.aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
