import { createContext } from "react";

const DEFAULT_MODEL: any = {
  nameModel: "Text-to-Text",
  setNameModel: () => {},
};

export const ModelContext = createContext<any>(DEFAULT_MODEL);
