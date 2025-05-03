import React, { useContext } from "react";
import { languageContext } from "../App";

export default function ProfilSection() {
  const { lang } = useContext(languageContext);
  const data = lang.profileSection;

  return (
    <section className="flex justify-center font-inter text-white py-26 bg-[var(--color-customBlue)]">
      <div className=" flex-col justify-center">
        <h1 className="text-[#CBF281] font-bold text-[48px]">{data.title}</h1>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div>
            <h1 className="text-[30px] font-medium">{data.basicInfo}</h1>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row gap-4">
                <p className="text-[#CBF281] font-semibold text-[16px]">
                  {data.birthDate}
                </p>
                <p className="text-[16px] font-normal">{data.birthInfo}</p>
              </div>
              <div className="flex flex-row max-w-40 gap-4">
                <p className="text-[#CBF281] font-semibold text-[16px]">
                  {data.location}
                </p>
                <p className="text-[16px] font-normal">{data.locationInfo}</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-[#CBF281]  max-w-20  font-semibold text-[16px]">
                  {data.education}
                </p>
                <p className="text-[16px] max-w-40 font-normal">
                  {data.school}
                </p>
              </div>
              <div className="flex flex-row gap-4 mt-2">
                <p className="text-[#CBF281] max-w-40 font-semibold text-[16px]">
                  {data.position}
                </p>
                <p className="text-[16px] font-normal">{data.roleInfo}</p>
              </div>
            </div>
          </div>
          <img
            className="rounded-[10px] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.5),0px_8px_28px_-6px_rgba(24,39,75,0.5)] w-80 h-80"
            src={data.aboutPhoto}
          />

          <div className="max-w-[340px]">
            <h1 className="text-[30px]">{data.aboutTitle}</h1>
            <p>{data.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
