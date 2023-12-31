import { ReactNode } from "react";

export type HeaderProps = {
  children: JSX.Element | JSX.Element[] | null;
};

export type HeaderMap = {
  [key: string]: () => JSX.Element;
};
