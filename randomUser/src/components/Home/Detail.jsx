import React, { useContext, useState } from "react";
import { user } from "./Context";

const Detail = (props) => {
  const { detail } = props;
  // const [detail, setDetail] = useState(userDetail);
  const { setHeading, setTitle, setDetails, title } = useContext(user);
  return (
    <li
      className={`hover:text-lime-500 cursor-pointer capitalize ${
        title === detail.title ? "text-lime-500" : ""
      }`}
      onMouseOver={() => {
        setHeading(detail.heading);
        setTitle(detail.title);
      }}
    >
      {detail.name}
    </li>
  );
};

export default Detail;
