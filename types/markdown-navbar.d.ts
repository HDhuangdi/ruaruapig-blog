declare module "markdown-navbar" {
  import { Component } from "react";

  interface IProps {
    readonly source?: any;
    readonly headingTopOffset?: number;
    readonly ordered?: boolean;
    [propname: string]: any;
  }

  export default class MarkNav extends Component<IProps, {}> {}
}
