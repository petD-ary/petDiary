import { ReactNode } from "react";

export type ContextType = {
  isClose: boolean;
  isBack: boolean;
  isHome: boolean;
  isBackClose: boolean;
  isAlert: boolean;
  isInteractive: boolean;
};

export type HeaderProps = {
  children: JSX.Element | JSX.Element[] | null;
};

export type HeaderMap = {
  [key: string]: () => JSX.Element;
};
