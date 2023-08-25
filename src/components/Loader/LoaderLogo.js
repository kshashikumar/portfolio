import React from "react";
import "./LoaderLogo.css";
import * as Loader from "react-spinners";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return <Loader.ScaleLoader color="#07292c" size={60} />;
  }
}

export default LogoLoader;
