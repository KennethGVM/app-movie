import type { JSX } from "react";

export interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export interface Props {
  height?: number;
  src?: string;
}

export interface ProppsProvider {
  children: JSX.Element | JSX.Element[];
}

export interface AppState {
  name: string;
  url: string;
  time: string;
}