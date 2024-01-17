import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/80 p-10 text-white relative w-full mt-12">
      <p className="text-5xl uppercase text-center">Random User Generator</p>
      <div className="flex justify-center *:mx-12 mt-16 mb-8">
        <div>
          <p className="text-center"> Designed & Developed</p>
          <img
            className="w-24 mx-auto h-24 rounded-full cursor-pointer my-4 saturate-0 hover:saturate-100"
            src="https://avatars.githubusercontent.com/u/69947588?v=4"
            alt=""
          />
        </div>

        <div className="w-96">
          <p className="center">Copyright Notice</p>
          <p className="text-xs text-justify my-4 text-white/65">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, praesentium alias, consequatur veniam sint placeat
            suscipit necessitatibus distinctio corrupti repellendus asperiores
            sit commodi voluptate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
