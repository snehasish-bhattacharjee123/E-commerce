import React from "react";
import Header from "../Common/Header";
import Topbar from "./Topbar";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

function UserLayout() {
  return (
    <>
      {/* Header */}
      <header className="border-b ">
        <Topbar />
        <Navbar />
      </header>
      {/* Body Section */}
      
      
      {/* Footer Section */}
      <Footer/>
    </>
  );
}

export default UserLayout;
