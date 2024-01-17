import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <div className="h-96 bg-black/80 flex flex-col text-white py-16">
        <div className="uppercase  text-5xl text-center">
          Random user Generator
        </div>
        <div className="text-center mt-6">
          A free, <span className="underline text-teal-700">open-source</span>{" "}
          API for generating random user data. Like Lorem Ipsum, but for people.
        </div>
      </div>
      <Card />
    </>
  );
};

export default Home;
