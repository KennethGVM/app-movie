import { createContext } from "react";
import type { AppState } from "../interfaces/interfaces";

type State = {
  state: AppState
}

export const Context = createContext<State>({} as State);