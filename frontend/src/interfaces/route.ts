import { FC } from "react";

export interface IRoute {
  name: string;
  path: string;
  title: string;
  component: FC<any>;
  protected: boolean;
}
