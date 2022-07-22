import React from "react";
import { Image } from "@mantine/core";
import MainNav from "./Main-nav";
import "./App-header.css";

const AppHeader = () => {
  return (
    <>
      <div className="header-wrap">
        <Image className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88" alt="Клен" />
        <MainNav/>
      </div>
    </>
  );
};
export default AppHeader;
