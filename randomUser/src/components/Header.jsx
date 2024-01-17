import React from "react";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-center *:mx-3 p-4 bg-black/85 text-white *:text-gray-300 ">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">User</li>
        <li className="hover:text-white cursor-pointer">Documentation</li>
        <li className="hover:text-white cursor-pointer">Changelog</li>
        <li className="hover:text-white cursor-pointer">Stats & Graphs</li>
        <li className="hover:text-white cursor-pointer">Donate</li>
        <li className="hover:text-white cursor-pointer">Copyright Notice</li>
        <li className="hover:text-white cursor-pointer">Photoshop Extension</li>
      </ul>
    </header>
  );
};

export default Header;
