export const getFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("coding-patterns")) || {};
    } catch (e) {
      //
    }
  }
  return ls[key];
};

export const saveToLS = (key, value) => {
  if (global.localStorage) {
    try {
      const ls =
        JSON.parse(global.localStorage.getItem("coding-patterns")) || {};
      global.localStorage.setItem(
        "coding-patterns-store",
        JSON.stringify({
          ...ls,
          [key]: value,
        })
      );
    } catch {
      //
    }
  }
};

export const isMobileView = window.matchMedia("(max-width:750px)").matches;
