import { createContext, useState } from "react";

export const ThemeContext = createContext("dark");

export function ThemeProvider(props) {

  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme((prevState) => {
      if(prevState === "dark"){
        return "light";
      } else {
        return "dark";
      }
    });
  }

  return (
 
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: handleTheme
      }}>

      {props.children}

    </ThemeContext.Provider>
 
  );
}