import React from "react";

export default function ProfilSection() {
  return (
    <div className=" text-white py-20 bg-[#4731D3]">
      <div className=" flex-col mx-75">
        <h1 className="text-[#CBF281] font-bold text-[48px]">Profile</h1>

        <div className="flex flex-row gap-8 mt-5">
          <div>
            <h1 className="text-[30px] font-weight:500">Basic Information</h1>

            <div className="flex flex-row gap-5 ">
              <div className="text-[#CBF281] font-weight:600 text-[16px]">
                <p>Birthdate</p>
                <p>Location</p>
                <p>Education</p>
                <p>Preferred Position</p>
              </div>

              <div>
                <p>20.06.1998</p>
                <p>Antalya</p>
                <p>Antalya Bilim</p>
                <p>Frontend,UI</p>
              </div>
            </div>
          </div>
          <img
            className="rounded-[10px] w-[290px] h-[300px]"
            src="https://picsum.photos/290/300"
          />

          <div className="max-w-[340px]">
            <h1 className="text-[30px]">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ipsum dignissimos nobis esse ad ipsa, totam iusto mollitia
              incidunt provident aliquid voluptates suscipit cum ipsam laborum
              quae aperiam architecto in! Animi aliquam nulla aspernatur,
              aperiam consequuntur labore quam facilis deserunt quaerat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
