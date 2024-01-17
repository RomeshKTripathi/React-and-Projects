import React, { useEffect, useState } from "react";
import UserProvider from "./Context";
import Detail from "./Detail";
const Card = () => {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState([]);
  const [profile, setProfile] = useState("");
  const apiUrl = `https://randomuser.me/api/`;

  let debounceRef = undefined;
  const setData = (data) => {
    const dob = data.dob.date.split("T")[0].split("-");
    const obj = {
      profile: data.picture.large,
      details: [
        {
          id: 1,
          name: "Name",
          heading: "Hi, My Name is",
          title: data.name.first,
        },
        {
          id: 2,
          name: "Email",
          heading: "My Email Address is",
          title: data.email,
        },
        {
          id: 3,
          name: "DOB",
          heading: "My Birth Date is",
          title: `${dob[2]}/${dob[1]}/${dob[0]}`,
        },
        {
          id: 4,

          name: "Address",
          heading: "My Address is",
          title: `${data.location.city}, ${data.location.country} `,
        },
        {
          id: 5,
          name: "Phone",
          heading: "My Phone Number is",
          title: data.phone.replaceAll("-", ""),
        },
        {
          id: 6,
          name: "Password",
          heading: "My Password is",
          title: "Password",
        },
      ],
    };
    setDetails(obj.details);
    setProfile(obj.profile);
    setHeading("Hi, My Name is");
    setTitle(data.name.first);
  };

  const randomUser = () => {
    console.log("API Calling...");
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
      });
    console.log("Data Fetched!");
  };

  useEffect(() => {
    randomUser();
  }, []);
  return (
    <UserProvider value={{ setHeading, setTitle, title, setDetails, heading }}>
      <div className="bg-neutral-100 w-4/6 mx-auto p-12 m-4 rounded-md">
        <div
          className={`w-40 h-40 mx-auto ${
            details.length ? "visible" : "invisible"
          }`}
        >
          <img
            className={`rounded-full p-1.5 border border-neutral-400 
            }`}
            src={profile}
            alt=""
            onMouseDown={() => {
              if (debounceRef) {
                clearTimeout(debounceRef);
                console.log("Cleared last call\nNew Call initiated..");
              }
              debounceRef = setTimeout(() => {
                randomUser();
              }, 300);
            }}
          />
        </div>
        <div className="mx-auto my-8">
          <p className="text-neutral-500 text-center">{heading}</p>
          <p className="text-4xl text-center">{title}</p>
        </div>
        <div className="w-96 mx-auto">
          <ul className="flex justify-evenly">
            {details.map((detail) => (
              <Detail key={detail.id} detail={detail} />
            ))}
          </ul>
        </div>
      </div>
    </UserProvider>
  );
};

export default Card;
