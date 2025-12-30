import { Context } from "./AppContext";
import type { AppState, ProppsProvider } from "../interfaces/interfaces";

const state: AppState = {
  name: "Avatar",
  url: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
  time: "2 horas",
};

export const AppProvider = ({ children }: ProppsProvider) => {
  return (
  <Context.Provider value={{state}}>
    {children}
  </Context.Provider>);
};
