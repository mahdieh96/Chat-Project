import React from "react";

interface headerprops {
  text: string;
}
export const Header: React.FC<headerprops> = ({ text }) => {
  return <div>{text}</div>;
};
