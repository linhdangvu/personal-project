import React from "react";

interface ButtonData {
  title: string;
  bgColor?: "dark" | "blue" | "red" | "green";
  onClick?: any;
}

const Button = (props: ButtonData) => {
  const styles = `text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none `;
  const blue = `bg-blue-300 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  const red = `bg-red-300 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`;
  const green = `bg-green-300 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
  const gray = `bg-gray-300 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`;

  const getStyles = () => {
    if (props.bgColor === "blue") {
      return styles + blue;
    } else if (props.bgColor === "red") {
      return styles + red;
    } else if (props.bgColor === "green") {
      return styles + green;
    } else return styles + gray;
  };

  return (
    <button type="button" className={getStyles()} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
