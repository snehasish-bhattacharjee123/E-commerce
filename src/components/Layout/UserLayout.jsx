import React from "react";
import Header from "../Common/Header";
import Topbar from "./Topbar";
import Navbar from "../Common/Navbar";

function UserLayout() {
  return (
    <>
      {/* Header */}
      <header>
        <Topbar />
        <Navbar />
      </header>
    </>
  );
}

export default UserLayout;
