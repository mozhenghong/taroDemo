import React from "react";
import userStore from "./user.store";

const store = {
  userStore,
};

const storesContext = React.createContext({ ...store });
export const useStores = () => React.useContext(storesContext);

export const rootStore = { ...store };
