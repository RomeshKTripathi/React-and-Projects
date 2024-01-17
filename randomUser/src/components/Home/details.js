let data = [];
let obj = {};
const apiUrl = `https://randomuser.me/api/`;

const randomUser = () => {
  console.log("Random user called...");
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => (data = data.results))
    .finally(setData);
};

const getDetails = () => {
  return obj.details;
};
const getProfile = () => {
  return obj.profile;
};
const setData = () => {
  obj = {
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
        heading: "My DOB is",
        title: data.dob,
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
        title: data.phone,
      },
      {
        id: 6,
        name: "Password",
        heading: "My Password is",
      },
    ],
  };
};

export { randomUser, getDetails, getProfile };
