import { useEffect, useState } from "react";
import { saveToLS, getFromLS } from "../components/utils";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    saveToLS("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
