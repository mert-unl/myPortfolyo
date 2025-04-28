import React from "react";

export function FirstSection() {
  return (
    <div className="bg-[linear-gradient(to_right,_#4731D3_67%,_#CBF281_33%)] h-[671px] flex flex-col pt-5 items-center ">
      <div className="flex flex-row justify-end ms-142 font-bold text-[15px] space-x-5">
        <p className="text-[#CBF281]">TÜRKÇE'YE GEÇ</p>

        <div className="relative inline-block w-11 h-5">
          <input
            checked
            id="switch-component-1"
            type="checkbox"
            className="peer appearance-none w-11 h-5  bg-[#CBF281] rounded-full checked:bg-[#8f88ff] cursor-pointer transition-colors duration-300"
          />
          <label
            for="switch-component-1"
            className="absolute p-1 left-0.5 top-1 w-3 h-3  bg-[#CBF281] rounded-full border border-[#CBF281] shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:[#8f88ff] cursor-pointer"
          ></label>
        </div>

        <p className="text-[#4731D3]">DARK MODE</p>
      </div>

      <p className="text-[#CBF281] text-[32px] font-bold mr-185">mert</p>

      <div className="flex flex-row space-x-25 items-center">
        <div className="flex flex-col  max-w-[529px]  space-y-5 pt-10">
          <h1 className="text-[54px]  font-inter font-bold text-[#CBF281]">
            I am a Frontend Developer...
          </h1>
          <p className="text-white font-inter text-[24px] ">
            ...who likes to craft solid and scable frontend products with great
            user experiences.
          </p>

          <div className="flex flex-row space-x-5">
            <button
              type="button"
              className="text-[#3730a3] bg-white hover:bg-[#b0c6f7]/90  font-medium rounded-[6px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <img               className="mr-2"

                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                 width="26px"
                height="26px"
              />
              Github
            </button>

            <button
              type="button"
              className="text-[#3730a3] bg-white hover:bg-[#b0c6f7]/90  font-medium rounded-[6px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <img 
              className="mr-2"
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
                width="26px"
                height="26px"
              />
              Linkedin
            </button>
          </div>
        </div>

        <img
          className="rounded-[18px]"
          src="https://picsum.photos/350/375"
          alt="profilepic"
          width="350px"
          height="375px"
        />
      </div>
    </div>
  );
}
